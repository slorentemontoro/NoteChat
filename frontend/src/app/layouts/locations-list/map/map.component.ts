import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/entities/location/service/locations.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map!: string
  constructor(private locationService: LocationsService) { }

  ngOnInit(): void {
  }

  getLocations(){
    this.locationService.getAllLocations().subscribe({
      next: (data) => {
        this.map = data.
      },
      error: (err) => {console.log(err)}
    })
  }

}
