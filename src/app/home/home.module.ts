import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AngularFireModule} from '@angular/fire/compat';

import { HomePageRoutingModule } from './home-routing.module';
import { environment } from 'src/environments/environment';
import { SedesService } from '../servicios/sedes.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [HomePage],
  providers:[SedesService]
})
export class HomePageModule {}
