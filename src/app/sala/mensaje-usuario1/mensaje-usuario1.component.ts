import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mensaje-usuario1.component.html',
  styleUrl: './mensaje-usuario1.component.css'
})
export class MensajeUsuario1Component {
  mensaje1: string = '';
  nombre: string = 'Pepe: ';
  @Output() mensajeEnviado = new EventEmitter<string>();

  enviarMensaje(){
    let mensajeCompleto = this.nombre + this.mensaje1;
    this.mensajeEnviado.emit(mensajeCompleto);
  }
}
