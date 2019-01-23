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

const appRoutes: Routes = [ 
  { path: '', redirectTo: 'bank', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
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
    PayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
