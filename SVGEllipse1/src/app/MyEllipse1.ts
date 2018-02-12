import {Component} from '@angular/core';

@Component({
   selector: 'my-svg',
   template: `
     <svg width="500" height="300">
       <ellipse cx="100" cy="100"
                rx="50" ry="30" 
                fill="red"/>
     </svg> 
     `
})
export class MyEllipse1{}

