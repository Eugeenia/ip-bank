import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './page/header/header.component';
import { PayFromCardComponent } from './page/pay-from-card/pay-from-card.component';
import { InfoAboutCompanyComponent } from './page/info-about-company/info-about-company.component';
import { PayFromBankComponent } from './page/pay-from-bank/pay-from-bank.component';
import { AskForPaymentComponent } from './page/ask-for-payment/ask-for-payment.component';
import { RouterModule, Routes } from '@angular/router'; 
import { AdminComponent } from './admin/admin.component';
import { PayComponent } from './page/pay/pay.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from './shared/server.service';
import { CardPaymentsComponent } from './admin/card-payments/card-payments.component';
import { AskPaymentsComponent } from './admin/ask-payments/ask-payments.component';
import { CardPaymentComponent } from './admin/card-payments/card-payment/card-payment.component';
import { AskPaymentComponent } from './admin/ask-payments/ask-payment/ask-payment.component';
import { ValidatorService } from './shared/validator.service';
import { AutentificationComponent } from './admin/autentification/autentification.component';
import { AutentificationGuard } from './shared/autentification.guard';
import { TokensService } from './shared/tokens.service';
import { AutentificateInterceptor } from './shared/autentificate.interceptor';

const appRoutes: Routes = [ 
  { path: '', redirectTo: 'bank', pathMatch: 'full' },
  { path: 'auth', component: AutentificationComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, canActivate: [AutentificationGuard], children: [
    { path: '', redirectTo: 'card-payments', pathMatch: 'full' },
    { path: 'card-payments', component: CardPaymentsComponent },
    { path: 'ask-for-payments', component: AskPaymentsComponent }
  ] },
  { path: 'bank', component: PageComponent, children: [ 
    { path: '', redirectTo: 'pay', pathMatch: 'full' },
    { path: 'afp', component: AskForPaymentComponent },
    { path:  'pay', component:  PayComponent, children: [ 
      { path: '', redirectTo: 'pfc', pathMatch: 'full' },
      { path: 'pfb', component: PayFromBankComponent },
      { path: 'pfc', component: PayFromCardComponent }
    ] },

  ] }
];

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    PayFromCardComponent,
    InfoAboutCompanyComponent,
    PayFromBankComponent,
    AskForPaymentComponent,
    AdminComponent,
    PayComponent,
    CardPaymentsComponent,
    AskPaymentsComponent,
    CardPaymentComponent,
    AskPaymentComponent,
    AutentificationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServerService, 
    ValidatorService, 
    AutentificationGuard,
    TokensService,
    AutentificateInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
