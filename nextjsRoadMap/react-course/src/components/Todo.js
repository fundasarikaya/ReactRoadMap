import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState();

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  // Props are important for building reusable components. state is important for changing what we see on the screen dynamically
  //for adding or removing elements for changing text on the screen or like in this case for showing and hiding an overlay
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          DELETE
        </button>
      </div>
      {/* {modalIsOpen ? <Modal/> : null}  */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
