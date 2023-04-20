import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-new-task',
    loadChildren: () => import('./add-new-task/add-new-task.module').then( m => m.AddNewTaskPageModule)
  },
  {
    path: 'update-task',
    loadChildren: () => import('./update-task/update-task.module').then( m => m.UpdateTaskPageModule)
  },
];

@NgModule({
  // imports: [
  //   RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  // ],
 // exports: [RouterModule],
 
  declarations: [AppComponent],

  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppRoutingModule { }