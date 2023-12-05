export const getUserRole = () => {
  const user = localStorage.getItem("email");

  if (!user) {
    return "not logged in"; // Незалогиненный пользователь
  }

  if (user === "foxy@gmail.com") {
    return "admin"; // Администратор
  }

  return "user"; // Обычный пользователь
};

//admin - тоже является user