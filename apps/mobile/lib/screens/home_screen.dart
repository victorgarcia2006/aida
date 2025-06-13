import 'package:flutter/material.dart';
import 'package:mobile/widgets/header_screen.dart';
import 'package:tabler_icons/tabler_icons.dart';
import 'package:mobile/widgets/navbar_widget.dart';

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
            onPressed: () => (),
            icon: Icon(TablerIcons.alert_triangle, color: Colors.white, size: 200, weight: 0.2,)
            ),
          )
          ),
        ),
        bottomNavigationBar: NavbarWidget(),
      );
  }
}
