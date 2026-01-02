import { Component, effect, inject, input } from '@angular/core';
import { UserStore } from '../../stores/users.store';

@Component({
  selector: 'app-user-view',
  imports: [],
  templateUrl: './user-view.html',
  styleUrl: './user-view.css',
})
export class UserView {

  userId = input.required<string>()
  readonly userStore = inject(UserStore)

  constructor(){
    effect(() => {
      this.userStore.loadUserById(this.userId())
    })
  }

}
