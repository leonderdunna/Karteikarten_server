import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatCardModule } from '@angular/material/card';
import { LernenComponent } from './lernen/lernen.component';
import { SettingsComponent } from './settings/settings.component'
import { PaketeComponent } from './pakete/pakete.component';
import { KartenComponent } from './karten/karten.component';
import { StatistikenComponent } from './statistiken/statistiken.component';
import { AccountComponent } from './account/account.component';
import { NeuComponent } from './neu/neu.component';
import { AnmeldenComponent } from './anmelden/anmelden.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { MatTableModule} from '@angular/material/table';
import { EditComponent } from './edit/edit.component'
import { FormsModule } from '@angular/forms';
import { MatBadgeModule} from '@angular/material/badge';
import { AboutComponent } from './about/about.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { providePerformance,getPerformance } from '@angular/fire/performance';

@NgModule({
  declarations: [
     AppComponent,
     MainNavComponent,
     LernenComponent,
     SettingsComponent,
     PaketeComponent,
     KartenComponent,
     StatistikenComponent,
     AccountComponent,
     NeuComponent,
     AnmeldenComponent,
     AccountSettingsComponent,
     EditComponent,
     AboutComponent,

  ],
  imports: [
     BrowserModule,
     MatTabsModule,
     AppRoutingModule,
     BrowserAnimationsModule,
     MatButtonModule,
     MatToolbarModule,
     MatSidenavModule,
     MatIconModule,
     MatListModule,
     MatCardModule,
     MatFormFieldModule,
     MatInputModule,
     MatMenuModule,
     MatTableModule,
     HttpClientModule,
     FormsModule,
     MatBadgeModule,
     MatProgressBarModule,
     MatProgressSpinnerModule,
     MatChipsModule,
      provideFirebaseApp(() => initializeApp(environment.firebase)),
    //  provideAnalytics(() => getAnalytics()),
      provideDatabase(() => getDatabase()),
      provideFirestore(() => getFirestore()),
      providePerformance(() => getPerformance())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
