import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { File } from 'src/app/entities/files/model/file.model';
import { FileService } from 'src/app/entities/files/service/file.service';
import { LocationsService } from 'src/app/entities/location/service/locations.service';
import { Subjects } from 'src/app/entities/subjects/model/subject.model';
import { ServiceService } from 'src/app/entities/subjects/service/service.service';
import { FilesComponent } from '../files/files.component';

@Component({
  selector: 'app-grade-details',
  templateUrl: './grade-details.component.html',
  styleUrls: ['./grade-details.component.scss']
})
export class GradeDetailsComponent implements OnInit {

  subjects: Subjects[] = [];
  files: File[] = []
  gradeId!: string;
  user!: File
  constructor(private route: ActivatedRoute,
              private subjectService: ServiceService,
              private fileService: FileService,
              private locationService: LocationsService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getSubjects()
    
  }

  public getSubjects() {

    const entryParam: string = this.route.snapshot.paramMap.get("id")!
    this.gradeId = entryParam

    this.subjectService.getSubjectsOfOneGrade(entryParam).subscribe({
      next: (data) => {
        this.subjects = data
      },
      error: (err) => {console.log(err);}
    })
  }

  async getFiles(subjecId: string) {
        const entryParam: string = subjecId
        this.fileService.getFilesOfSubject(entryParam).subscribe({
          next: (data) => {
            console.log(data)
            this.files = data
            console.log(this.files[2].autor.nick)
          },
          error: (err) => {console.log(err);}
        })
      }


      open(id: string) { const activeModal = this.modalService.open(FilesComponent, { size: 'lg' }); 
      activeModal.componentInstance.id = id;
        activeModal.result.then((result) => {
          console.log(result);
        }, (reason) => {
        });
}
}
