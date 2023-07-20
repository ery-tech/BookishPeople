import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import { HttpService } from 'src/app/services/http.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BooksComponent', () => {
  let component : BooksComponent
  let fixture: ComponentFixture<BooksComponent>
  let service : HttpService
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksComponent],
      imports: [ HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(BooksComponent)
    component = fixture.componentInstance
    service = TestBed.inject(HttpService)

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return description value ', () => {
    const key = 1;
    const stubBook = {
      key:1,
      description: {
        value: 'Description 1'
      }
    }
    spyOn(service, 'getBookDescription').and.returnValue(of (stubBook));
    component.getDescription(key);
    expect(component.description).toEqual('Description 1' )
});

it('if description value is undefined it should return description ', () => {
  const key = 2;
  const stubBook = {
    key:2,
    description: 'Description 2'

  }
  spyOn(service, 'getBookDescription').and.returnValue(of (stubBook));
  component.getDescription(key);
  expect(component.description.value).toEqual(undefined )
  expect(component.description).toEqual('Description 2' )
});


it('should call getBooksList with offset when getMoreBooks is called ', () => {
  let fakeBooksList  =[ {
    works: [ {
      title: 'Fake Title',
      authors:[ {
        name: 'Fake Name'
      },
    {name: 'Second name'} ]
  } ]
  },
  {
    works:[ {
      title: 'Fake Title2',
      authors: [{
        name: 'Fake Name2'
      }, {  } ]
    } ]
  }]
 component.searchValue = 'love'

 component.offset = 30
 let spyRandom = spyOn(component, 'randomNumber')
 let spy =  spyOn(service, 'getBooksList').and.returnValue(of(fakeBooksList))
 component.getMoreBooks()
expect(spy).toHaveBeenCalledWith('love',60,30)
expect(spyRandom).toHaveBeenCalled()
  } )

  it('should call getBooksList with offset when getPreviousBooks is called ', () => {
    let fakeBooksList  =[ {
      works: [ {
        title: 'Fake Title',
        authors:[ {
          name: 'Fake Name'
        },
      {name: 'Second name'} ]
    } ]
    },
    {
      works:[ {
        title: 'Fake Title2',
        authors: [{
          name: 'Fake Name2'
        }, {  } ]
      } ]
    }]
   component.searchValue = 'love'

   component.offset = 60
   let spyRandom = spyOn(component, 'randomNumber')
   let spy =  spyOn(service, 'getBooksList').and.returnValue(of(fakeBooksList))
   component.getPreviousBooks()
  expect(spy).toHaveBeenCalledWith('love',30,30)
  expect(spyRandom).toHaveBeenCalled()
    } )




  it('should get a random number ', () => {

    spyOn(Math, 'random').and.returnValue(0.7);
    component.randomNumber(1,7)
    expect(component.counter).toEqual(5)

   });



})
