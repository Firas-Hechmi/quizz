import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from '../models/Question.model';
import { QuizzService } from '../services/quizz.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
   quizz : Question[]=[];
   answers : string[]=[];
   score=0;
   endQuizz=false;
   quizzForm : any;
   quizzElement : Question={question:"",suggestions:[],answer:""};
   index=0;
   size=0;
  constructor( private quizzService :QuizzService,private formBuilder : FormBuilder) { }
  ngOnInit(): void {
    this.quizz=this.quizzService.quizz;
    this.quizzElement=this.quizz[0];
    this.quizzForm=this.formBuilder.group(
      {
        answer: this.quizzElement.suggestions[0]
      }
    )
    this.size=this.quizz.length;
  }
  onSubmit(){
    this.answers.push(this.quizzForm.value['answer']);
    if(this.index<this.size-1){
      this.index++;
      this.quizzElement=this.quizz[this.index];
      this.quizzForm=this.formBuilder.group(
        {
          answer: this.quizzElement.suggestions[0]
        }
      )
     }else{
      this.endQuizz=true;
      this.score=this.quizzService.score(this.answers);
     }
     

  }
  previous(){
    if(this.index>0){
      this.index--;
      this.quizzElement=this.quizz[this.index];
     }
  }

}
