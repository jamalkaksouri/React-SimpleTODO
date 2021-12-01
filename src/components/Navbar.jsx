const Navbar = ({ unCompletedTodos, completedTodos }) => {
  return (
    <header className="navbarData">
      {unCompletedTodos ? (
        <>
          <div className="wrapperNav">
            <h2 className="titleTodo">Not completed todos</h2>
            <span>{unCompletedTodos}</span>
            <h2 className="titleTodo">Completed todos</h2>
            <span>{completedTodos}</span>
          </div>
          <img className="logoImg" src="todoLogo.png" alt="TODO LOGO" />
        </>
      ) : (
        <div className="logoTitle">
          <h2 className="titleTodo">Set your today todos</h2>
          <img className="logoImg" src="todoLogo.png" alt="TODO LOGO" />
        </div>
      )}
    </header>
  );
};

export default Navbar;
