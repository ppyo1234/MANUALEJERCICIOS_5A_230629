import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState = new BehaviorSubject<boolean>(true); // true = autenticado, false = no autenticado
  isAuthenticated = this.authState.asObservable();

  logout() {
    this.authState.next(false); // Cambiar estado a no autenticado
  }

  login() {
    this.authState.next(true); // Cambiar estado a autenticado
  }
}
