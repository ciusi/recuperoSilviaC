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
  
  //ESERCIZIO 2
  
  function createTaskElement(task) {
    // Crearo un nuovo elemento HTML di tipo 'div'
    const taskElement = document.createElement("div");
  
    // Verifico se la task è completata
    if (!task.completed) {
      // Imposto il testo dell'elemento HTML con la descrizione della task
      taskElement.textContent = task.todo;
  
      // Aggiungo la classe CSS per lo sfondo rosso
      taskElement.style.backgroundColor = "red";
  
      // Aggiungo l'elemento al container
      const taskContainer = document.getElementById("task-container");
      taskContainer.appendChild(taskElement);
    }
  }
  
  // Iteraro sulle task e chiamaro la funzione createTaskElement solo per le task non completate
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    createTaskElement(task);
  }
