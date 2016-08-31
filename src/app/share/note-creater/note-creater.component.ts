import { Component, Output, EventEmitter } from '@angular/core';
import { isEmpty } from 'lodash'


@Component({
  selector: 'note-creater',
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
    const { title, value } = this.newNote;
    this.createNote.emit({title, value});

    this.reset();
  }

  private reset() {
    this.newNote = {
      title: "",
      value: "",
      color: "white"
    }
  }
}
