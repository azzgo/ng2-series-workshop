import { Component } from '@angular/core';
import { AppBar, NoteCard, NoteCreater} from '../share'

import { NotesService } from './notes.servcie'


@Component({
  selector: 'notes-container',
  directives: [ AppBar, NoteCard, NoteCreater ],
  templateUrl: 'app/notes/notes.componet.html',
  styleUrls: [ 'app/notes/notes.componet.css'],
})
export class NotesComponent{
  private notes = [];

  constructor(private notesService: NotesService){
    this.notesService.get()
    .subscribe(res => {
      this.notes = res.data;
    })
  }

  private onNoteChecked(note) {
    this.notesService.remove(note)
    .subscribe(note=>{
      const i = this.notes.findIndex((item) => item.id == note.id);
      this.notes.splice(i, 1)
    })
  }

  private onAddNote(note) {
    this.notesService.save(note)
    .subscribe(note=>this.notes.push(note));
  }
}
