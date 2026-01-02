import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import Keycloak from 'keycloak-js';

import { UserStore } from '../../../users/stores/users.store';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  readonly userStore = inject(UserStore)

  keycloak = inject(Keycloak)
  router: Router = inject(Router)
  isMenuActive = signal(false)

  constructor(){
    effect(() => {
      console.log(this.userStore.currentUser())
    })
  }

  ngOnInit(): void {
    this.userStore.loadCurrentUser()
  }

  toggleNavbarMenu(){
    this.isMenuActive.update(value => !value)
  }

  openLink (route: string){
    this.router.navigateByUrl(route)
  }

  onLogout(){
    this.keycloak.logout()
  }

}
