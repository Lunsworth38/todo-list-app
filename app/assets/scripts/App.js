var todoList = {
  todos: [],
  
  displayTodos: function() {
    if (this.todos.length === 0) {
	    console.log("Your todo list is empty!");
	 } else {
	    console.log("My todos:");
	    for(var i=0; i< this.todos.length; i++) {
	      if(this.todos[i].completed === true) {
	         var check ="(x)";
	      } else {
	         var check ="( )";
	      };
	     console.log(check, this.todos[i].todoText);
	    };
	  };
  },
  
	//add todo
	addTodo: function(todoText) {
		this.todos.push({
		  todoText: todoText,
		  completed: false
		});
		this.displayTodos(); 
	},
	
  //delete Todo
	deleteTodo: function(position) {
		this.todos.splice(position,1);
		this.displayTodos();
	},
	
  //change a Todo
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	
	toggleCompleted: function(position) {
	  var todo = this.todos[position];
	  todo.completed = !todo.completed;
	  this.displayTodos();
	},

	printObject: function(){
		console.log(this);
	}

};
