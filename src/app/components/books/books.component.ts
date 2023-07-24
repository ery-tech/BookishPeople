import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnChanges,OnInit {
@Input()booksList: any
@Input()searchValue:string = ''
offset: number = 0

description: any
clickedKey:any = ''
  counter = 0;

 myImgs =[
  "",
  "https://media.giphy.com/media/W0R10baxRLal6dNlVi/giphy.gif",
  "https://media.giphy.com/media/hAieQ20Ph6xJPnVqLr/giphy.gif",
  "https://media.giphy.com/media/apyuTUQx1bYSPR9tzw/giphy.gif",
  "https://media.giphy.com/media/YYtMieW4jkpyiEaMpJ/giphy.gif",
  "https://media.giphy.com/media/MasfNVDb2lkeB44QIC/giphy.gif",
  "https://media.giphy.com/media/FuVHdn9ezclUiaVqIT/giphy.gif"
]
constructor(private http : HttpService, ){}
  ngOnInit() {
    this.offset = 0

  }
ngOnChanges(){
  this.randomNumber(1,7)
  this.description = '';
}

//to get random images
randomNumber(min:number, max:number) {
    this.counter = Math.floor(Math.random() * (max - min) + min);
    console.log(this.counter)
}


//on button click get book description
    getDescription(){
    this.http.getBookDescription(this.clickedKey).subscribe(res =>{
     if(res.description){

      this.description = res.description.value
      if(res.description.value ==  undefined){
        this.description = res.description
      }
     }
     else if(!res.description){
      this.description = 'No description available'
     }
    console.log(this.description)


      })

    }

    // show description
    checkDescriptionKey(key:any){
      this.clickedKey = key
      console.log(this.clickedKey)
      this.getDescription()
    }


getMoreBooks(){
  //on page click get new books relying on offset
  if(this.offset <=1000){
   this.offset += 30
   this.http.getBooksList(this.searchValue,this.offset,30).subscribe(res=>{
    this.booksList = res.works
    this.randomNumber(1,7)


 })
  }
}


getPreviousBooks(){
   //on page click get previous books relying on offset
   if(this.offset <= 1000 ){
    this.offset -= 30
    this.http.getBooksList(this.searchValue, this.offset,30).subscribe(res=>{
      this.booksList = res.works
     })
     this.randomNumber(1,7)
   }
   }

  }
