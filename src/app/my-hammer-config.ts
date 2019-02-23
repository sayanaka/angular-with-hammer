import { HammerGestureConfig } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  /** buildHammer */
  buildHammer(element: HTMLElement) {
    const hammer =
      typeof window !== 'undefined' ? (window as any).Hammer : null;
    const mc = new hammer(element);

    for (const eventName of Object.keys(this.overrides)) {
      mc.get(eventName).set(this.overrides[eventName]);
    }

    return mc;
  }
}
