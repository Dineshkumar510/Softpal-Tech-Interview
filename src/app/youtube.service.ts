import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private apiKey = 'AIzaSyC3h-XZXh2Ik5kZHWsLkIvwvK8_8yNDXeQ';
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) { }

  searchData(keyword: string): Observable<any> {
    const url = `${this.apiUrl}/search`;
    const params = {
      q: keyword,
      type: 'video',
      part: 'snippet',
      maxResults: '100', // You can adjust this as needed
      key: this.apiKey
    };
    return this.http.get(url,{params});
  }
}
