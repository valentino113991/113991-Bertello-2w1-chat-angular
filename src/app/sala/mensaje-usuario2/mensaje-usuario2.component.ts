import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mensaje-usuario2.component.html',
  styleUrl: './mensaje-usuario2.component.css'
})
export class MensajeUsuario2Component {
  mensaje2: string = '';
  nombre: string = 'María: ';
  @Output() mensajeEnviado = new EventEmitter<string>();

  enviarMensaje(){
    let mensajeCompleto = this.nombre + this.mensaje2;
    this.mensajeEnviado.emit(mensajeCompleto);
  }
}
