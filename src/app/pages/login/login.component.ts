import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { LocalStorageService } from "../../services/local-storage.service";
import { ToastService } from "../../services/toast.service";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    const token = localStorage.getItem("token");
    if (token) {
      this.router.navigate(["/pages/dashboard"]);
    }

    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  get emailCtl(): FormControl {
    return this.form.controls["email"] as FormControl;
  }

  get pwdCtl(): FormControl {
    return this.form.controls["password"] as FormControl;
  }

  ngOnInit(): void {}

  private login(): void {
    this.authService.login(this.form.value).subscribe((res: LoginResponse) => {
      if (res) {
        this.toastService.success("Login successful!");
        localStorage.setItem("token", res.token);
        // localStorage.setItem("user", JSON.stringify(res.data.user));
        this.localStorageService.user = JSON.stringify(res.data.user);
        this.router.navigate(["/pages/dashboard"]);
      }
    });
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.login();
    }
  }
}
