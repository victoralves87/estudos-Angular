import { Component } from '@angular/core';

@Component({
  selector: 'app-component02',
  imports: [],
  templateUrl: './component02.component.html',
  styleUrl: './component02.component.css'
})
export class Component02Component {
    //função
    mensagem(){
      alert('hello world!!');
    }
}
