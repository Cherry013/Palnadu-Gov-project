import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private Login = {};
  public OverallDetails = {};
  private Finalsubmittion_Results = {};
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private Router: Router) { }

  Getuserandpwd(Login: object): Observable<{}> {
    this.Login = Login;
    return this.http.post("http://localhost:3000/Login/", Login, { headers: this.headers })
  }
  SaveData(data: Object): Object {
    console.log(this.OverallDetails);
    return this.OverallDetails = Object.assign(this.OverallDetails, data);
  }
  SendData(data: Object):Observable<{}> {
    return this.http.post("http://localhost:3000/RecievedData/",data, { headers: this.headers })
  }
}
