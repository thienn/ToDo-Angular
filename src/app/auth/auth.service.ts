import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    token: string; // for storing and checking the token sent with the firebase

    constructor(private router: Router) {

    }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                // Move back to home
                response => {
                    this.router.navigate['/'];
                }
            )
            .catch(
                error => console.log(error)
            )
            console.log('logged in' + firebase.auth().currentUser.email);
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                // Move back to home
                response => {
                    this.router.navigate['/'];
                    firebase.auth().currentUser.getIdToken()
                    .then( 
                        (token: string) => this.token = token // Connect the token from the server to the one in local
                    )
                }
            )
            .catch(
                error => console.log(error)
            )
            console.log('logged in' + firebase.auth().currentUser.email);
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    isAuthenticated() {
        return this.token != null; // If it's not null then return. Which means if it's null then it's not logged in, if it's something the user is logged in.
    }

}