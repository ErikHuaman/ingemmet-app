import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { C } from 'src/app/constante/constants';
import { IntranetService } from 'src/app/services/intranet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  checked: boolean = false;
  cargando: boolean = false;
  formLoginWeb: FormGroup;
  usuarios: any = {};
  user: any = {};
  constructor(
    private _formBuilder: FormBuilder, 
    private _router: Router,
    private toastr: ToastrService,
    private _clienteService:IntranetService) {}

  ngOnInit(): void {
    /*if(sessionStorage.getItem(C.STORAGE.TOKEN_KEY)){
      this._router.navigate(['/inicio']);
    }else{ 
      this._router.navigate(['/login']);
    }*/
    if(sessionStorage.getItem(C.STORAGE.TOKEN_KEY)){
      this._router.navigate(['/login']);
    }
  }
  CargarFormulario() {
      this.formLoginWeb = this._formBuilder.group({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
  }
  
  login(){
    this.cargando = true;
    this._clienteService.login_cliente(this.user).subscribe(response => {
        if(response.code == 201){
            this.usuarios = response.data;
            sessionStorage.setItem(C.STORAGE.TOKEN_KEY, response.data.token);
            sessionStorage.setItem(C.STORAGE.USERS, response.data.usuario);
            sessionStorage.setItem(C.STORAGE._ID, this.usuarios.id);
            sessionStorage.setItem(C.STORAGE._ID_SISTEMA, this.usuarios.idSistemaActual);
            sessionStorage.setItem(C.STORAGE.CORREO, this.usuarios.correoE);
            this.toastr.success('Bienvenido al Intranet');
    
             
              //this._router.navigate(['/inicio']);
              this._router.navigate(['inicio'])
            .then(() => {
              window.location.reload();
            });
                     
        }else{
          this.toastr.info('Usuario o contraseña incorrecto');
          this._router.navigate(['/login']);
          
        }
        this.cargando = false;
    },err =>{
        this.cargando = false;
        this.toastr.error('Error al ingresar');
    });
    
  }

 
}
