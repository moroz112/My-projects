/**
 * Created by amoroz-prom on 22.03.15.
 */
$(function(){
   var questions = {
       question1:{
           name:'Do you like JS',
           variants:{
               1: 'yes',
               2: 'no'
           }
       },
       question2:{
           name: 'Do you like OOP',
           variants:{
               1: 'Of course',
               2: 'Hell no'
           }
       },
       question3:{
           name: 'fuck off mother fucker',
           variants: {
               1: 'fuck you ',
               2: 'fuck me'
           }
       }

   };

    var collection = $('.answer-variant');
    var i = 1;
    collection.each(function(){
        $(this).append(questions.question1.variants[i]);
        i++;
    });
    var questionPlace = $('.question-text');

    function render(event){
        var answers = $('input:checked').val();
        var ans = $('input');
        var i =1;
        var k =1;
        switch (answers) {
            case questions.question1.variants[1]: questionPlace.empty();
                questionPlace.append(event.data.question.question2.name);

                ans.each(function(){
                    $(this)[0].value = questions.question2.variants[k];
                    k++;
                });

                collection.each(function(){
                    $(this).empty();
                    $(this).append(questions.question2.variants[i]);
                    i++;
                });

                break;
            case questions.question1.variants[2]: questionPlace.empty();
                questionPlace.append(event.data.question.question3.name);
                collection.each(function(){
                    $(this).empty();
                    $(this).append(questions.question3.variants[i]);
                    i++;
                });
                break;
            case questions.question2.variants[1]: questionPlace.empty();
                questionPlace.append(event.data.question.question1.name);
                collection.each(function(){
                    $(this).empty();
                    $(this).append(questions.question1.variants[i]);
                    i++;
                });
                break;
        }

        console.log(event.data.question.question1.name)
    };

    questionPlace.append(questions.question1.name);

    $('.get-answer').on('click',{question: questions},render);
});