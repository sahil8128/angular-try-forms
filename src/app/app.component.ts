import { Component, VERSION } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private fb : FormBuilder){}

  get _userName(){
    return this.registrationForm.get('user_name');
  }


  // ----Using FormBuilder method to create model for the Form---->

  registrationForm = this.fb.group({
    user_name : ['',[Validators.required,Validators.minLength(5)]],
    user_password  : [''],
    confirm_password : [''],
    user_address : this.fb.group({
    user_city : [''],
    user_state  : [''],
    user_postCode : [''],
    })
  });

  // ----Using FormGroup method to create model for the Form---->

  // registrationForm = new FormGroup({
  //   user_name : new FormControl('Sahil'),
  //   user_password  : new FormControl(''),
  //   confirm_password : new FormControl(''),
  //   user_address : new FormGroup({
  //   user_city : new FormControl(''),
  //   user_state  : new FormControl(''),
  //   user_postCode : new FormControl(''),
  //   })
  // });



  loadAllData(){
    this.registrationForm.setValue({
      user_name : 'Ronaldo',
      user_password  : 'cris123',
      confirm_password : 'cris123',
      user_address : {
        user_city : "Madrid",
        user_state  : "Real Madrid",
        user_postCode : "110034"
      }
    });
  }



  loadFewData(){
    this.registrationForm.patchValue({
      user_name : 'Messi',
      user_password  : 'leo123',
      confirm_password : 'leo123'
    });
  }




  submitForm(){
    console.log(this.registrationForm.value);
  }


  resetForm(){
    //  To reset entire Form --->
    //  this.registrationForm.reset();

    // To reset only particular Field --->
    this.registrationForm.get('user_name').reset();
  }



}