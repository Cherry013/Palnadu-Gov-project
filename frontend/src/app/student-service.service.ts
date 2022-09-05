import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private id: string = '';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) { }

  getAllStudents():Observable<{}> {
    return this.http.get(this.baseUrl + '/Students', { headers: this.headers});
  }

  getStudent(_id: any):Observable<{}> {
    return this.http.get(this.baseUrl + `/Students/${_id}`, { headers: this.headers});
  }
}
