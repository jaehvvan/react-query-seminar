import DB from '../server/DB.json';

export const getUserInfo = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userInfo = DB.userTable.find((user) => user.id === userId);
      resolve(userInfo);
    }, 2000);
  });
};

export const getTodos = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = DB.todoTable.filter((todo) => todo.userId === userId);
      resolve(todos);
    }, 2000);
  });
};

export const likeTodo = (todoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newTodoTable = DB.todoTable.map((todo) =>
        todo.id === todoId ? { ...todo, likeCount: todo.likeCount + 1 } : todo,
      );
      DB.todoTable = newTodoTable;
      resolve();
    }, 2000);
  });
};
