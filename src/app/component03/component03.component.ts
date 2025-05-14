import { Component } from '@angular/core';

@Component({
  selector: 'app-component03',
  standalone: true,
  imports: [],
  templateUrl: './component03.component.html',
  styleUrls: ['./component03.component.css']
})
export class Component03Component {

  imagem: string = 'dia.jpg';

  alterarImagem() {
    this.imagem = this.imagem === 'dia.jpg' ? 'noite.jpg' : 'dia.jpg';
  }
}
