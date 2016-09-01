import { Injectable } from '@angular/core'
import { Http, Headers, Response } from '@angular/http'
import { Observable } from 'rxjs'


@Injectable()
export class NotesService {
  private api_url = 'http://localhost:3500';
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: Http) { }

  public get(): Observable<any> {
    return this.http.get(`${this.api_url}/notes`, { headers: this.headers, body: ''})
      .map((response: Response) => {      
        if (!response.ok) {
          throw new Error(`status: ${response.status}, text: ${response.statusText}`);
        }
        return response.json();
      })
      .catch(err => Observable.throw(err))
  }

  public save(note): Observable<any> {
    return this.http.post(`${this.api_url}/notes`, JSON.stringify(note), { headers: this.headers })
      .map((response: Response) => {
        if (!response.ok) {
          throw new Error(`status: ${response.status}, text: ${response.statusText}`);
        }
        return response.json();
      })
      .catch(err => Observable.throw(err))
  }

  public remove(note) {
    return this.http.delete(`${this.api_url}/notes/${note.id}`, { headers: this.headers, body: '' })
      .map((response: Response) => {
        if (!response.ok) {
          throw new Error(`status: ${response.status}, text: ${response.statusText}`);
        }

        return response.json();
      })
      .catch(err => Observable.throw(err))
  }
}