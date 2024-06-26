import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
    expression:string = '';
    result:string = '';

    goBack() {
      this.expression = this.expression.substring(0,this.expression.length-1)
    }

    insertText(text:string) {
      this.expression += text;
      console.log(this.expression)
    }

    calculate() {
      try {
        this.result = eval(this.expression);
      }
      catch(error) {
        this.result = "Invalid Expression";
      }
    }

    clear() {
      this.expression = "";
      this.result = "";
    }
}
