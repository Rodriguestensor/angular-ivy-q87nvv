import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CourseListComponent } from './Courses/course-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [CourseListComponent, AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
