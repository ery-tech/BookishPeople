import { ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';
import { HttpService } from 'src/app/services/http.service';
import { of } from 'rxjs';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service : HttpService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [ HttpClientTestingModule, AppModule]

    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(HttpService)
    component.booksList = []
    fixture.detectChanges();
    component.ngOnInit()
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });
  it('should call http service fn',fakeAsync( () => {
    const fakeBooks = [{
      title : 'Fake Title',
      authors: {
        name: 'Fake title'
      } },
      {
        title : 'Fake Title2',
        authors: {
          name: 'Fake title2'
        }
    }]
   const fn =spyOn(service, 'getBooksList').and.returnValue(of(fakeBooks))
   tick(1);
   const fakeValue = 'classic'
   component.getBooks(fakeValue)
   flush();
   expect(fn).toHaveBeenCalled()
   expect(fakeValue.length >2).toBeTrue()
  }));


  it('onclick checkClicked should return true', () => {
     component.checkClicked();
     expect(component.isClicked).toBeTrue()
  });

} );
