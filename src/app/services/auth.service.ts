import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Router } from "@angular/router";
import { BaseService } from "./base.service";
import { environment } from "../../environments/environment";
import { ToastService } from "./toast.service";

@Injectable({
  providedIn: "root",
})
export class AuthService extends BaseService {
  private authEndpoint = `${environment.API_URL}/users`;
  constructor(
    http: HttpClient,
    toastService: ToastService,
    private router: Router
  ) {
    super(http, toastService);
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(["/"]);
  }

  public login(body: LoginInput): Observable<LoginResponse> {
    return this.post(body, `${this.authEndpoint}/login`);
  }
}
