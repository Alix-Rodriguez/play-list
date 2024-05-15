import { NgModule } from '@angular/core';
import { PlayListComponent } from './play-list.component';
import { ListCartComponent } from './list-cart/list-cart.component';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalListVideoModule } from 'src/app/shared/modal-list-video/modal-list-video.module';

@NgModule({
  declarations: [
   PlayListComponent,
   ListCartComponent,
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    ModalListVideoModule
  ],
  providers: [],
})
export class AppPlayListModule { }
