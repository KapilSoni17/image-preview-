import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formarray';

  skillsForm: FormGroup;

  constructor(private fb:FormBuilder) {

    this.skillsForm = this.fb.group({
      name: '',
      last:'',
      state:'',
      skills: this.fb.array([]) ,
    });

  }

get skills() : FormArray {
  return this.skillsForm.get("skills") as FormArray
}

newSkill(): FormGroup {
  return this.fb.group({
    skills: '',
    experience: '',
  })
}

addSkills() {
  this.skills.push(this.newSkill());
}

removeSkill(i:number) {
  this.skills.removeAt(i);
}

onSubmit() {
  console.log(this.skillsForm.value);
}

}


// export class country {
// id: string;
// name: string;

// constructor(id: string, name: string) {
//   this.id = id;
//   this.name = name;
// }
// }
