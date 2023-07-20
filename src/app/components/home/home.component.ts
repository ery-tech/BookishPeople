import { Component,  OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  booksList: any  = [{}]
constructor(private http : HttpService){}
searchValue: string =''
ngOnInit(): void {
}

  isClicked = false;
  checkClicked() {
    // reverse the value of property
    this.isClicked = !this.isClicked;
 }
//retrieve book data
getBooks(searchValue:string){
  this.http.getBooksList(searchValue,0,30).subscribe(res=>{
  this.booksList = res.works
   if(searchValue.length <= 2){
    this.booksList = []
   }

  } )

}







 }





