import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../pages/models/usuario.model';
import { URL_SERVICIOS } from '../pages/config/config';
import { throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  base_path = 'http://democandy.000webhostapp.com/api/productos';
  public usuario: any;
  menu:boolean;
  constructor(
    private http: HttpClient
  ) { }
  saveStorage(token, usuario){
    localStorage.setItem('token', token);
    localStorage.setItem('celular', usuario.celular);
    console.log('Configuración realizada')
  }

  login(usuario: Usuario){
    let url = URL_SERVICIOS + 'todos'
    try {
      return this.http.post(url, usuario).pipe(
        map((resp: any)=>{
          console.log(resp);
          this.saveStorage(resp.authToken, resp.usuario)
          return resp;
        }),
        catchError(err=>{
          return throwError('Credenciales Inválidas: '+ err )
        })
      );
    } catch (error) {
      console.log(error)
    }
  }

}
