import { Component, OnInit, SecurityContext, TemplateRef, inject } from '@angular/core';
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
  idVideo?: number = 1;
  urlVideo?: SafeResourceUrl;
  titleVideo?: string = "Introduction to Python";

  constructor(private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/Z1Yd7upQsXY")
    localStorage.setItem("titleVideo", "Introduction to Python")
  }

  open(content: TemplateRef<any>, data: Course) {
    this.itemData = data;

    this.modalOpen = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title', centered: true,
      size: 'lg'
    })

    this.modalOpen.result.then(
      (result: any) => {
        this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(result.url);
        this.titleVideo = result.name;
        localStorage.setItem("titleVideo", result.name)
        this.idVideo = data.id;
      },
      (reason: any) => {
      },
    );
  }


}
