import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteDetailComponent } from './paciente-detail/paciente-detail.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    ReactiveFormsModule
  ],
   exports: [PacienteListComponent],
  declarations: [PacienteListComponent,PacienteDetailComponent]
  
})
export class PacienteModule { }
