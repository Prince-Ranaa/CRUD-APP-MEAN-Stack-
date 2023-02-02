import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  url = 'https://easy-teal-fly-ring.cyclic.app';

  getStudentData() {
    return this.http.get(this.url);
  }

  addStudentData(data: any) {
    return this.http.post(this.url, data);
  }

  deleteStudentData(item: any) {
    console.log(this.url + '?id=' + item._id);
    return this.http.delete(this.url + '?id=' + item._id);
  }

  updateStudentData(id: any, data: any) {
    return this.http.put(this.url + '?id=' + id, data);
  }
}
