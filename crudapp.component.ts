import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-crudapp',
  imports: [FormsModule, CommonModule],
  templateUrl: './crudapp.component.html',
  standalone: true,
  styleUrl: './crudapp.component.css'
})
export class CrudappComponent {

  schooldata: any = {
    "sname": "",
    "dclass": "",
    "dept": ""
  }
  studdata: any;
  constructor(private StudentService: StudentService) { }

  savedetails() {

    this.studdata = this.schooldata;
  }

  show() {

    this.studdata = this.StudentService.getStudents();
  }



}
