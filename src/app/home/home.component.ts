import { Component, ElementRef, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { UserServiceService } from '../services/UserService.service';
import { User } from '../interfaces/userInterface';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isNewUserOpen: boolean = false;

  isModalOpen : boolean = false;

  userList : User[] = [];

  selectedUser? : User;
  indexOfSelectedUser : number = -1;

  constructor(
    private userService : UserServiceService,
    private elementRef: ElementRef
    ) { }

  ngOnInit(): void {
    this.isNewUserOpen = false;
    this.userList = this.userService.getAllUsuaris();
  }

  newUser(){
    this.isNewUserOpen = !this.isNewUserOpen;
  }

  delete(index : number){
    this.userService.removeUsuari(index);
    this.ngOnInit()
  }

  deleteAll(){
    this.userService.deleteAllUsuaris();
    this.ngOnInit()
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target) && this.isModalOpen) {
      this.closeDetails();
    }
  }


  openDetails(i : number) {
    this.selectedUser = this.userList[i];
    this.indexOfSelectedUser = i;
    this.isModalOpen = true;
  }

  closeDetails() {
    this.isModalOpen = false;
    this.ngOnInit()
  }



}
