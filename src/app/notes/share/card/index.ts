import { Component, Input } from '@angular/core';


@Component({
  selector: 'card',
  templateUrl: 'app/notes/share/card/card.html',
  styleUrls: [ 'app/notes/share/card/card.css']
})
export class Card {
  @Input()
  private note;
}
