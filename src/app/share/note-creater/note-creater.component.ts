import { Component, Output, EventEmitter } from '@angular/core';
import { isEmpty } from 'lodash'

import { ColorSelector } from './color-selector.component';


@Component({
  selector: 'note-creater',
  directives: [ ColorSelector ],
  templateUrl: "app/share/note-creater/note-creater.component.html",
  styleUrls: [ "app/share/note-creater/note-creater.component.css"]
})
export class NoteCreater {
  private newNote = {
    title: "",
    value: "",
    color: "white"
  }
  private isFullForm:boolean = false;

  @Output()
  private createNote = new EventEmitter();

  private onCreateNote() {
    if (isEmpty(this.newNote.title) || isEmpty(this.newNote.value)) {
      console.log("empty");
      return;
    }
    const { title, value, color } = this.newNote;
    this.createNote.emit({title, value, color});

    this.reset();
  }

  private reset() {
    this.newNote = {
      title: "",
      value: "",
      color: "white"
    }
  }

  private getColor(color: string) {
    this.newNote.color = color;
  }
}
