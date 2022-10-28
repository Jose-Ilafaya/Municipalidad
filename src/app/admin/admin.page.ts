import { Component, OnInit } from '@angular/core';
import { Sede } from '../modelos/sede';
import { SedesService } from '../servicios/sedes.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  sedes:Sede[];
  constructor(private SedesServicio:SedesService) { //inyeccion del servicio

  }
  ngOnInit() { //Traemos las sedes y las guardamos en una variable
    this.SedesServicio.obtenerSedes().subscribe(sede =>{
      this.sedes = sede;
    })
  }

}
