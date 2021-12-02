const Navbar = ({ All, Active, completed }) => {
  return (
    <header className="navbarData">
      {Active ? (
        <>
          <div className="wrapperNav">
            <span>
              All <h4 className="sortStyle">{All}</h4>
            </span>
            <span>
              Active <h4 className="sortStyle">{Active}</h4>
            </span>
            <span>
              Completed <h4 className="sortStyle">{completed}</h4>
            </span>
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
