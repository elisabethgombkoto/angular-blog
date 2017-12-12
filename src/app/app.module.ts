import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
  { path: 'blogs', component: BlogListComponent },
  { path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
