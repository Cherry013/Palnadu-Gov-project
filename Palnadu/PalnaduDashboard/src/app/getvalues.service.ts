import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetvaluesService {
  work = ['Begging', 'shop/Pvt', 'Railway Station', 'Hotels', 'Brick_Klins', 'Factories', 'Construction_Works', 'others'];

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private Router: Router) { }
  begging(Mandal: String,Work:String): Observable<{}> {
    console.log("http://localhost:3000/getdata/" + Mandal + "/" + Work +"/" );
    return this.http.get("http://localhost:3000/getdata/" + Mandal + "/" + Work +"/" );
  }
}
