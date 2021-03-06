import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { VerificationComponent } from './verification/verification.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthGuard } from './auth.guard';
import { ShorturlComponent } from './shorturl/shorturl.component';
import { MaindisplayComponent } from './maindisplay/maindisplay.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModaleditComponent } from './modaledit/modaledit.component';
import { ToastContainerComponent } from './toast-container/toast-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgChartjsModule } from 'ng-chartjs';
@NgModule({
  declarations: [
    AppComponent,
    ForgotComponent,
    LoginComponent,
    RegisterComponent,
    ResetpassComponent,
    VerificationComponent,
    DashboardComponent,
    ShorturlComponent,
    MaindisplayComponent,
    ModalComponent,
    ModaleditComponent,
    ToastContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    GoogleChartsModule,
    NgChartjsModule
  ],
  providers: [AuthGuard,{provide: LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
