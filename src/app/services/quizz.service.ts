import { Question } from '../models/Question.model';
export class QuizzService{
    quizz=[
        new Question("Question 1.....",["a","b","c"],"a"),
        new Question("Question 2.....",["a","b","c"],"b"),
        new Question("Question 3.....",["a","b","c"],"c"),
        new Question("Question 4.....",["a","b","c"],"a"),
        new Question("Question 5.....",["a","b","c"],"b")
    ]

    score(answers: string[]){
        let score=0;
        for(let i=0;i<this.quizz.length;i++){
            if(this.quizz[i].answer===answers[i]){
              score+=2;
            }
          }
          return score; 
    }
}