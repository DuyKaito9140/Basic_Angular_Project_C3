import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-form',
  templateUrl: './two-way-binding-form.component.html',
  styleUrls: ['./two-way-binding-form.component.css']
})
export class TwoWayBindingFormComponent implements OnInit {

  textInputValue: string = '';

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onUpdateTextInput(event: Event) {
    this.textInputValue = (<HTMLInputElement>event.target).value;
  }

  resetTextInput() {
    this.textInputValue = '';
    document.getElementsByTagName("input")[0].value = '';
  }

}
