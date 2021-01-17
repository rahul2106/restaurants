import { Component,OnInit } from '@angular/core';
import {LocationService} from './Service/location.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { environment } from '../environments/environment';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'newRestaurant';
  myControl = new FormControl();
  filteredOptions:any;
 options:string[]=[];
constructor(private locationService:LocationService){}
ngOnInit() {
  console.log(environment.url);
  this.filteredOptions=this.locationService.getCategories().subscribe((data:any)=>{
    console.log(data);
      this.filteredOptions=data;
        this.filteredOptions.categories.forEach((element:any) => {console.log(element.categories);
        this.options.push(element.categories.name);
        });

    });
}
// search(event:KeyBoardEvent){
//
//   const query = (event.target as HTMLInputElement).value ;
//   console.log(query);
// }
}
