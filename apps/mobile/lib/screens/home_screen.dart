import 'package:flutter/material.dart';
import 'package:mobile/widgets/navbar_widget.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _selectedIndex = 0;

  void _onTabChange(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Aida'),
      ),
      body: Center(
        child: Text('Página $_selectedIndex'), // Muestra la página seleccionada
      ),
      bottomNavigationBar: NavbarWidget(
        onTabChange: _onTabChange,
      ),
    );
  }
}
