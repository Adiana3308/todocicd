    /*
    input-container: to store the input content in the list.
    list-container: 1) to add a new todo.
                    2) to delete the todo on clicking the cross.
                    3) to change the status of the checklisted item.
                    python -m http.server 54321

                    docker build . -t todo-image
docker run -p 54321:54321 -d todo-image 


git init
git add .
git status
git commit -m "Initial Commit"    
git config --global init.defaultBranch main     
git branch --show-current     
git remote add origin https://github.com/Adiana3308/Todo-CICD.git
git push -u origin main 
git remote -v  
git push 
git add .\Dockerfile
git commit -m "Docker committed"
git push
    */


    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    function addTask() {
        if(inputBox.value == '' || inputBox.value == ' ')
        {
            alert("You must write something.");
        }
        else{
            // Create a new list from the input stored in the input-box
            let li = document.createElement("li");
            // Store the value of the to-do in li.innerHTML
            li.innerHTML = inputBox.value;
            // Append the list value in the list container.
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        //Re-initialize the value of the inputBox to empty. 
        inputBox.value = "";
        // Save the data
        saveData();
    }

    listContainer.addEventListener("click",function(e)
    {
        if(e.target.tagName === "LI")
        {
/*
CHECKED. value = green ==> alert (task done)
*/


            e.target.classList.toggle("checked");
            saveData();

            
        }
        else if(e.target.tagName === "SPAN")
        {
            // On clicking span, the list will remove the todo from the list.
            e.target.parentElement.remove();
            saveData();
        }
    });


    // It will store the updated data on the browser, in the form of "data".
    function saveData(){
        // Will assign the value of the lists from list-container to the data.
        localStorage.setItem("data",listContainer.innerHTML);
    }

    function showTask()
    {
        listContainer.innerHTML = localStorage.getItem("data");
    }

    showTask();