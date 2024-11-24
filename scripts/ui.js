const dom = {
  todosList: document.querySelector("#todos-list"),
  form: document.querySelector("#form-new-item"),
  input: document.querySelector("[data-new-item]"),
};

const ui = {
  renderTodos(todos) {
    todos.forEach((todo) => {
      dom.todosList.insertAdjacentHTML(
        "beforeend",
        `<li>
          <input type="checkbox" ${todo.done ? "checked" : ""} id="${todo.id}"/>
          <label for="${todo.id}">${todo.title}</label>
        </li>`
      );
    });
  },

  renderTodo(todo) {
    dom.todosList.insertAdjacentHTML(
      "beforeend",
      `<li>
        <input type="checkbox" ${todo.done ? "checked" : ""} id="${todo.id}"/>
        <label for="${todo.id}">${todo.title}</label>
       </li>`
    );
  },

  async renderAddTodo(event) {
    event.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: dom.input.value,
      done: false,
    };

    // Save todo to server
    const saveTodo = await server.addTodo(newTodo);

    if (saveTodo) {
      // Clear input field
      dom.input.value = "";

      // Update todo to UI
      ui.renderTodo(saveTodo);
    }
  },

  renderDeleteTodo(todo) {},

  renderUpdateTodo(todo) {},
};

dom.form.addEventListener("submit", ui.renderAddTodo);
