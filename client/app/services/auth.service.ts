import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('M5Bl1Zyq0Gzm6NPvMuLQz2h09KtaFPrN', 'barrelrolla.eu.auth0.com', {
    allowedConnections: ["Username-Password-Authentication", "google-oauth2", "facebook"],
    rememberLastLogin: false,
    theme: { "logo": "./../../favicon/android-icon-48x48.png", "primaryColor": "rgb(0,150,136)" },
    languageDictionary: { "title": "Hearthstone Deck Builder" },
    language: "en"
  });

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  }
}