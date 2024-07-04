let tasks = [];
let comp = [];

const taskTitle = document.getElementById("taskTitle");
const taskDesc = document.getElementById("taskDesc");
form = document.querySelector('form');

function showall(){
    tasks.forEach((value,index) => {
        const toAddDiv = document.createElement("div");
        const divTitle = document.createElement("h3");
        const divDesc = document.createElement("p");
        const divBut = document.createElement("button");
        // toAddDiv.id = taskTitle;
        toAddDiv.className = "iTask";
        divBut.className = "doneBut";
        divTitle.textContent = value.taskTitle;
        divDesc.textContent = value.taskDesc;
        divBut.textContent = "Done";
    
        toAddDiv.appendChild(divTitle);
        toAddDiv.appendChild(divDesc);
        toAddDiv.appendChild(divBut);

        divBut.addEventListener('click',()=>{
            comp.push(value);
            tasks.splice(index,1);
            removeall();
            showall();
            removeallcomp();
            showallcomp();
        });
    
        document.getElementById("incompleted").appendChild(toAddDiv);
    });
}

function showallcomp(){
    comp.forEach((value,index) => {
        const toAddDiv = document.createElement("div");
        const divTitle = document.createElement("h3");
        const divDesc = document.createElement("p");
        const divBut = document.createElement("button");
        // toAddDiv.id = taskTitle;
        toAddDiv.className = "iTask";
        divBut.className = "deleteBut";
        divTitle.textContent = value.taskTitle;
        divDesc.textContent = value.taskDesc;
        divBut.textContent = "Delete";

        toAddDiv.appendChild(divTitle);
        toAddDiv.appendChild(divDesc);
        toAddDiv.appendChild(divBut);

        divBut.addEventListener('click',()=>{
            comp.splice(index,1);
            removeallcomp();
            showallcomp();
        });

        document.getElementById("completed").appendChild(toAddDiv);
    });
}

function removeall(){
    document.getElementById("incompleted").innerHTML = "";
}

function removeallcomp(){
    document.getElementById("completed").innerHTML = "";
}

function taskAdder(e){
    e.preventDefault();
    console.log("called");
    // const taskTitle = document.getElementById("taskTitle").value;
    // const taskDesc = document.getElementById("taskDesc").value;
    // console.log(taskTitle);
    // console.log(taskDesc);
    
    tasks.push({taskTitle : taskTitle.value, taskDesc : taskDesc.value});
    
    console.log(tasks);
    
    removeall();
    showall();
        
    taskTitle.value = "";
    taskDesc.value = "";
}

// const add = document.getElementById('addTaskButton');
form.addEventListener('submit', taskAdder);
