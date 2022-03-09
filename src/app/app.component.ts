import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-data-binding';
  valoresIcon: number = 0;

  constructor(){}
    Soma(){
      this.valoresIcon++;
    }

    Diminuir(){
      this.valoresIcon--;
    }
}
