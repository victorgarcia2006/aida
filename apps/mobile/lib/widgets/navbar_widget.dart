import 'package:flutter/material.dart';
import 'package:tabler_icons/tabler_icons.dart';

class NavbarWidget extends StatelessWidget {
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
    );
  }
}