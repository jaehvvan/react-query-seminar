import DB from '../server/DB.json';

export const getAllTodos = () => {
  return new Promise((resolve) => {
    console.log('모든 할 일 받아오는 중...');

    setTimeout(() => {
      console.log('모든 할 일 받아오기 완료!');
      resolve(DB.todoTable);
    }, 2000);
  });
};

export const getUserTodos = (userId) => {
  return new Promise((resolve) => {
    console.log('유저 할 일 받아오는 중...');

    setTimeout(() => {
      const todos = DB.todoTable.filter((todo) => todo.userId === userId);
      console.log('유저 할 일 받아오기 완료!');
      resolve(todos);
    }, 2000);
  });
};

export const postAddTodo = (todo) => {
  return new Promise((resolve) => {
    console.log('내 할 일 추가 중...');

    setTimeout(() => {
      const newTodoTable = DB.todoTable.concat(todo);
      DB.todoTable = newTodoTable;
      console.log('내 할 일 추가 완료!');
      resolve();
    }, 2000);
  });
};
