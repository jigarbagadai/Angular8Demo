import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule, MatCardModule, MatTableModule,MatPaginatorModule,MatSortModule ,MatInputModule, MatFormFieldModule ,MatSelectModule, MatProgressSpinnerModule } from '@angular/material';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule }    from '@angular/http';
import { DataService } from './service/data-service.service';

@NgModule({
  declarations: [
    AppComponent, 
    MyNavComponent,
    UserDetailComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,MatSortModule,MatInputModule,
    MatFormFieldModule,MatSelectModule, MatProgressSpinnerModule,
    CommonModule,ReactiveFormsModule,FlexLayoutModule
  ],
  exports:[
    MatPaginatorModule,MatSortModule,MatInputModule,MatSelectModule, MatProgressSpinnerModule,MatFormFieldModule, MatCardModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
