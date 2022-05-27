import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { File } from 'src/app/entities/files/model/file.model';
import { FileService } from 'src/app/entities/files/service/file.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  files: File[] = []
  constructor(private route: ActivatedRoute,
              private fileService: FileService) { }

  ngOnInit(): void {
  }

  async getFiles() {

    const entryParam: string = this.route.snapshot.paramMap.get("idSubject")!

    this.fileService.getFilesOfSubject(entryParam).subscribe({
      next: (data) => {

        console.log(data)
      },
      error: (err) => {console.log(err);}
    })
  }

}
