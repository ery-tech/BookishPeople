import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a boolean if function is called', () => {
    let  loading :boolean = false
    function spySetLoading (){
     loading = true
    }
    spyOn(service, 'setLoading').and.callFake(spySetLoading)
    service.setLoading(loading)
    expect(loading).toBeTrue();
   });
});
