import { Component, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';

//------------------------------------
// Keep in mind the following points
// when you want to use d3 in Angular:
// 1) npm install d3 --save
// 2) import * as d3 from 'd3'
// 3) note the <div> in 'template'
// 4) the ViewChild(...)  code snippet 
// 5) the "nativeElement" code snippet 
//------------------------------------

@Component({
   selector: 'app-root',
   template: `<div id="mysvg" #mysvg></div>`
})
export class AppComponent {
  @ViewChild('mysvg') mysvg: ElementRef;

  constructor() {} 

  ngAfterContentInit() {
     this.createSVG();
  }

  //-------------------------------------------------- 
  // view children are only set when ngAfterViewInit() 
  // is invoked and content children are only set when 
  // ngAfterContentInit() is invoked. 
  // 
  // Since the method createSVG() is invoked after the 
  // ngAfterContentInit() method, the <div> in the 
  // template property is available (i.e., non-null).
  //-------------------------------------------------- 

  createSVG() {
     var width = 1000, height = 800;

     // circle and ellipse attributes
     var cx = 50,  cy = 80, radius1 = 40,
         ex = 250, ey = 80, radius2 = 80;

     // color/rectangle/line segment attributes
     var colors = ["red", "blue", "green"];
     var rectX  = 15,  rectY = 200;
     var rWidth = 100, rHeight = 40;
     var x1=170,y1=200,x2=320,y2=200,lineWidth=8;
			
     let svgElement = this.mysvg.nativeElement;

     // create an SVG element
     let svg = d3.select(svgElement)
                 .append("svg")
                 .attr("width",  width)
                 .attr("height", height);

     // append a circle
     svg.append("circle")
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r",  radius1)
        .attr("fill", colors[0]);

     // append an ellipse
     svg.append("ellipse")
        .attr("cx", ex)
        .attr("cy", ey)
        .attr("rx", radius2)
        .attr("ry", radius1)
        .attr("fill", colors[1]);

     // append a rectangle
     svg.append("rect")
        .attr("x", rectX)
        .attr("y", rectY)
        .attr("width",  rWidth)
        .attr("height", rHeight)
        .attr("fill", colors[2]);

     // append a line segment
     svg.append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("stroke-width", lineWidth)
        .attr("stroke", colors[0]);
  }
}

