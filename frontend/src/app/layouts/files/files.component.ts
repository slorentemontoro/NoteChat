import { Component, Input, OnInit } from '@angular/core';
import { File } from 'src/app/entities/files/model/file.model';
import { FileService } from 'src/app/entities/files/service/file.service';
import { Subjects } from 'src/app/entities/subjects/model/subject.model';
import jwt_decode from "jwt-decode";
import { ServiceService } from 'src/app/entities/subjects/service/service.service';
import { User } from 'src/app/entities/user/model/user.model';
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
  archivo!: Files
  userId!: string
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

  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
    };
}


  async addfile(){
    this.getUserByJWT()
    this.fileService.createFile(this.userId, this.archivo).subscribe({
      next: (data) =>{
        console.log(data)
      },
      error: (err) => { console.log(err);
      }
  })
}

  async getUserByJWT() {
    var token = localStorage.getItem('jwt');
    var decodeToken: JSON =  jwt_decode(token!);
    this.userId = Object.values(decodeToken)[1]._id

  }

}
