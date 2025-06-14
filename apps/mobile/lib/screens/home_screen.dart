import 'package:flutter/material.dart';
import 'package:mobile/widgets/header_screen.dart';
import 'package:tabler_icons/tabler_icons.dart';
import 'package:mobile/widgets/navbar_widget.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

Future<void> sendEmergencyMessage() async {
  final url = Uri.parse("https://aiden-production.up.railway.app/twilio/send-message/");

  final response = await http.post(
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonEncode({
      "body": "Soy Victor Garcia y mi ubicacion es 48.8566,2.3522"
    }),
  );

  if (response.statusCode == 200) {
    print("Mensaje enviado correctamente");
  } else {
    print("Error al enviar mensaje: ${response.statusCode}");
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: HeaderWidget(),
      body: Center(
        child: Card(
          elevation: 4,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20.0),
          ),
          color: Color.from(alpha: 1, red: 0.98, green: 0.957, blue: 0.882),
          child: Padding(
            padding: const EdgeInsets.all(52), 
            child: IconButton(
            style: ButtonStyle(backgroundColor: WidgetStatePropertyAll<Color>(
                              Color.fromRGBO(158, 150, 228, 1))),
            onPressed: sendEmergencyMessage,
            icon: Icon(TablerIcons.alert_triangle, color: Colors.white, size: 200, weight: 0.2,)
            ),
          )
          ),
        ),
        bottomNavigationBar: NavbarWidget(),
      );
  }
}
