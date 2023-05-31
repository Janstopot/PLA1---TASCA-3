import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/userInterface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/UserService.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  @Output() closeComponent: EventEmitter<void> = new EventEmitter<void>();

  form : FormGroup = new FormGroup({
    nom : new FormControl('', Validators.required),
    cognom : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email])
  })

  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.insertUsuari(this.form.getRawValue())
    this.closeComponent.emit()
  }

}

