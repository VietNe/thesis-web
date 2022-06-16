import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  userValue = new BehaviorSubject(this.user);
  tokenValue = new BehaviorSubject(this.token);
  constructor() {}

  set user(value) {
    this.userValue.next(value);
    localStorage.setItem("user", value);
  }

  get user() {
    return localStorage.getItem("user");
  }

  set token(value) {
    this.userValue.next(value);
    localStorage.setItem("token", value);
  }

  get token() {
    return localStorage.getItem("token");
  }
}
