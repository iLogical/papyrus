import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { CardComponent } from './shared/components/card/card.component';
import { CircleLinkComponent } from './shared/components/circle-link/circle-link.component';
import { CardContainerComponent } from './shared/layout/card-container/card-container.component';
import { ButtonComponent } from './shared/components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    CircleLinkComponent,
    CardContainerComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
