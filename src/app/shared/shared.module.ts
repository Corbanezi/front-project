import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MasterPageComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    NavbarComponent,
    MasterPageComponent
  ]
  
})
export class SharedModule { }
