import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';

// // more details regarding browseranimationmodule: 
// http://stackoverflow.com/questions/43362898/whats-the-difference-between-browseranimationsmodule-and-noopanimationsmodule 

//------------------------------------------
// make sure you perform the following step:
// npm install @angular/animations --save
//------------------------------------------

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
            'background-color': '#008888',
            borderRadius: '50%',
            transform: 'translateX(0)'
      })),
      state('animated', style({
            'background-color': 'blue',
            transform: 'rotate3d(50,50,50,-180deg) skew(-15deg,0) scale3d(1.25, 1.25, 1.25)' 
      })),
      transition('normal <=> animated', animate(500)),
    ]),
    trigger('currState', [
      state('normal', style({
            'background-color': 'red',
            transform: 'translateX(0) scale(1)'
      })),
      state('animated', style({
            'background-color': 'green',
            transform: 'translateX(300px) scale(0.5)'
      })),
      transition('normal   => animated', animate(500)),
      transition('animated => normal', animate(1500)),
      transition('animated <=> *', [
        style({
          'background-color': '#880000'
        }),
        animate(2000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),
  ]
})
export class AppComponent {
  state     = 'normal';
  currState = 'normal';

  onAnimate() {
   this.state == 'normal' ? this.state = 'animated' : this.state = 'normal';
   this.currState == 'normal' ? this.currState = 'animated' : this.currState = 'normal';
  }

  animBegin(event) {
    console.log(event);
  }

  animComplete(event) {
    console.log(event);
  }
}

