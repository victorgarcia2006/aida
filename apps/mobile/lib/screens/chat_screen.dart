import 'package:flutter/material.dart';
import 'package:tabler_icons/tabler_icons.dart';
import 'package:mobile/screens/home_screen.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter_dotenv/flutter_dotenv.dart';

class ChatScreen extends StatefulWidget {
  @override
  _ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  final _controller = TextEditingController();
  final List<Map<String, String>> _messages = [];

  void _sendMessage() {
    final input = _controller.text;
    if (input.isEmpty) return;

    setState(() {
      _messages.add({'sender': 'user', 'text': input});
    });

    _controller.clear();

    _getBotResponse(input);
  }

  void _getBotResponse(String userMessage) async {
  final apiKey = await dotenv.env['GEMINI_API_KEY'];
  final url = Uri.parse(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=$apiKey",
  );

  final headers = {"Content-Type": "application/json"};
  final body = jsonEncode({
    "contents": [
      {
        "parts": [
          {"text": userMessage}
        ]
      }
    ]
  });

  try {
    final response = await http.post(url, headers: headers, body: body);
    final data = jsonDecode(response.body);

    final botReply =
        data['candidates']?[0]?['content']?['parts']?[0]?['text'] ??
            "Lo siento, no pude responder en este momento.";

    setState(() {
      _messages.add({'sender': 'bot', 'text': botReply});
    });
  } catch (e) {
    setState(() {
      _messages.add({'sender': 'bot', 'text': 'Ocurrió un error: $e'});
    });
  }
}
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Color.fromRGBO(250, 244, 225, 1),
        shadowColor: Color.from(alpha: 0.247, red: 0, green: 0, blue: 0),
        title: Text(
          "¡Chatea con Aida!",
          style: TextStyle(
            color: Color.fromRGBO(158, 150, 228, 1),
            fontWeight: FontWeight.bold,
          ),
        ),
        leading: Padding(
          padding: const EdgeInsets.all(8), // Ajusta la posición
          child: IconButton(
            style: ButtonStyle(
              backgroundColor: WidgetStateProperty.all<Color>(
                Color.fromRGBO(158, 150, 228, 1),
              ),
            ),
            icon: Icon(TablerIcons.chevron_left, color: Colors.white),
            onPressed: 
                () => {
                  Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (context) => HomeScreen()),
                  ),
                },
          ),
        ),
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              itemCount: _messages.length,
              itemBuilder: (ctx, i) {
                final message = _messages[i];
                final isUser = message['sender'] == 'user';

                return Container(
                  alignment:
                      isUser ? Alignment.centerRight : Alignment.centerLeft,
                  padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  child: Container(
                    padding: EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color:
                          isUser
                              ? Color.fromRGBO(158, 150, 228, 1)
                              : Color.fromRGBO(250, 244, 225, 1),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Text(message['text']!),
                  ),
                );
              },
            ),
          ),
          Divider(height: 1),
          Card(
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(20),
                topRight: Radius.circular(20),
              ),
            ),
            color: Color.fromRGBO(250, 244, 225, 1),
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: 8, vertical: 6),
              child: Row(
                children: [
                  Expanded(child: TextField(controller: _controller)),
                  IconButton(
                    style: ButtonStyle(
                      backgroundColor: WidgetStateProperty.all<Color>(
                        Color.fromRGBO(158, 150, 228, 1),
                      ),
                    ),
                    icon: Icon(TablerIcons.send, color: Colors.white),
                    onPressed: _sendMessage,
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
