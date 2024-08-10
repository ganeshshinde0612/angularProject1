import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailService } from './services/email.service';
import { Success } from './model/success';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'emailsent';

  constructor(private fb:FormBuilder, private emailservice:EmailService){}
  Emailregi:FormGroup

  ngOnInit(): void {
    this.Emailregi=this.fb.group(
      {
        toemail:[],
        msg:[],
        subject:[]
      }
    )
  }

  message:any;
  onsubmit()
  {
    this.emailservice.postEmail(this.Emailregi.value).subscribe(

      (data:Success)=>{
        this.message=data.msg
      },

      (error:any)=>
        {
          this.message=error.error.message
        }

    )
    // alert("successfully sent");
    // this.Emailregi.reset()
  }
}
