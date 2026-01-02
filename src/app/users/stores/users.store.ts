import { inject } from '@angular/core';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';

import { User } from "../models/users.models"
import { UserService } from '../services/user';

interface UserState {
    isCurrentUserLoaded: boolean
    currentUser: User | null
}

const initialState: UserState = {
    isCurrentUserLoaded: false,
    currentUser: null
}

export const UserStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store) => {
        const userService = inject(UserService)
        return {
            loadCurrentUser(){
                userService.getCurrentUser().subscribe({
                    next: result => {
                        patchState(store, {isCurrentUserLoaded: true, currentUser: result})
                    },
                    error: (err) => {
                        console.log(err)
                    }
                })
            }
        }
    })
)