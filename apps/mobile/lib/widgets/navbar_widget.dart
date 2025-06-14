import 'package:flutter/material.dart';
import 'package:tabler_icons/tabler_icons.dart';
import 'package:mobile/screens/home_screen.dart';
import 'package:mobile/screens/chat_screen.dart';

class NavbarWidget extends StatefulWidget {
  @override
  _NavbarWidgetState createState() => _NavbarWidgetState();
}

class _NavbarWidgetState extends State<NavbarWidget> {
  int _selectedIndex = 0;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });

    if (index == 0) {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => HomeScreen()),
      );
    } else if (index == 1) {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => ChatScreen()),
      );
    }
    // puedes agregar más rutas para los otros íconos si quieres
  }

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      currentIndex: _selectedIndex,
      onTap: _onItemTapped,
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