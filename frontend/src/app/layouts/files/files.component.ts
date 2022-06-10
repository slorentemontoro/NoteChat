import { Component, Input, OnInit } from '@angular/core';
import { FileService } from 'src/app/entities/files/service/file.service';
import { Subjects } from 'src/app/entities/subjects/model/subject.model';
import jwt_decode from "jwt-decode";
import { ServiceService } from 'src/app/entities/subjects/service/service.service';
import { Files } from 'src/app/entities/files/model/filePost.model';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  @Input() id: any;
  entryParam: any
  subjects: Subjects[] = [];
  archivo: Files = new Files("", "", "")
  userId!: string
  pdf!: any
  constructor(private subjectService: ServiceService,
              private fileService: FileService) { }

  ngOnInit(): void {
    this.getSubjects()
  }


  async getSubjects() {

    this.subjectService.getSubjectsOfOneGrade(this.id).subscribe({
      next: (data) => {
        this.subjects = data
      },
      error: (err) => {console.log(err);}
    })
  }

  async onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);


      reader.onload = (event) => {
        this.pdf = event.target!.result
        
      } 
    }
  }

 addfile(){
  var token = localStorage.getItem('jwt');
  var decodeToken: JSON =  jwt_decode(token!);
  this.userId = Object.values(decodeToken)[1]._id
  
  this.archivo.archivo = this.pdf
  this.fileService.createFile(this.userId, this.archivo).subscribe({
    next: (itemInserted) => {
      localStorage.setItem('jwt', itemInserted)
    },
    error: (err) => { console.log(err);}
})
};
}
