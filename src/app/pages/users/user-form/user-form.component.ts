import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LocalStorageService } from "../../../services/local-storage.service";
import { ToastService } from "../../../services/toast.service";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "ngx-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  @Input() isUpdate = false;
  @Input() user: User;

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastService: ToastService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    if (this.isUpdate) {
      this.form = this.fb.group({
        address: [null, [Validators.required]],
        name: [null, [Validators.required]],
        phone: [null, [Validators.required]],
        NameDevice: [null],
        role: [null],
      });
    } else {
      this.form = this.fb.group({
        email: [null, [Validators.required]],
        address: [null, [Validators.required]],
        name: [null, [Validators.required]],
        phone: [null, [Validators.required]],
        NameDevice: [null],
        role: [null, [Validators.required]],
        password: [null, [Validators.required]],
      });
    }
    if (this.user && this.isUpdate) {
      this.form.patchValue(this.user);
    }
  }

  public updateUser(): void {
    this.userService
      .updateUser(this.form.value, this.user._id)
      .subscribe((res) => {
        if (res) {
          this.toastService.success("Update user successful!");
          window.location.reload();
        }
      });
  }

  public createUser(): void {
    this.userService.createUser(this.form.value).subscribe((res) => {
      if (res) {
        this.toastService.success("Create user successful!");
        window.location.reload();
      }
    });
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.isUpdate ? this.updateUser() : this.createUser();
    }
  }
}
