import { Component } from '@angular/core';
import {AuthService} from "../../shared/services/auth/auth.service";
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = '';
  pswd: string = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    this.authService.login(this.email, this.pswd).subscribe({
      next: (response) => {
        sessionStorage.setItem('userEmail', this.email);
        alert('Usuario logado com sucesso')
        this.router.navigate(['/dashboard/checklists']);
      },
      error: (error) => {
        alert('Usuario não cadastrado.')
      }
    });
  }

}
