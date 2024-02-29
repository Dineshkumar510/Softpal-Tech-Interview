import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
  <a href="javascript:void(0);" target="_blank" (click)="onThumbnailClick()">
  <img [src]="params.value" alt="Thumbnail" style="width: 100px; height: 60px;" />
    </a>
  `,
})
export class ThumbnailRendererComponent {
  params: any;
  url = 'https://www.youtube.com/watch?v'

  agInit(params: any): void {
    this.params = params;
  }

  onThumbnailClick(){
    const videoId = this.params.data.videoId;
    window.location.href = `${this.url}=${videoId}`;
  }
}
