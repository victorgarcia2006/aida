import 'package:flutter/material.dart';
import 'package:tabler_icons/tabler_icons.dart';

class HeaderWidget extends StatelessWidget implements PreferredSizeWidget {
  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: Color.fromRGBO(250, 244, 225, 1),
      shadowColor: Color.from(alpha: 0.247, red: 0, green: 0, blue: 0),
      title: Text(
        "Bienvenido John Doe",
        style: TextStyle(
          color: Color.fromRGBO(158, 150, 228, 1),
          fontWeight: FontWeight.bold,
        ),
      ),
      leading: Padding(
        padding: const EdgeInsets.all(8), // Ajusta la posición
        child: Card(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(100.0),
          ),
          color: Color.fromRGBO(158, 150, 228, 1),
          child: Center(
            child: Icon(TablerIcons.user, color: Colors.white, size: 32),
          )
        ),
      ),
    );
  }

  @override
  Size get preferredSize => Size.fromHeight(64);
}
