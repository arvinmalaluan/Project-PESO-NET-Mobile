import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServicesService } from 'src/app/services/auth.services.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  createPost: any = FormGroup;
  selectedFile: File | undefined;
  name: string = 'Arvin Malaluan';

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  constructor(
    private _fb: FormBuilder,
    private _userservice: AuthServicesService
  ) {}

  ngOnInit(): void {
    this.createPost = this._fb.group({
      image: [''],
    });
  }

  handleSubmit() {
    const data = this.createPost.value;

    console.log(data);
  }

  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      this._userservice.upload(formData).subscribe((response: any) => {
        console.log(response);
      });
    }
  }

  close() {}
}
