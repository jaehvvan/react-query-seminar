import DB from '../server/DB.json';

export const getUserInfo = (userId) => {
  return new Promise((resolve) => {
    console.log('유저 정보 받아오는 중...');

    setTimeout(() => {
      const userInfo = DB.userTable.find((user) => user.id === userId);
      console.log('유저 정보 받아오기 완료!');
      resolve(userInfo);
    }, 2000);
  });
};

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

export const postLikeTodo = (todoId) => {
  return new Promise((resolve) => {
    console.log('좋아요 반영 중...');

    setTimeout(() => {
      const newTodoTable = DB.todoTable.map((todo) =>
        todo.id === todoId ? { ...todo, likeCount: todo.likeCount + 1 } : todo,
      );
      DB.todoTable = newTodoTable;
      console.log('좋아요 반영 완료!');
      resolve();
    }, 2000);
  });
};
