import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent {
  studentData: any = [];

  editing = false;

  name = '';
  age = '';
  id = '';
  constructor(private api: ApiService) {
    this.api.getStudentData().subscribe((data) => {
      this.studentData = data;
    });
  }

  getStudentData() {
    this.api.getStudentData().subscribe((data) => {
      this.studentData = data;
    });
  }

  isEditing() {
    this.editing = false;
    this.name = '';
    this.age = '';
  }

  addStudentData() {
    let data = { name: this.name, age: this.age };
    if (this.name == '' || this.age == '') {
      alert('all fields are required');
    } else {
      this.api.addStudentData(data).subscribe(() => {
        this.getStudentData();
      });
      this.name = '';
      this.age = '';
    }
  }

  edit(item: any) {
    this.editing = true;
    this.name = item.name;
    this.age = item.age;
    this.id = item._id;
    console.log(this.name, this.age, this.id);
  }

  updateStudent() {
    let data = { name: this.name, age: this.age };

    this.api.updateStudentData(this.id, data).subscribe(() => {
      alert('Updated Successfully');
      this.getStudentData();
      this.editing = false;
    });
  }

  deleteData(item: any) {
    this.api.deleteStudentData(item).subscribe((data) => {
      this.getStudentData();
    });
  }
}
