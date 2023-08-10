import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialog, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRadioModule, MatSnackBarModule, MatTableModule } from '@angular/material';
import { CarListComponent } from './pages/car-detail/car-list/car-list.component';
import { CarComponent } from './pages/car-detail/car/car.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule




  ],
  providers: [],
  entryComponents: [
    CarComponent, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
