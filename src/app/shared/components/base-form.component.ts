import {FormGroup} from "@angular/forms";

export class BaseFormComponent {
  // Used to check if the form control is invalid.
  protected isInvalidControl( form: FormGroup, controlName: string) {
    const control = form.controls[controlName];
    return control.invalid && control.touched;
  }

  // Used to check the errors of the form control.
  private errorMessageForControl(controlName: string, errorKey: string): string {
    switch(errorKey) {
      case 'required': return `The field ${controlName} is required`;
      case 'passwordError': return `The password is incorrect`;
      default: return `The field ${controlName} is invalid`;
    }
  }

  // Used to control the error messages of the form control.
  protected errorMessagesForControl(form: FormGroup, controlName: string) {
    const control = form.controls[controlName];
    let errorMessages = "";
    let errors = control.errors;
    if(errors) {
      Object.keys(errors).forEach(errorKey => errorMessages += this.errorMessageForControl(controlName, errorKey));
    }
    return errorMessages;
  }

}
