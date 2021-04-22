import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coupons-user',
  templateUrl: './coupons-user.component.html',
  styleUrls: ['./coupons-user.component.scss']
})
export class CouponsUserComponent implements OnInit {
  public rulesList: FormArray;
  today =new Date();

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.rulesList = this.form.get('rules') as FormArray;

  }

 
  form = new FormGroup({
    coupon_type: new FormControl('', Validators.required),
    coupon_code: new FormControl('', [Validators.required]),
    valid_from: new FormControl('', Validators.required),
    valid_to: new FormControl('',Validators.required),
    is_active: new FormControl(''),
    is_unlimited: new FormControl(''),
    tnc:new FormControl(''),
    rules: this.fb.array([this.createRules()])

  });

   // rules formgroup
   createRules(): FormGroup {
    return this.fb.group({
      min_amount: ['', Validators.compose([Validators.required,Validators.min(1)])], 
      max_amount: ['',Validators.compose([Validators.required,Validators.max(100)])], 
      discount_type: ['', Validators.compose([Validators.required])],
      discount: ['', Validators.compose([Validators.required])], 
      max_discount: [''],
    });
  }


  addRules() {
    this.rulesList.push(this.createRules());
  }

  removeRules(index) {
    this.rulesList.removeAt(index);
  }

  get rulesFormGroup() {
    return this.form.get('rules') as FormArray;
  }

   // get the formgroup under contacts form array
   getRulesFormGroup(index): FormGroup {
    const formGroup = this.rulesList.controls[index] as FormGroup;
    return formGroup;
  }

  public errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }

  save(){
    console.log(this.form.value)
  }

}
