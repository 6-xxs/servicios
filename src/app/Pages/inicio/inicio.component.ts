// src/app/Pages/inicio/inicio.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ServiciosService } from '../../services/servicios.service';
import { Servicio } from '../../models/servicio.model';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  servicios: Servicio[] = [];

  constructor(private serviciosService: ServiciosService) {}

  ngOnInit(): void {
    this.servicios = this.serviciosService.obtenerServicios();
  }
}
