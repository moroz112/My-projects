/**
 * Created by amoroz-prom on 22.03.15.
 */
$(function(){
   var questions = {
       'question1':{
           name:'Do you like JS',
           variants:{
               1: 'yes',
               2: 'no'
           }
       },
       'question2':{
           name: 'Do you like OOP',
           variants:{
               1: 'Of course',
               2: 'Hell no'
           }
       }

   };

    var collection = $('.answer-variant');
    var i = 1;
    $('.question-text').append(questions.question1.name);
    collection.each(function(){
        $(this).append(questions.question1.variants[i]);
        i++;
    });

    $('.get-answer').on('click', function(){
        var answers = $('input:checked').val();
            if(answers == questions.question1.variants[1]){
                console.log('it works');
            }
        });
});