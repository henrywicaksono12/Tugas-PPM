import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  name = 'Angular';

  a = null;
  b = null;
  hasil = 0;
  pola = [];
  jenis = "";

  start(a, b){
    let c = Math.pow(a, b);

    this.pola = [];
    this.hasil = c;
    let row = "";

    if(this.hasil % 2 == 0)
    {
      if(a >= b)
      {
        let d = a;
      }
      else
      {
        let d = b;
      }

      this.jenis = "B";

      for (let i = d; i <= c; i++)
      {
        row = "";

        for(let j = 0; j < i; j++)
        {
          row += "*";
        }

        this.pola.push(row);
      }
    }
    else
    {
      this.jenis = "A";

      if(a >= b)
      {
        let d = a;
      }
      else{
        let d = b;
      }

      for (let i = 0; i < d; i++)
      {
        row = "";

        if (i < b)
        {
          for(let j = 0; j < b-i; j++)
          {
            row += "*";
          }
        }

        if(i < a)
        {
          for(let j = 0; j <= i; j++)
          {
            row += "o";
          }
        }

        this.pola.push(row);
      }
    }

    if(a == null || b == null)
    {
      this.pola = [];
      this.hasil = 0;
      this.pola.push("Input the numbers first");
    }
  }

  clear(a, b){
    this.a = null;
    this.b = null;
    this.hasil = 0;
    this.pola = [];
  }
}
