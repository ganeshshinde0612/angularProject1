import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailSender } from '../model/email-sender';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  postEmail(email:EmailSender){
    return this.http.post('http://localhost:9090/sendemail',email)
  }

  sendEmailInfo(email:any){
    return this.http.post('http://localhost:9090/emailattachment',email)
  }
}
