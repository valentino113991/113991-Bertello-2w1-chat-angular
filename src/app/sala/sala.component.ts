import { Component } from '@angular/core';
import { MensajeUsuario1Component } from './mensaje-usuario1/mensaje-usuario1.component';
import { MensajeUsuario2Component } from './mensaje-usuario2/mensaje-usuario2.component';
import { CommonModule } from '@angular/common';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

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

  fileName= 'ExcelSheet.xlsx';

  exportexcel(){
    /* pass here the table id */
    let element = document.getElementById('holaId');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
  }

  exportPdf() {
    // Agarramos la tabla y la asignamos en la variable "elementToPrint"
    const elementToPrint: any = document.getElementById('holaId');
    
    html2canvas(elementToPrint, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
  
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
  
      const imgWidth = pageWidth - 20;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      const positionY = 10; 
  
      pdf.addImage(imgData, 'PNG', 10, positionY, imgWidth, imgHeight);
  
      pdf.setProperties({
        title: 'table',
        subject: 'Pdf from angular to pdf',
        author: 'Grupo 6'
      });
      
      pdf.setFontSize(12);
  
      pdf.save('myFile.pdf'); //NOMBRE DEL ARCHIVO
    });
  }
}
