    let task_cont = document.querySelector('.list-sec ul');
    

    let create_task = function(ele,checkedB){
    let task = document.createElement('li');
    let title = document.createElement('h2');
    let title_cont = document.createElement('div');
    let _delete = document.createElement('button');
    let check_box =  document.createElement('input');
        
        check_box.type =  'checkbox';
        _delete.id = ele;
        title.textContent = ele;
        check_box.checked = checkedB;
        _delete.textContent = "Delete";
        if(check_box.checked){
            title.classList.add('active')
        }else{
            title.classList.remove('active')
        }

        title_cont.appendChild(check_box);
        title_cont.appendChild(title);
        task.appendChild(title_cont);
        task.appendChild(_delete);

        _delete.addEventListener("click", function () {
            task_cont.removeChild(task);
            window.localStorage.removeItem(ele);
        });

        check_box.addEventListener('click', function(){
            if(check_box.checked){
                    title.classList.add('active');
                    let taskOJ = JSON.parse(window.localStorage.getItem(ele));
                    taskOJ.checked = true;
                    window.localStorage.removeItem(ele);
                    window.localStorage.setItem(ele, JSON.stringify(taskOJ));
                }else{
                    title.classList.remove('active');
                    let taskOJ = JSON.parse(window.localStorage.getItem(ele));
                    taskOJ.checked = false;
                    window.localStorage.removeItem(ele);
                    window.localStorage.setItem(ele, JSON.stringify(taskOJ));
                }
        });


        check_box.addEventListener('change',function(){
            if(check_box.checked){
                title.classList.add('checked');
            }else{
                title.classList.remove('checked')
            }
        });
        return task;
    };

    let input = document.getElementById(`task-input`);
    let send_button = document.getElementById(`add-input`);

    document.addEventListener('keydown', (Event)=>{
        if(input.value !== "" && Event.key == 'Enter'){
            task_cont.appendChild(create_task(input.value,false));
            window.localStorage.setItem(input.value, JSON.stringify({name:input.value, date:"16:00", checked: false}));
            input.value = "";
        }
     })

    let add_task_btn = function(){
        send_button.addEventListener("click", function(){
            if(input.value !== ""){
                task_cont.appendChild(create_task(input.value,false));
                window.localStorage.setItem(input.value, JSON.stringify({name:input.value, date:"16:00", checked: false}));
                input.value = "";
            }
        });
    };
    add_task_btn();

    let reload_data = function(){
        let i  = 0;
        let task = window.localStorage;
        let taskslength = task.length;
        while(i < taskslength){
            let taskOJ = JSON.parse(window.localStorage.getItem(window.localStorage.key(i)));
            let task = create_task(taskOJ.name,taskOJ.checked);
            if(!taskOJ.checked){
                task_cont.appendChild(task);
            }
            i++;
    }
    i=0;
    while(i < taskslength){
        let taskOJ = JSON.parse(window.localStorage.getItem(window.localStorage.key(i)));
        let task = create_task(taskOJ.name,taskOJ.checked);
        if(taskOJ.checked){
            task_cont.appendChild(task);
        }
        i++;
}
    };
    reload_data();






    

    
    
  




































