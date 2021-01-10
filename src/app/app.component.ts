import { Component,OnInit } from '@angular/core';
import {LocationService} from './Service/location.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
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

constructor(private locationService:LocationService){}
//   ngOnInit(){
//   this.locationService.getCategories().subscribe((data:any[])=>{
//     console.log(data);
//   })
// }

ngOnInit() {
  // this.filteredOptions = this.myControl.valueChanges.pipe(
  //   startWith(''),
  //   map(value => this._filter(value))
  // );
  this.filteredOptions=this.locationService.getCategories().subscribe((data:any)=>{
      console.log(data);
      this.filteredOptions=data;
      console.log((this.filteredOptions));
    });

}



}
