import { Component, ElementRef, OnInit, SecurityContext, TemplateRef, ViewChild, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from 'src/app/interfaces/play-list.interfaces';
import { video } from 'src/app/utils/videos';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})

export class PlayListComponent implements OnInit {
  private modalService = inject(NgbModal);
  public dataVideo: Course[] = video;
  public itemData: Course = {};
  modalOpen: any;
  idVideo?: any = 1;
  play: any = 1;
  urlVideo?: SafeResourceUrl;
  titleVideo?: string = "";

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.setVideo(1, 1);
  }

  setVideo(id_item?: number, id_itemVideo?: number): void {
    const videoData = this.dataVideo.find(video => video.id === id_item);
    if (videoData) {
      videoData?.videos?.forEach((video, index) => {
        if (id_itemVideo == video.video_id) {
          this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${video.url}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`);
          this.titleVideo = video.name;
        }
      });

    }
  }

  open(content: TemplateRef<any>, data: Course) {
    this.itemData = data;

    this.modalOpen = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title', centered: true,
      size: 'lg'
    })

    this.modalOpen.result.then(
      (result: any) => {
        this.play = result.video_id;
        this.idVideo = data.id;
        this.setVideo(this.idVideo, result.video_id)
        this.idVideo = 0;
        this.idVideo = this.idVideo > 0 ? 0 : data.id;
      },
      (reason: any) => {
      },
    );
  }

}
