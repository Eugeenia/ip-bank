import {Injectable} from '@angular/core';
import {ServerService} from './server.service';
import {AbstractControl} from '@angular/forms';

@Injectable()
export class ValidatorService {
    constructor(private server: ServerService) {}

    validateCardNumber(control: AbstractControl) {
        return this.server.validateCardNumber(control.value);
    }

    validateCardCVC(control: AbstractControl) {
        return this.server.validateCardCVC(control.value);
    }

    validateHowMuch(control: AbstractControl) {
        return this.server.validateAmount(control.value);
    }

    validateCardExpires(control: AbstractControl) {
        return this.server.validateCardExpires(control.value);
    }

    validateComment(control: AbstractControl) {
        return this.server.validateComment(control.value);
    }

    validateINN(control: AbstractControl) {
        return this.server.validateINN(control.value);
    }

    validateBIK(control: AbstractControl) {
        return this.server.validateBIK(control.value);
    }

    validateForWhat(control: AbstractControl) {
        return this.server.validateNDS(control.value);
    }

    validateCountNumber(control: AbstractControl) {
        return this.server.validateAccNumber(control.value);
    }

    validatePhoneNumber(control: AbstractControl) {
        return this.server.validateTelNumber(control.value);
    }

    validateEmail(control: AbstractControl) {
        return this.server.validateEmail(control.value);
    }
}