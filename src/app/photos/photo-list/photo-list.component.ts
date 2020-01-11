import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { PhotoService } from './../photo.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  inscricao: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
    ) {}

  ngOnInit(): void {
    //this.userName = this.activatedRoute.snapshot.params.userName;
    this.inscricao = this.activatedRoute.params.subscribe(userName =>{
      this.userName = userName['userName'];
    });
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if (!photos.length) {
          this.hasMore = false;
        }
      });
  }



}
