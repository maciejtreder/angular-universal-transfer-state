import { Component, OnInit } from '@angular/core';
import { CustomService } from '../custom.service';
import { Observable } from 'rxjs';

@Component({
selector: 'app-fast',
template: `
  <p>
    Response is: {{response | async | json}}
  </p>
`,
styles: []
})
export class FastComponent {

   public response: Observable<any> = this.service.getFast();
   constructor(private service: CustomService) { }
}
