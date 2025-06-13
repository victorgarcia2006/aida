import 'package:flutter/material.dart';
import 'package:stream_chat_flutter/stream_chat_flutter.dart';

class MessageListView extends StatelessWidget {
  const MessageListView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StreamMessageListView(
      messageListController: StreamMessageListController(),
    );
  }
}

class MessageInput extends StatelessWidget {
  const MessageInput({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StreamMessageInput(
      messageInputController: StreamMessageInputController(
        channel: StreamChat.of(context).client.channel('messaging', id: 'ia_chat'), // Asegúrate de que el ID del canal coincida
      ),
    );
  }
}