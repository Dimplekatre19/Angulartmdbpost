import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostcardComponent } from './shared/component/postcard/postcard.component';
import { TmdbComponent } from './shared/component/tmdb/tmdb.component';

@NgModule({
  declarations: [
    AppComponent,
    PostcardComponent,
    TmdbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
