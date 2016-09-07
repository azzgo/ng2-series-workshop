import { Component } from "@angular/core"

import { AppBar } from "../share"
import { Notes } from "./notes"


@Component({
  selector: 'home',
  template: require('./home.html'),
  directives: [AppBar, Notes]
})
export class Home{}