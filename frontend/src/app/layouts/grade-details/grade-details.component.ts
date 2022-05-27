import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subjects } from 'src/app/entities/subjects/model/subject.model';
import { ServiceService } from 'src/app/entities/subjects/service/service.service';

@Component({
  selector: 'app-grade-details',
  templateUrl: './grade-details.component.html',
  styleUrls: ['./grade-details.component.scss']
})
export class GradeDetailsComponent implements OnInit {

  subjects: Subjects[] = [];
  constructor(private route: ActivatedRoute,
              private subjectService: ServiceService) { }

  ngOnInit(): void {
    this.getSubjects()
  }

  public getSubjects() {

    const entryParam: string = this.route.snapshot.paramMap.get("id")!
    this.subjectService.getSubjectsOfOneGrade(entryParam).subscribe({
      next: (data) => {
        this.subjects = data
      },
      error: (err) => {console.log(err);}
    })
  }




}
