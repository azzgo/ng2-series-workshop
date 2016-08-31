import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'color-selector',
  templateUrl: 'app/share/note-creater/color-selector.component.html',
  styleUrls: [ 'app/share/note-creater/color-selector.component.css']
})
export class ColorSelector {
  private isHidden:boolean = false;
  private colors = [ 
    'rgb(255, 138, 128)', 
    'rgb(255, 209, 128)', 
    'rgb(255, 255, 141)', 
    'rgb(207, 216, 220)', 
    'rgb(128, 216, 255)', 
    'rgb(167, 255, 235)', 
    'rgb(204, 255, 144)' 
  ];
  @Output("getColor")
  private color = new EventEmitter()

  private togglePanel(value: boolean) {
    console.log(value)
    this.isHidden = value;
  }

  private chooseColor(value: string) {
    this.color.emit(value);
    this.isHidden = false;
  }
}
