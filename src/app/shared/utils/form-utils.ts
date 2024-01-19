import { FormGroup } from "@angular/forms";

export const markFormDirty = (form: FormGroup) => {
    Object.values(form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
}