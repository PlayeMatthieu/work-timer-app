import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {SwipeGestureDirective} from "./directives/swipe-gesture";


@NgModule({
  declarations: [SwipeGestureDirective],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    SwipeGestureDirective
  ]
})
export class SharedModule {
}
