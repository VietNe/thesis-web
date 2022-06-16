import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { LocalStorageService } from "../services/local-storage.service";

@Injectable()
export class BearerInterceptor implements HttpInterceptor {
  public token: any;
  public language: any;
  constructor(private localStorageService: LocalStorageService) {
    this.localStorageService.tokenValue.subscribe((val) => {
      this.token = val;
    });
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.token = this.localStorageService.token;
    const newReq = request.clone({
      headers: request.headers.set(
        "Authorization",
        "Bearer " + this.token?.slice(1, -1)
      ),
    });
    return next.handle(newReq);
  }
}
