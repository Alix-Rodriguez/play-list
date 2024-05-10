import { NgModule } from '@angular/core';
import { PlayListComponent } from './play-list.component';
import { ListCartComponent } from './list-cart/list-cart.component';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
   PlayListComponent,
   ListCartComponent,
  ],
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  providers: [],
})
export class AppPlayListModule { }
