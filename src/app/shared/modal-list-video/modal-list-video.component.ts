import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/play-list.interfaces';

@Component({
  selector: 'app-modal-list-video',
  templateUrl: './modal-list-video.component.html',
  styleUrls: ['./modal-list-video.component.css']
})
export class ModalListVideoComponent implements OnInit{
  @Input() modal:any;
  @Input() dataVideo:Course={};
  @Input() idItem: number = 0;


  ngOnInit(): void {
  }

}
