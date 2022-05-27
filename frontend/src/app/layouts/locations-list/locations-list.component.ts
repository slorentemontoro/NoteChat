import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Centro } from 'src/app/entities/location/model/location.model';
import { LocationsService } from 'src/app/entities/location/service/locations.service';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent implements OnInit {

  locations: Centro[] = []
  constructor(private modalService: NgbModal,
              private locationService: LocationsService) { }

  ngOnInit(): void {
    this.getLocations()
    
  }
  open() { this.modalService.open(MapComponent,  { size: 'lg' }); }


  getLocations(){
    this.locationService.getAllLocations().subscribe({
      next: (data) => {
        this.locations = data
        console.log(data)
      },
      error: (err) => {console.log(err)}
    })
  }

}
