import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('HttpService', () => {
  let service: HttpService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,]

    });
    service = TestBed.inject(HttpService);
    controller= TestBed.inject(HttpTestingController);

  });
  afterEach( ()=> {controller.verify()});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('by searching a subject it should return a booksList ', () => {
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
  const searchValue = 'love'
  const offset = 0
  const limit= 30
  service.getBooksList('love',0,30).subscribe(booksList=>{
    expect(booksList).toEqual(fakeBooksList)
  })
  const req = controller.expectOne
  (`${environment.BASE_URL}/subjects/${searchValue}.json?offset=${offset}&limit=${limit}`);
    req.flush(fakeBooksList)
    expect(req.request.method).toBe('GET')
  });
it('should retrieve description by key', ()=>{
  const key = 1;
  const stubDescription = {
    key:1,
    description: {
      value: 'Description 1'
    }
  }
service.getBookDescription('1').subscribe(description=>{
  expect(description).toEqual(stubDescription)
})
const req = controller.expectOne(`${environment.BASE_URL}${key}.json`)
req.flush(stubDescription)
expect(req.request.method).toBe('GET')
})


});
