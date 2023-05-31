import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/userInterface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/UserService.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() selectedUser? : User;
  @Input() index : number = -1

  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  form : FormGroup = new FormGroup({
    nom : new FormControl(this.selectedUser?.nom, Validators.required),
    cognom : new FormControl('', Validators.required),
    email : new FormControl(this.selectedUser?.email, [Validators.required, Validators.email])
  })



  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {
    this.form.controls["nom"].setValue(this.selectedUser?.nom)
    this.form.controls["cognom"].setValue(this.selectedUser?.cognom)
    this.form.controls["email"].setValue(this.selectedUser?.email)
  }

  onSubmit(){
    this.userService.updateUsuari(this.form.getRawValue(), this.index);
    this.closeModal.emit();
  }

  




}
