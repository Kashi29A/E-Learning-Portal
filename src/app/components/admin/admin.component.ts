import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Question } from '../../models/questionSet.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }
  selectedOption = "mcq";
  questions = [];
  question: any = {};
  formTitle;
  ngOnInit(): void {
  }

  dropdownChanged(event: any) {

    var e = <HTMLSelectElement>document.getElementById("dropdown");
    var strUser = e.options[e.selectedIndex].value;
    console.log(strUser)
    this.selectedOption = strUser;
    this.question.type = strUser;
  }

  addQuestion() {
    let question = new Question();
    let option1 = <HTMLOptionElement>document.getElementById('option1');
    let option2 = <HTMLOptionElement>document.getElementById('option2');
    let option3 = <HTMLOptionElement>document.getElementById('option3');
    let option4 = <HTMLOptionElement>document.getElementById('option4');
  
    let questionField = <HTMLInputElement>document.getElementById('questionField');
    question.id = Math.random().toString(16).substr(2, 9)
    
    question.question = questionField.value;
    question.type = this.selectedOption;
    question.option1 = option1.value;
    question.option2 = option2.value;
    question.option3 = option3.value;
    question.option4 = option4.value;
    console.log(question);
    this.questions.push(question);

  }
  deleteQuestion(q) {
    if (this.questions.includes(q)) {
      this.removeByAttr(this.questions, 'id', q.id);
    }
  }

  removeByAttr = function (arr, attr, value) {
    var i = arr.length;
    while (i--) {
      if (arr[i]
        && arr[i].hasOwnProperty(attr)
        && (arguments.length > 2 && arr[i][attr] === value)) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }
  onSubmit(formGroup: FormGroup) {
    console.log(formGroup)
  }


}
