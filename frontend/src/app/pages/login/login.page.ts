import { UnsupportedPlatformException } from '@angular-devkit/core';
import { Component} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  passwordToogleIcon = 'eye-off-outline';
  showPassword= false;
  todo: FormGroup;
  constructor(
   private formBuilder: FormBuilder,
   private _login: LoginService,
   private router: Router,
   private loading: LoadingController,
   private _loginService: LoginService
  ) {
    this._loginService.menu = false;
    console.log(_loginService.menu)
    this.todo = new FormGroup({
      celular: new FormControl('', Validators.required),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  async login(){
    const loading = await this.loading.create({
      message: 'Iniciando Sesión'
    })
    let user = new Usuario(
      this.todo.value.celular,
      this.todo.value.pass

    );
    await loading.present().then(()=>{
      this._login.login(user).subscribe(()=>{
        loading.dismiss();
        this.router.navigateByUrl('principal');
      }, err=>{
        loading.dismiss();
        return;
      })
    })
  }
  
  togglePassword(){
    this.showPassword = !this.showPassword;
  }

}
