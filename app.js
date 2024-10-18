        // String


        // let a = "hello";

        // let answer = a < 10 ? "10" : a = 10 && a <= 40 
        // ? "10 to 40" : a > 40 ? "a > 40" : "unknown"

        // console.log(`the Answer is ${answer}`)

        // let st = "Elzero Web School";

        // if((st.length * 2).toString()  === "34"){
        // console.log("Good");
        // }

        // if(st.charAt(st.indexOf("W")) === "W"){
        //     console.log("Good")
        // }

        // if(typeof(+st) !== "string"){
        //     console.log("Good")
        // }


        // if(typeof(+st) === "number"){
        //     console.log("Good")
        // }

        // if(st.slice(0,6).repeat(2) === "ElzeroElzero"){
        // console.log("Good")
        // }




        // let job = "Support";
        // let salary = 0;
        // switch(job){
        //     case "Manager" :
        //         salary = 8000;
        //         console.log(`your salary is :  ${salary} : ${job}`)
        //         break;
        //     case "IT":
        //     case "Support":
        //         salary = 6000;
        //         console.log(`your salary is :  ${salary} : ${job}`)
        //         break;
        //     case "Developer":
        //     case  "Designer":
        //         salary = 7000;
        //         console.log(`your salary is :  ${salary} : ${job}`)
        //         break;
        //     default:
        //         salary = 4000;
        //         console.log(`your salary is :  ${salary} : ${job}`)
        // }




        // let myfriends = ["mostafa", "omar", "yahya", 10,-10 ,5]
        // for(let i = 0; i< myfriends.length ; i++){
        //     console.log(myfriends[i])

        // }


        // let zero = 0;

        // let counter = 3;

        // let my = ["Ahmed","Mazero", "Elham","osama","Gamel","Ameer"]

        // Write Code Here 
        // my.pop()
        // my.pop()
        // console.log(my.reverse()); // [osama,Elham,mazero,Ahmed]
        // console.log(my.slice(zero + true , counter)) // [Elham,Mazero]

        // console.log(my[++zero].slice(--zero,--counter) + (my[counter].slice(counter))); //Elzero

        // console.log(my[counter].slice(-counter).charAt(zero) + (my[counter].slice(-(--counter))).toUpperCase()); //rO

        // let Admins = ["Ahmed","Osama","Sayed","Stop","Samers"]
        // let Employees = ["Amgad", "Samah", "Ameer", "Omar",
        //                  "Othman","Amany","Samia", "Anwar"]
        // let i = 0;
        // do{
        // i++
        // }while(Admins[i] !== "Stop")

        // document.write(`<div> We Have ${i} of Admins</div><hr>`)

        // for(let j = 0; j<Admins.length;j++){

        //     if(Admins[j] !== "Stop"){
        //         document.write(`<div>the Admin of team ${j+1} is ${Admins[j]}`)
        //         document.write(`<h3>Team Members: </h3>`)
        //         let num_mem =0;
        //         for(let x =0;x< Employees.length;x++){
        //         if(Employees[x].charAt(0) === Admins[j].charAt(0)){
        //         document.write(`<p> - ${++num_mem} ${Employees[x]} </p>`)
        //         }
        //         }
        //         document.write("</div> <hr>")
        //     }else{
        //         break
        //     }
        
        //     }


        // function ShowDetails(...data){
        //         var _name,_age,_status; 
        //         for(let i = 0 ; i < data.length;i++){
        //         if(typeof data[i] === "string"){
        //             _name = data[i];
        //         }else if(typeof data[i] === "number"){
        //             _age = data[i];
        //         }else{
        //             _status = data[i];
        //         }
        //         }

        //         return `Hello ${_name}, your age is :${_age}, you are ${_status ? "Available":"Not Available"} for hire`
        // }


        // console.log(ShowDetails(true,20,"mostafa"))

        // let names = function(..._name){
        //     return `String [${_name.join("],[")}] => Done !` //regular Function
        // }

        // let _names = (...name) => `String [${name.join("],[").toUpperCase()}] => Done !` //Arrow Function

        // console.log(names("osama","mohamed","ali","ibrahim"))
        // console.log(_names("osama","mohamed","ali","ibrahim"))


        // let myNumbers = [20,50,10,60];

        // let calc = (one, two, ...nums) => one + two + (+nums);

        // let _calc = function (one, two, ...nums){
        //     return one + two + (+nums);
        // } 
        // console.log(`Arrow: ${calc(10,myNumbers[0],myNumbers[2])}` ); //80 //Arrow
        // console.log(`Regular: ${_calc(10,myNumbers[0],myNumbers[2])}` ); //80 //Regular
        /*
        let arr = [1,2,3,4,5,6]

        let result = arr.map((a)=> a+a)

        console.log(result)

        let _name = "Mos534TA88Fa"
        let num = [1,-10,-50,60,-40,8]

        let __name =(_name.split("").map((ele) =>ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()));
        
        console.log( __name.join(""))
        

        console.log(num.map(function (_num){
            return -_num;
        }))

        

        

        console.log( _name.split("").map((ele) => isNaN(parseInt(ele)) ? ele : "" ).join(""));
    
    let friends = ["Mosataf","mohamed","fadi","karim","bedri","saleh","samy","farah"]

    let filtername = friends.filter(function (ele){return ele.startsWith("f")})

    console.log(filtername)
    
 

    let sentence = "i love foood code to playing much";

    let filter = sentence.split(" ").filter((ele) => ele.length <= 4).join(' ')

    console.log(filter)

    let ignoreNumbers = "M@o@s@t@a@f@a@1@2@3@K@h@8@0@8@"
{
    let ign = ignoreNumbers
    .split("")
    .filter((e) => isNaN(parseInt(e)) && !e.startsWith('@'))
    .reduce((acc,cur) => acc+cur)

    console.log(ign)
}
     

       

    let numbers = [10,20,50,60]

    console.log(numbers.reduce(function (acc,cur,index){return acc + cur}))

    

    let info = document.querySelectorAll("ul h1");
    let li = document.querySelectorAll("li")
    info.forEach(function (ele){
        ele.onclick = function (){
            info.forEach(function (ele){ele.classList.remove("active")})
            this.classList.add("active")
            li.forEach(function (ele){ele.style.background = "#f0f0f0"})
        }
       
        
    })
        

    let myString = "1,2,3,EE,l,z,e,r,o,_W,e,b,_,S,c,h,o,o,l,2,0,Z"

    console.log(myString
    .split(",")
    .filter((ele)=>{return isNaN(parseInt(ele))})
    .join("")
    .split("_")
    .map(ele => ele.split("").reduce((acc, cur,i,a) => (acc.includes(cur) && a.join().startsWith(acc)  ? acc: cur === cur.toUpperCase() ? acc + "" : acc + cur )))
    .join(" ")) // Elzero Web School
   

    //DOM

    let myQueryEle = document.querySelector(".nav") //( . , #) Dot for class, # for Id
    //if we have more than one element with 
    //the same name of class or id so we can use selectorAll
    let myQueryEleAll = document.querySelectorAll("#select")
   
      */

/*
let header = document.createElement('div')
header.className = "header"
let logo = document.createElement('h2')
logo.className = "logo"
logo.textContent = "Shop"
let nav = document.createElement('div')
nav.className = 'nav_bar'
document.body.style.cssText = 'margin:0;padding:0; font-family: Sans-serif; box-sizing:border-box '

header.style.cssText = `display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding:20px;
                        color: green;
                        font-size: 20px;
                        `
let link_name = ['Home','About','Service','Contact']
let x =0;
link_name.forEach((ele) => {
    let linkes = document.createElement('a')
    linkes.setAttribute('href','#')
    linkes.setAttribute('value', (x)++)
    linkes.style.cssText = `color: gray; padding: 0px 10px; text-decoration: none;`
    linkes.textContent = ele;
    nav.appendChild(linkes)
})
header.appendChild(logo)
header.appendChild(nav)

document.body.appendChild(header)


//product secion
let product_secion = document.createElement('div')
    product_secion.className = 'prodect_sec';
    product_secion.style.cssText = `width:100%; display: grid;
                                 grid-template-columns: 1fr 1fr 1fr 1fr;
                                  background-color: lightgray;`
    
    
    
        for(i = 0; i< 100; i++){
        let prodect = document.createElement('div')
            prodect.style.cssText = ` padding:25px 0px; margin: 15px; display:flex; flex-direction:column; justify-content: center; align-items: center;
                                     background-color: rgb(255,255,255); border-radius: 10px;`
        let h1 = document.createElement('h1')
        h1.style.cssText = `padding: 0; margin-bottom: 10px;`
        h1.textContent = i + 1;
        let span = document.createElement('span')
        span.textContent = "Product";
        span.style.color = 'gray';
        prodect.appendChild(h1)
        prodect.appendChild(span)
        product_secion.appendChild(prodect)
    }

let footer = document.createElement('footer')
    footer.textContent = 'Copywrite 2024';
    
    footer.style.cssText = `padding:20px;color:rgb(255,255,255);font-size:25px;font-width:600; background-color:green; display:flex; flex-direction:column; justify-content: center; align-items: center`

    document.body.appendChild(product_secion)
    document.body.appendChild(footer)




let a = document.querySelectorAll(".nav_bar a");
    a.forEach((ele) => {
    ele.addEventListener('click', function(){
        a.forEach((e) =>{
            e.style.color = 'gray';
        });
        ele.style.color = 'black'
        if(ele.getAttribute('value') === '0'){
           
            document.body.appendChild(product_secion)
            document.body.appendChild(footer)
        }else{
        if (document.body.contains(product_secion)) {
        document.body.removeChild(product_secion);
        }
        if (document.body.contains(footer)) {
        document.body.removeChild(footer);
        }
        }
    });
       
    })
    */

    let task_cont = document.querySelector('.list-sec ul');
    let create_task = function(ele,checkedB){
        let task = document.createElement('li');
        let title = document.createElement('h2');
        let title_cont = document.createElement('div');
        let _delete = document.createElement('button');
        let check_box =  document.createElement('input');

        check_box.type =  'checkbox';
        check_box.checked = checkedB;
        _delete.textContent = "Delete";
        _delete.id = ele;
        title.textContent = ele;
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

    let add_task_btn = function(){
        let input = document.getElementById(`task-input`);
        let send_button = document.getElementById(`add-input`)
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
        let tasks = window.localStorage.length;
        while(i < tasks){
            let taskOJ = JSON.parse(window.localStorage.getItem(window.localStorage.key(i)));
            let task = create_task(taskOJ.name,taskOJ.checked);
            task_cont.appendChild(task);
            i++;
    }
    };
    reload_data();
 





    

    
    
  




































