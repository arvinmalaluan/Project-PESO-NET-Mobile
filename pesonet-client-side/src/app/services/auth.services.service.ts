import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:3000/api/users';

  signin(data: any) {
    return this.httpClient.post(this.url + '/signin', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  signup(data: any) {
    return this.httpClient.post(this.url, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  getAllPosts() {
    return this.httpClient.post(this.url + '/getpost', {
      headers: new HttpHeaders(),
    });
  }

  upload(data: any) {
    return this.httpClient.post(this.url + '/upload', data);
  }

  search(data: any) {
    return this.httpClient.post(this.url + '/searchjob', data);
  }
}
