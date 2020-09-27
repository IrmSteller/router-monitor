import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceTargetViewComponent } from './components/service-target-view/service-target-view.component';
import { ServiceDetailComponent } from './components/details/service-detail/service-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { ConsoleComponent } from './components/console/console.component';
import { FooterComponent } from './components/footer/footer.component';
import { NaviComponent } from './components/navi/navi.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceTargetViewComponent,
    ServiceDetailComponent,
    ConsoleComponent,
    FooterComponent,
    NaviComponent
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
