import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  userValue = new BehaviorSubject(this.user);
  constructor() {}

  set user(value) {
    this.userValue.next(value);
    localStorage.setItem("user", value);
  }

  get user() {
    return localStorage.getItem("user");
  }
}
