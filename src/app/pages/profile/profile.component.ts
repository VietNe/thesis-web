import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LocalStorageService } from "../../services/local-storage.service";
import { ToastService } from "../../services/toast.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "ngx-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastService: ToastService,
    private localStorageService: LocalStorageService
  ) {
    this.form = this.fb.group({
      email: [{ value: null, disabled: true }],
      address: [null, [Validators.required]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      NameDevice: [{ value: null, disabled: true }],
      role: [{ value: null, disabled: true }],
    });
  }

  ngOnInit(): void {
    this.userService.getProfile().subscribe((res) => {
      if (res) {
        this.form.patchValue({ ...res.data });
        localStorage.setItem("user", JSON.stringify(res.data));
      }
    });
  }

  public updateProfile(): void {
    this.userService
      .updateProfile({
        name: this.form.value.name,
        address: this.form.value.address,
        phone: this.form.value.phone,
      })
      .subscribe((res) => {
        if (res) {
          this.toastService.success("Update profile successful!");
          this.localStorageService.user = JSON.stringify(res.data.user);
        }
      });
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.updateProfile();
    }
  }
}
