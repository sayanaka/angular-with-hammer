import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  index = 0;
  contentArray = ['１番目のテキスト', '２番目のテキスト', '３番目のテキスト'];

  hammerEventType: string;

  /** hammerJSのイベントハンドラ */
  hammerEvent(event: any) {
    this.hammerEventType = event.type;

    if (event.type === 'swipeleft' && this.index > 0) {
      this.index--;
      return;
    }

    if (
      event.type === 'swiperight' &&
      this.index < this.contentArray.length - 1
    ) {
      this.index++;
      return;
    }
  }
}
