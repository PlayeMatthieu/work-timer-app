import {AfterViewInit, Directive, ElementRef, EventEmitter, inject, NgZone, Output} from "@angular/core";
import {GestureController} from "@ionic/angular";

@Directive({
  selector: '[appSwipeGesture]'
})
export class SwipeGestureDirective implements AfterViewInit {
  private el = inject(ElementRef);
  private gestureCtrl = inject(GestureController);
  private zone = inject(NgZone);

  @Output() onSwipeLeft = new EventEmitter();
  @Output() onSwipeRight = new EventEmitter();
  private swipeStart = false;
  private swipePositionX = 0;

  ngAfterViewInit() {
    const gesture = this.gestureCtrl.create({
      el: this.el.nativeElement,
      gestureName: 'swipe',
      threshold: 0,
      direction: 'x',
      onStart: (ev) => {
        this.swipePositionX = ev.currentX;
      },
      onMove: (ev) => {
        // Prevent vertical scroll
        this.swipeStart = !(ev.deltaY > 50 || ev.deltaY < -50);
      },
      onEnd: (ev) => {
        // Look if the user swiped far enough, and if so, in which direction
        // Look for 0 movement for single click action
        if (this.swipeStart && ev.deltaX !== 0) {
          this.zone.run(() => {
            if (ev.currentX > this.swipePositionX) {
              // Left to right swipe
              this.swipeRight();
            } else {
              // Right to left swipe
              this.swipeLeft();
            }
          });
          this.swipeStart = false;
        }
      }
    });
    gesture.enable(true);
  }

  private swipeLeft() {
    this.onSwipeLeft.emit();
  }

  private swipeRight() {
    this.onSwipeRight.emit();
  }
}
