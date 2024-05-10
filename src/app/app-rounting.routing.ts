import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlayListComponent } from './pages/play-list/play-list.component';

// Importa tus componentes aquí

const routes: Routes = [
 
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'play-list', component: PlayListComponent,
  }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }