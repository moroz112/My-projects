/**
 * Created by amoroz-prom on 13.11.14.
 */
$(function(){
    $('.b-form__create-task').hide();
    $('.b-layout__main-menu-item_create span').on('click',function ShowCreateTask(){
        $('.b-form__create-task').toggle();
    });
    $('.b-layout__main-menu-item_show-task').on('click',function ShowAllTasks(){
        $.ajax({
            method:'POST',
            url:'index.php',
            data: 'ShowTask=1',
            success: function(result){
                var data = JSON.parse(result);
                for(var i =0;i<data.length;i++){
                    var div = document.createElement('div');
                    var span = document.createElement('span');
                    var span2 =document.createElement('span');
                    var txt2 = document.createTextNode(data[i].Description);
                    var txt = document.createTextNode(data[i].TaskName);
                    span.appendChild(txt);
                    span2.appendChild(txt2);
                    div.appendChild(span);
                    div.appendChild(span2);
                    $('.b-layout__task_or_user-list').append(div);
                }
                $('.b-layout__task_or_user-list div span').addClass('b-task_or_user-list__item');


            }

        })
    })
});
