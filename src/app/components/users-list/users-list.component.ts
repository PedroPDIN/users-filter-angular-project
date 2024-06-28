import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input({ required: true }) usersList: IUser[] = [];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>()

  displayedColumns: string[] = ['name', 'date', 'status',];

  onUserSelected(user: IUser) {
    console.log(user);

    this.userSelectedEmitt.emit(user);
  }
}
