import { Component, Input, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

@Input() id: any;
  constructor(public activemModal: NgbActiveModal, private sanitizer: DomSanitizer) { }

  map!: any
  ngOnInit() {
    this.loadMap()
  }

 async loadMap(){
    this.map = this.sanitizer.bypassSecurityTrustResourceUrl(this.id)
    console.log(this.map)
  }
}
