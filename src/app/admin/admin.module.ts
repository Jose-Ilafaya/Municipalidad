import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AngularFireModule} from '@angular/fire/compat';

import { AdminPage } from './admin.page';
import { SedesService } from '../servicios/sedes.service';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  declarations: [AdminPage],
  providers:[SedesService]
})
export class AdminPageModule {}
