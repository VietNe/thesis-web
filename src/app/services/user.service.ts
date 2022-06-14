import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { BaseService } from "./base.service";
import { ToastService } from "./toast.service";
@Injectable({
  providedIn: "root",
})
export class UserService extends BaseService {
  private usersEndpoint = `${environment.API_URL}/users`;
  constructor(
    http: HttpClient,
    toastService: ToastService,
    private router: Router
  ) {
    super(http, toastService);
  }

  public getAllUsers(): Observable<any> {
    return this.get(`${this.usersEndpoint}`);
  }

  public getProfile(): Observable<any> {
    return this.get(`${this.usersEndpoint}/me`);
  }

  public updateProfile(body: any): Observable<any> {
    return this.patch(body, `${this.usersEndpoint}/updateMe`);
  }

  public updateUser(body: any, id: string): Observable<any> {
    return this.patch(body, `${this.usersEndpoint}/${id}`);
  }

  public createUser(body: any): Observable<any> {
    return this.post(body, `${this.usersEndpoint}/admin/signup`);
  }
}
