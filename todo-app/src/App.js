import "./assets/font-awsome/fontawesome-free-5.12.1-web/css/all.css"

function App() {
  return (
    <div className="container">
      <div className="title">MY REACT REDUX TODO APP</div>
      <div className="todo-div">
        <div className="checkbox">
          <i className="fas fa-check"></i>
        </div>
        <div className="imput-field">
          <input type="text" />
        </div>
        <div className="xbutton">
          {/* <i className="fas fa-times"></i> */}
          OK
        </div>
      </div>
      <div className="add-todo-button">
        <button>ADD TODO</button>
      </div>
      <div className="buttons">
        <button>CLEAR LIST</button>
        <button>COMPLETE LIST</button>
      </div>
    </div>
  );
}

export default App;
