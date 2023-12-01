const tasks = [
    {
      todo: "Do something nice for someone I care about",
      completed: true,
    },
    {
      todo: "Memorize the fifty states and their capitals",
      completed: false,
    },
    {
      todo: "Watch a classic movie",
      completed: false,
    },
    {
      todo: "Contribute code or a monetary donation to an open-source software project",
      completed: false,
    },
    {
      todo: "Solve a Rubik's cube",
      completed: false,
    },
    {
      todo: "Bake pastries for me and neighbor",
      completed: false,
    },
    {
      todo: "Go see a Broadway production",
      completed: false,
    },
    {
      todo: "Write a thank you letter to an influential person in my life",
      completed: true,
    },
    {
      todo: "Invite some friends over for a game night",
      completed: false,
    },
    {
      todo: "Have a football scrimmage with some friends",
      completed: false,
    },
    {
      todo: "Text a friend I haven't talked to in a long time",
      completed: false,
    },
    {
      todo: "Organize pantry",
      completed: true,
    },
    {
      todo: "Buy a new house decoration",
      completed: false,
    },
    {
      todo: "Plan a vacation I've always wanted to take",
      completed: false,
    },
    {
      todo: "Clean out car",
      completed: false,
    },
    {
      todo: "Draw and color a Mandala",
      completed: true,
    },
    {
      todo: "Create a cookbook with favorite recipes",
      completed: false,
    },
    {
      todo: "Bake a pie with some friends",
      completed: false,
    },
    {
      todo: "Create a compost pile",
      completed: true,
    },
    {
      todo: "Take a hike at a local park",
      completed: true,
    },
    {
      todo: "Take a class at local community center that interests you",
      completed: false,
    },
    {
      todo: "Research a topic interested in",
      completed: false,
    },
    {
      todo: "Plan a trip to another country",
      completed: true,
    },
    {
      todo: "Improve touch typing",
      completed: false,
    },
    {
      todo: "Learn Express.js",
      completed: false,
    },
    {
      todo: "Learn calligraphy",
      completed: false,
    },
    {
      todo: "Have a photo session with some friends",
      completed: false,
    },
    {
      todo: "Go to the gym",
      completed: false,
    },
    {
      todo: "Make own LEGO creation",
      completed: false,
    },
    {
      todo: "Take cat on a walk",
      completed: false,
    },
  ];
  

// Funzione per creare un elemento task
function createTaskElement(task) {
    const taskElement = document.createElement("div");
    taskElement.textContent = task.todo;
  
    // Imposto lo sfondo in base allo stato di completamento
    taskElement.style.backgroundColor = task.completed ? "green" : "red";
  
    return taskElement;
  }
  
  // Funzione per aggiornare la visualizzazione delle task in base alla ricerca
  function updateTaskList(filter) {
    const taskContainer = document.getElementById("task-container");
    taskContainer.innerHTML = ""; // Pulisce il container prima di aggiungere gli elementi filtrati
  
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
  
      // Filtro in base alla ricerca e allo stato di completamento
      if (!task.completed && task.todo.toLowerCase().includes(filter.toLowerCase())) {
        const taskElement = createTaskElement(task);
        taskContainer.appendChild(taskElement);
      }
    }
  }
  
  // Gestisco l'evento di input sull'elemento di filtro
  const filterInput = document.getElementById("filter-input");
  filterInput.addEventListener("input", function () {
    updateTaskList(filterInput.value);
  });
  
  //  visualizzazione delle task non completate
  updateTaskList("");
  
  