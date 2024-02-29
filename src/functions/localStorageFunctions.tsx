const key = "todos";

export const setLocalStorage = (todoArr: Todo[]) => {
  localStorage.setItem(key, JSON.stringify(todoArr));
};

export const getLocalStorage: () => Todo[] = () => {
  let tempObj = localStorage.getItem(key);

  let todoArr: Todo[] = [];
  if (tempObj) {
    todoArr = JSON.parse(tempObj);
    console.log(todoArr);
  }
  return todoArr;
};
