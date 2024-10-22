import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {ChecklistService} from "../../shared/services/checklist/checklist.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-add-checklist',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    RouterLink
  ],
  templateUrl: './add-checklist.component.html',
  styleUrl: './add-checklist.component.scss'
})
export class AddChecklistComponent {

  driverEmail = '';
  description: string;

  checklistData = [
    { name: 'Verificação de Pneus', checked: false },
    { name: 'Verificação de Luzes', checked: false },
    { name: 'Verificação de Freios', checked: false },
    { name: 'Verificação do Tanque de Combustível', checked: false },
    { name: 'Verificação de Escapamento', checked: false },
    { name: 'Verificação de Óleo do Motor', checked: false },
    { name: 'Verificação de Limpadores de Para-brisa', checked: false },
    { name: 'Verificação de Sinalização', checked: false },
    { name: 'Verificação de Documentação', checked: false },
  ];

  constructor(private checklistService: ChecklistService) {
    this.driverEmail = sessionStorage.getItem('userEmail') || '';
    this.description = '';
  }

  onSubmit() {
    const checklistToSend = this.checklistData.map(item => ({
      nome: item.name,
      checked: item.checked,
    }));

    this.checklistService.createChecklist(this.driverEmail, checklistToSend, this.description).subscribe({
      next: (response) => {
      },
      error: (error) => {
        alert('Erro ao salvar a checklist: ' + error.message);
      }
    });
  }

  resetChecklist() {
    this.checklistData.forEach(item => {
      item.checked = false;
    });
  }

}
