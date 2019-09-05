import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { requiredFileType } from '../custom-validators/requireFileTypes';
import { toFormData } from '../custom-functions/toFormData';
import { uploadProgress } from '../custom-functions/upload-operators';
import { toResponseBody } from '../custom-functions/toResponseBody';

@Component({
  selector: 'app-uploadform',
  templateUrl: './uploadform.component.html',
  styleUrls: ['./uploadform.component.css']
})
export class UploadformComponent implements OnInit {

  progress = 0;
  percentDone = 0;
  signup = new FormGroup(
    {
      email: new FormControl(null, Validators.required),
      image: new FormControl(null, [Validators.required, requiredFileType('png')])
    }
  );

  constructor(private http: HttpClient) { }

  submit() {
    this.http.post('http://...', toFormData(this.signup.value), {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      uploadProgress(progress => (this.percentDone = progress)),
      toResponseBody()
    ).subscribe(response => {
      this.progress = 0;
      this.signup.reset();
    });
  }

  ngOnInit() {
  }

  }
