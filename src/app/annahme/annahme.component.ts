import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';@Component({
  selector: 'app-annahme',
  templateUrl: './annahme.component.html',
  styleUrls: ['./annahme.component.css']
})
export class AnnahmeComponent{
  paletteForm = this.fb.group({
    von_Name: ['', Validators.required],
    von_address: this.fb.group({
      street: [''],
      city: [''],
      zip: ['']
    }),
    zu_Name: ['', Validators.required],
    zu_address: this.fb.group({
      street: [''],
      city: [''],
      zip: ['']
    }),
    weight: [''],
    count: [''],
    typ: [''],
    cooling_req: [''],
    temp: [''],
    is_hazard: [''],
    gnumber: [''],
    snumber: [''],
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.paletteForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  /*updateProfile() {
    this.paletteForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }*/

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.paletteForm.value);
  }
}
