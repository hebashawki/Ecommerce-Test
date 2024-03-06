import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading: boolean = false;
  msError: string = '';
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  loginForm: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),

  })
  handleForm(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this._AuthService.setLogin(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.message == 'success') {
            this.isLoading = false;
            localStorage.setItem('etoken', response.token)
            this._AuthService.saveUserData()
            this._Router.navigate(['/home'])
          }


        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error.message);
          console.log(err);

          this.isLoading = false;
          this.msError = err.error.message
        }
      })

    }
    else{
      this.loginForm.markAllAsTouched()
    }
  }
}
