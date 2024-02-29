import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import {YoutubeService} from '../youtube.service';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { ThumbnailRendererComponent } from './thumbnail-renderer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [CommonModule, AgGridAngular, ThumbnailRendererComponent, FormsModule],
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

  data:any[] = [];
  videoTitle:any;
  videoId:any;
  time:any;
  img:any;
  search:any;

  columnDefs = [
    // {
    //   field: 'Checkbox',
    //   checkboxSelection: true,
    //   editable: true,
    // },
    {
      headerName: '',
      field: 'thumbnail',
      cellRenderer: ThumbnailRendererComponent,
    },
    { headerName: 'publishedAt', field: 'time'},
    { headerName: 'Title', field: 'title' },
    { headerName: 'Description', field: 'description' },

  ];

  constructor(
    private YoutubeService: YoutubeService,
  ) { }

  ngOnInit(): void {
    this.SearchVideos('programming tutorial');
  }


  public rowSelection: 'single' | 'multiple' = 'multiple';
  public paginationPageSize = 15;
  public paginationPageSizeSelector: number[] | boolean = [1, 5, 15, 25];
  public themeClass: string =
    "ag-theme-quartz";


    SearchVideos(keyword: string): void {
      this.YoutubeService.searchData(keyword).subscribe(
        (response) => {
          console.log(response.items);
          console.log(this.data);
          this.data = response.items.map((item:any) => ({
            title: item.snippet.title,
            description: item.snippet.description,
            time: item.snippet.publishTime,
            thumbnail: item.snippet.thumbnails.high.url,
            videoId: item.id.videoId,
          }));

        },
        (error) => {
          console.error('Error fetching YouTube data:', error);
        }
      );
    }

}



