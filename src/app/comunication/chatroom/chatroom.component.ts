import { Component } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrl: './chatroom.component.css'
})
export class ChatroomComponent {
  messages: { text: string; type: 'sent' | 'received'; isFile?: boolean }[] = [
    { text: 'Hola, ¿en qué puedo ayudarte?', type: 'received' },
    { text: 'Quisiera saber los pasos para iniciar un proceso de divorcio.', type: 'sent' }
  ];

  newMessage: string = '';

  // Método para enviar un mensaje de texto
  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ text: this.newMessage, type: 'sent' });
      this.newMessage = '';
    }
  }

  // Método para manejar la subida de archivos
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const fileMessage = `Archivo subido: ${file.name}`;
      this.messages.push({ text: fileMessage, type: 'sent', isFile: true });
    }
  }
}
