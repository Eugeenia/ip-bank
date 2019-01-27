import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServerService } from 'src/app/shared/server.service';
import { ValidatorService } from 'src/app/shared/validator.service';
import { TokensService } from 'src/app/shared/tokens.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autentification',
  templateUrl: './autentification.component.html',
  styleUrls: ['./autentification.component.css']
})
export class AutentificationComponent implements OnInit {

  autentification: FormGroup = new FormGroup({
    login:new FormControl('jain', [
      Validators.required
    ]),
    passw: new FormControl('1234', [
      Validators.required
    ])
  })

  constructor(private service: ServerService,
              private token: TokensService,
              private router: Router) { }

  ngOnInit() {
  }

  public collectInfo() { 
    const login = this.autentification.get('login').value;
    const password = this.autentification.get('passw').value;
    this.service.getToken(login, password).subscribe(value => {
        this.token.setToken(value.token);
        this.router.navigate(['/admin']);
    });
    console.log('got')
  }

}
