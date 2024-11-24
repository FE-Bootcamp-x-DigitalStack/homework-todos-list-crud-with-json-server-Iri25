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
                    <input type="checkbox" ${todo.done ? "checked" : ""} id="${
          todo.id
        }"/>
                    <label for="${todo.id}">${todo.title}</label>
                </li>`
      );
    });
  },

  async renderAddTodo(event) {
    event.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),
      title: dom.input.value,
      done: false,
    };

    // Save to the server
    await server.addTodo(newItem);
    dom.input.value = "";
  },

  renderDeleteTodo(todo) {},

  renderUpdateTodo(todo) {},
};
