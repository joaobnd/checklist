import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "../../shared/services/auth/auth.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  email: string = '';
  pswd: string = '';

  constructor(private authService: AuthService) {
  }

  register() {
    this.authService.register(this.email, this.pswd).subscribe({
      next: (response) => {
        alert('Usuário registrado com sucesso');
      },
      error: (error) => {
        alert('Erro ao registrar o usuário.');
      }
    });
  }

}
