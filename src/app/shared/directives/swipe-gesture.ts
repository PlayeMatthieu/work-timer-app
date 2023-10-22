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
        this.swipeStart = true;
        this.swipePositionX = ev.currentX;
      },
      onMove: (ev) => {
        if (ev.deltaY > 50 || ev.deltaY < -50) {
          this.swipeStart = false;
        }
      },
      onEnd: (ev) => {
        if (this.swipeStart) {
          this.zone.run(() => {
            if (ev.currentX > this.swipePositionX) {
              this.swipeRight();
            } else {
              this.swipeLeft();
            }
          });
          this.swipeStart = false;
          this.swipePositionX = 0;
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
