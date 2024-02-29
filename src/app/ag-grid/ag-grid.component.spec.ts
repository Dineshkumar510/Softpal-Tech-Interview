import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridComponent } from './ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import {YoutubeService} from '../youtube.service';
import { HttpClientModule } from '@angular/common/http';

describe('AgGridComponent', () => {
  let component: AgGridComponent;
  let fixture: ComponentFixture<AgGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AgGridComponent, HttpClientModule ],
      providers: [YoutubeService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render ag-Grid', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ag-grid-angular')).toBeTruthy();
  });

});
