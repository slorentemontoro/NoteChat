import { Component, OnInit } from '@angular/core';
import { Grade } from 'src/app/entities/grade/model/grade.model';
import { GradeService } from 'src/app/entities/grade/service/grade.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  grades: Grade[] = []

  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.getGrades();

  }

  private getGrades(): void {
    this.gradeService.getAllGrades().subscribe({
      next: (gradesRequest) => {this.grades = gradesRequest;},
      error: (err) => {this.handleError(err);}
    })
  }

  private handleError(error: any): void {
    console.log(error);
  }

}
