import { Component,
         OnInit, 
         OnChanges,
         DoCheck,
         AfterContentInit,
         AfterContentChecked, 
         AfterViewInit, 
         AfterViewChecked, 
         OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h2>Angular 2 Lifecycle Methods</h2>',
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
   constructor() {} 

   ngOnInit() {
     // invoked after child components are initialized
     // after ngOnChanges() lifecycle method 
     console.log("ngOnInit");
   }
   ngOnDestroy() {
     // invoked before a component is destroyed
     console.log("ngOnDestroy");
   }
   ngDoCheck() {
     // during every Change Detection Cycle 
     // custom change detection
     console.log("ngDoCheck");
   }
   ngOnChanges(changes) {
     // when data-bound Property Value Change 
     // Invoked after bindings have been checked
     // but only if one of a binding has changed.
     console.log("ngOnChanges");
   }
   ngAfterContentInit() {
     // Component content has been initialized
     // after inserting content (<ng-content>) 
     console.log("ngAfterContentInit");
   }
   ngAfterContentChecked() {
     // Component content has been checked
     // after every check of inserted content 
     console.log("ngAfterContentChecked");
   }
   ngAfterViewInit() {
     // Component views are initialized
     // after initializing views of component + children 
     console.log("ngAfterViewInit");
   }
   ngAfterViewChecked() {
     // Component views have been checked
     console.log("ngAfterViewChecked");
   }
}

