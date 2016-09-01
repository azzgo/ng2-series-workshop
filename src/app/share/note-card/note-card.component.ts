import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'note-card',
  templateUrl: 'app/share/note-card/note-card.component.html',
  styleUrls: [ 'app/share/note-card/note-card.component.css']
})
export class NoteCard {
  @Input()
  private note;

  @Output()
  private checked = new EventEmitter()

  private onChecked() {
      this.checked.emit(this.note);
  }
}
