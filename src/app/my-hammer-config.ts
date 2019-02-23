import { HammerGestureConfig } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  /** 追加したいイベント名 */
  events: string[] = ['twosecondspress', 'doubletap'];

  /** buildHammer */
  buildHammer(element: HTMLElement) {
    const hammer =
      typeof window !== 'undefined' ? (window as any).Hammer : null;
    const mc = new hammer(element);

    for (const eventName of Object.keys(this.overrides)) {
      mc.get(eventName).set(this.overrides[eventName]);
    }

    // ２秒長押しイベントの作成
    const press = new hammer.Press();
    const twoSecondsPress = new hammer.Press({
      event: 'twosecondspress',
      time: 2000
    });
    twoSecondsPress.recognizeWith(press);
    press.requireFailure(twoSecondsPress);

    mc.add(twoSecondsPress);

    return mc;
  }
}
