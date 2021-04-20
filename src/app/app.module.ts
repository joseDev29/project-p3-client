import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterPageComponent } from './public/master-page/master-page.component';
import { FooterComponent } from './public/shared-components/footer/footer.component';
import { NavbarComponent } from './public/shared-components/navbar/navbar.component';
import { SidebarComponent } from './public/shared-components/sidebar/sidebar.component';
import { CardComponent } from './public/shared-components/card/card.component';
import { HomeHeaderComponent } from './public/shared-components/home-header/home-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CardComponent,
    HomeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
