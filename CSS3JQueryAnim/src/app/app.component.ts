import { Component } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  template: ''
})
export class AppComponent { 
  constructor() {
    $(document).ready(function() {
      var fillRed    = "rgb(255, 0, 0)"; 
      var fillYellow = "rgb(255, 255, 0)";
      var fillColor  = "rgb(255, 0, 0)";
  
      var basePointX = 300,  basePointY = 150;
      var majorAxis  = 40,   minorAxis  = 80;
      var currentX   = 0,    currentY   = 0;
      var offsetX    = 0,    offsetY    = 0;
      var deltaAngle = 3,    maxAngle   = 720;
      var Constant   = 0.25, radius     = 0;
      var newNode;
   
      for(var angle=0; angle<maxAngle; angle++) {
         radius   = Constant*angle;
         offsetX  = radius*Math.cos(angle*Math.PI/180);
         offsetY  = radius*Math.sin(angle*Math.PI/180);
         currentX = basePointX+offsetX;
         currentY = basePointY-offsetY;
   
         if(Math.floor(angle/deltaAngle) % 2 == 0) {
            fillColor = fillRed;
         } else {
            fillColor = fillYellow;
         }     
 
         // create an ellipse at the current position
         if(angle % 20 == 0) {
           newNode = $('<div>').css({'position':'absolute',
                                   'width':majorAxis+'px',
                                   'height':minorAxis+'px',
                                    left: currentX+'px',
                                    top: currentY+'px',
                                    'backgroundColor': fillColor,
                                    'borderRadius': '20%'
                                  }).
                               toggleClass("skewAnim1");
         } else {
           newNode = $('<div>').css({
                       'position':'absolute',
                       'width':majorAxis+'px',
                       'height':minorAxis+'px',
                       left: currentX+'px',
                       top: currentY+'px',
                      //'backgroundSize': '40px 40px, 180px 180px',
                        'backgroundSize': '240px 240px, 80px 80px',
                        'backgroundColor': fillColor,
                        'borderRadius': '50%'
                    }).
                    addClass("radial6 glow");
         }

         $("#outer").append(newNode);
      }
    });
  }
}

