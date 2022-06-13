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
export class StationService extends BaseService {
  private stationsEndpoint = `${environment.API_URL}/stations`;
  constructor(
    http: HttpClient,
    toastService: ToastService,
    private router: Router
  ) {
    super(http, toastService);
  }

  public getDashboard(): Observable<any> {
    return this.get(`${this.stationsEndpoint}/dashboard`);
  }
  public getAllStation(): Observable<any> {
    return this.get(`${this.stationsEndpoint}`);
  }
  public getStationById(id: string): Observable<any> {
    return this.get(`${this.stationsEndpoint}/${id}`);
  }
  public getStationByNameDevice(): Observable<any> {
    return this.get(`${this.stationsEndpoint}/me`);
  }
}
