import { Component } from '@angular/core';
import { CustomService } from '../custom.service';
import { Observable } from 'rxjs';

@Component({
 selector: 'app-slow',
 template: `
   <p>
     Response is: {{response | async | json}}
   </p>
 `,
 styles: []
})
export class SlowComponent {

 public response: Observable<any> = this.service.getSlow();
 constructor(private service: CustomService) {}
}
