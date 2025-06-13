import 'package:flutter/material.dart';
import 'package:mobile/widgets/header_screen.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: HeaderWidget(),
      body: Text("Holi"),
    );
  }
}