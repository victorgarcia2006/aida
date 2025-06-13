import 'package:flutter/material.dart';
import 'package:stream_chat_flutter/stream_chat_flutter.dart';
import 'message_wid.dart';

class ChatScreen extends StatelessWidget {
  const ChatScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Chat con IA'),
      ),
      body: StreamChannel(
        channel: StreamChat.of(context).client.channel('messaging', id: 'ia_chat'), // Reemplaza 'ia_chat' con el ID de tu canal
        child: Column(
          children: <Widget>[
            Expanded(
              child: MessageListView(),
            ),
            MessageInput(),
          ],
        ),
      ),
    );
  }
  }