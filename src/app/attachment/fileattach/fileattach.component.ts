import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-fileattach',
  templateUrl: './fileattach.component.html',
  styleUrl: './fileattach.component.css'
})
export class FileattachComponent implements OnInit{

constructor(private fb:FormBuilder , private emailservice:EmailService){}
attachFile:FormGroup
ngOnInit(): void {
  this.attachFile=this.fb.group(
    {
      toemail:[],
      msg:[],
      subject:[]
    }
  )
}
photoFile:any;

  onPhotoSelect(event:any)
  {
    this.photoFile=event.target.files[0];
  }

  onsubmit()
  {
    var d=JSON.stringify(this.attachFile.value)
    let formData:FormData=new FormData()
    formData.append("doc",this.photoFile)
    formData.append("emailfields",d)
    // formData.append(this.httpOptions)

    this.emailservice.sendEmailInfo(formData).subscribe(
      (data) => {
        // this.e = data
        console.log(data)
        alert("successful email sent")
      })
      // (error) => {
      //   console.log(error.error.msg);
        
      //   this.errorMsg = error.error.msg;
      //   alert(this.errorMsg);
//       }

  }
}
