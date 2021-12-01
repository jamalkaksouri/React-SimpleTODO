const Navbar = ({ unCompletedTodos }) => {
  return (
    <header>
      {unCompletedTodos ? (
        <>
          <span>{unCompletedTodos}</span>
          <h2 className="titleTodo">are not completed</h2>
        </>
      ) : (
        <h2 className="titleTodo">set your today todos</h2>
      )}
    </header>
  );
};

export default Navbar;
