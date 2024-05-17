import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlayListComponent } from './pages/play-list/play-list.component';

// Importa tus componentes aquí

const routes: Routes = [
 
  {
    path: '', component: PlayListComponent,
  },
  {
    path: 'play-list', component: HomeComponent,
  }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }