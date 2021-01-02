import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'news-details',
    loadChildren: () => import('./pages/news-details/news-details.module').then( m => m.NewsDetailsPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./pages/event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'athletes',
    loadChildren: () => import('./pages/athletes/athletes.module').then( m => m.AthletesPageModule)
  },
  {
    path: 'manager',
    loadChildren: () => import('./pages/manager/manager.module').then( m => m.ManagerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
