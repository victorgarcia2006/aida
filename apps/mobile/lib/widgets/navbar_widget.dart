import 'package:flutter/material.dart';
import 'package:tabler_icons/tabler_icons.dart';

class NavbarWidget extends StatelessWidget {
  final Function(int) onTabChange;

  NavbarWidget({Key? key, required this.onTabChange}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      type: BottomNavigationBarType.fixed,
      backgroundColor: Color.fromRGBO(250, 244, 225, 1),
      items: [
        BottomNavigationBarItem(
          icon: Icon(TablerIcons.home, size: 32, color: Color.fromRGBO(158, 150, 228, 1)),
          label: '',
        ),
        BottomNavigationBarItem(
          icon: Icon(TablerIcons.message, size: 32, color: Color.fromRGBO(158, 150, 228, 1)),
          label: '',
        ),
        BottomNavigationBarItem(
          icon: Icon(TablerIcons.note, size: 32, color: Color.fromRGBO(158, 150, 228, 1)),
          label: '',
        ),
        BottomNavigationBarItem(
          icon: Icon(TablerIcons.users, size: 32, color: Color.fromRGBO(158, 150, 228, 1)),
          label: '',
        ),
        BottomNavigationBarItem(
          icon: Icon(TablerIcons.settings, size: 32, color: Color.fromRGBO(158, 150, 228, 1)),
          label: '',
        ),
      ],
      onTap: (index) {
        if (index == 1) {
          // Si se presiona el botón de mensaje (índice 1), navega a la pantalla de chat
          Navigator.pushNamed(context, '/chat');
        } else {
          onTabChange(index);
        }
      },
    );
  }
}