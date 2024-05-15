import { Component, OnInit } from '@angular/core';
import { PacienteDetail } from '../pacientes-detail';
import { PacienteService } from '../pacientes.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
  pacientes: Array<PacienteDetail> = [];
  selected: Boolean = false;
  selectedPaciente!: PacienteDetail;

  onSelected(paciente: PacienteDetail): void {
    if (this.selected && this.selectedPaciente === paciente) {
      this.selected = false;
    } else {
      this.selected = true;
      this.selectedPaciente = paciente;
    }
  }
  closeDetail(): void {
    this.selected = false;
  }
  calcularMenores(): number {
    let cantidad =0;


    for (let i = 0; i < this.pacientes.length; i++)
      if(this.pacientes[i].edad<18)
        cantidad +=1;
    return cantidad;
  }
 
  constructor(private pacienteService: PacienteService) { }

  getPacientes(): void {
    this.pacienteService.getPacientes().subscribe((pacientes) => {
      this.pacientes = pacientes;
    });
  }
 

  ngOnInit() {
    this.getPacientes();
  }
}


