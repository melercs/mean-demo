import { Component} from '@angular/core';
import { Question } from './question.model';

const q=new Question(
    '¿Cómo reutilio un componente en android?',
    'Miren esta es mi pregunta...',
    new Date(),
    'devicon-android-plain'
);

@Component({
    selector : 'app-question-list',
    templateUrl : './question-list.component.html',
    styles:[`
            i{
                font-size: 48px;
            }
            i.help{
                width : 48px!important;
                padding: 0px!important;
                font-size: 48px!important;

            }
        `]
})

export class QuestionListComponent{
    questions: Question[] = new Array(10).fill(q);

}
