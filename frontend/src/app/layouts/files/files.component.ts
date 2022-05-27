import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from 'src/app/entities/files/service/file.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  files: File[] = [];
  constructor(private route: ActivatedRoute,
              private fileService: FileService) { }

  ngOnInit(): void {
    this.getFiles()
  }

  public getFiles() {
    this.fileService.getFilesOfSubject(localStorage.getItem('jwt')!).subscribe({
      next: (data) => {
        this.files = data
        console.log(data)
      },
      error: (err) => {console.log(err);}
    })
  }

}
