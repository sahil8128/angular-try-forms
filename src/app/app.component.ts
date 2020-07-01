import { Component, VERSION } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  registrationForm = new FormGroup({
    user_name : new FormControl('Sahil'),
    user_password  : new FormControl(''),
    confirm_password : new FormControl(''),
    user_address : new FormGroup({
    user_city : new FormControl(''),
    user_state  : new FormControl(''),
    user_postCode : new FormControl(''),
    })
  });

}
