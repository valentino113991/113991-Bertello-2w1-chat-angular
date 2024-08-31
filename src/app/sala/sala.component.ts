import { Component } from '@angular/core';
import { MensajeUsuario1Component } from './mensaje-usuario1/mensaje-usuario1.component';
import { MensajeUsuario2Component } from './mensaje-usuario2/mensaje-usuario2.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuario1Component, MensajeUsuario2Component, CommonModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  mensajes: string [] = [];

  modificarConversacion(mensaje: string){
    this.mensajes.push(mensaje);
  }
}
