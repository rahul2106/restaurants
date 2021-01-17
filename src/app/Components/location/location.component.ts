import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../Service/location.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import 'rxjs/operator/debounceTime';
import {MatInputModule} from '@angular/material/input';
import {FormControl} from '@angular/forms';

export interface Entity{
  entity_type: string;
  entity_id: number;
  title:string;
}

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit{
  myControl = new FormControl();
location:Observable<any>;
option: Entity[]=[];
filteredOptions:Observable<any>;
timer: any;

  constructor(private locationService:LocationService) {
  }

  ngOnInit(){
      this.locationService.getLocation('').subscribe((data:any)=>{console.log(data);
        this.location=data;
        this.location=this.location.location_suggestions.filter(item=>item.country_name==="India");
          console.log(this.location);
      });

     this.myControl.valueChanges.subscribe(x=>{
      console.log(x);


      this.getLocations(x);
    });
  }
 getLocations(term):void{
  this.locationService.getLocation(term).subscribe((data:any)=>{
    this.location=data;
    this.location=this.location.location_suggestions.filter(item=>item.country_name==="India");
  });
}
  onclick(obj:any):void{
    console.log("Onclick");
    console.log(obj);
  }


}
