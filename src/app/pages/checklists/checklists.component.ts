import {Component, OnInit} from '@angular/core';
import {ChecklistService} from "../../shared/services/checklist/checklist.service";
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-checklists',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './checklists.component.html',
  styleUrl: './checklists.component.scss'
})
export class ChecklistsComponent implements OnInit{

  email: string = sessionStorage.getItem('userEmail') || '';
  checklists: any[] = [];

  constructor(private checklistService: ChecklistService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadChecklists();

    this.route.params.subscribe(() => {
      this.loadChecklists();
    });
  }

  loadChecklists(): void {
    this.checklistService.getChecklists(this.email).subscribe({
      next: (response) => {
        console.log(this.email)
        this.checklists = response;
      },
      error: (error) => {
        console.error('Erro ao carregar checklists:', error);
      }
    });
  }
}
