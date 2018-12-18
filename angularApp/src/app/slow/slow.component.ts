import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-slow',
template: `
  <p>
    Response is: {{response | json}}
  </p>
`,
styles: []
})
export class SlowComponent {

public response: any = this.router.snapshot.data.response;
constructor(private router: ActivatedRoute) {}
}
