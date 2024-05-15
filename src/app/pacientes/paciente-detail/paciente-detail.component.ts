import { Component,Input, OnInit, input } from '@angular/core';
import { Paciente } from '../paciente';


@Component({
  selector: 'app-paciente-detail',
  templateUrl: './paciente-detail.component.html',
  styleUrls: []
})
export class PacienteDetailComponent implements OnInit {
  @Input() pacienteDetail!: Paciente;
  constructor() { }

  ngOnInit() {
  }

}
