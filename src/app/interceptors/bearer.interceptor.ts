import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class BearerInterceptor implements HttpInterceptor {
  public token: any;
  public language: any;
  constructor() {
    this.token = localStorage.getItem("token");
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.token) this.token = localStorage.getItem("token");
    const newReq = request.clone({
      headers: request.headers.set("Authorization", `Bearer ${this.token}`),
    });
    return next.handle(newReq);
  }
}
