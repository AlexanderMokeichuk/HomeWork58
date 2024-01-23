import Modal from "./comronents/Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import CustomAlert from "./comronents/Alert/CustomAlert";
import {forAlert} from "./type";

const defaultInputState = {
  id: "",
  type: "",
  children: "",
  isActive: false,
  onDismiss: undefined,
};
function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [customAlert, setCustomAlert] = useState<forAlert[]>([]);

  const [inputState, setInputState] = useState<forAlert>(defaultInputState);

  const cancel = () => setShowModal(false);
  const cancel2 = () => setShowModal2(false);

  const addNewAlert = () => {
    setCustomAlert((prevState) => {
      const id = Math.random().toString();
      const newAlert: forAlert = {
        id: id,
        type: inputState.type,
        children: inputState.children,
        isActive: inputState.isActive,
        onDismiss: () => onDismiss(id),

      };

      return [...prevState, newAlert];
    });
    setInputState(defaultInputState);
  };

  const changeInputState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const changeIsActive = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNewAlert();
    cancel2();
  };

  const onDismiss = (id: string) => {
    setCustomAlert((prevState) => {
      return prevState.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      });
    });
  };


  return (
    <div className={"container-fluid mt-5 d-flex "} style={{width: 1000, height: 700}}>
      <div className={"w-75 d-flex align-items-center gap-1"}>
        <Modal
          show={showModal}
          title="Modal"
          onClose={cancel}
        >
          <div className="modal-body">
            Content
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-danger"
              onClick={cancel}
            >
              Cancel
            </button>
          </div>
        </Modal>

        <Modal
          show={showModal2}
          title="Specify alert styles"
          onClose={cancel2}
        >
          <div className="modal-body">
            <form onSubmit={onFormSubmit} className={"d-flex flex-column gap-1"}>
              <div className={"form-group"}>
                <label htmlFor={"type"}>Color</label>
                <input
                  type={"text"}
                  name={"type"}
                  id={"type"}
                  className={"form-control"}

                  value={inputState.type}
                  onChange={changeInputState}
                />
              </div>
              <div className={"form-group"}>
                <label htmlFor={"children"}>Message</label>
                <input
                  type={"text"}
                  name={"children"}
                  id={"children"}
                  className={"form-control"}

                  value={inputState.children}
                  onChange={changeInputState}
                />
              </div>

              <div className={"form-group"}>
                <label htmlFor={"isActive"}>Add an delete button?</label>
                <input
                  type={"checkbox"}
                  name={"isActive"}
                  id={"isActive"}
                  className={"form-check-input ms-1"}

                  checked={inputState.isActive}
                  onChange={changeIsActive}
                />
              </div>

              <button
                type={"submit"}
                className="btn btn-danger mt-2"
              >
                add
              </button>
            </form>
          </div>
        </Modal>

        <button
          type={"button"}
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          Show modal window
        </button>
        <button
          type={"button"}
          className={"btn btn-primary"}
          onClick={() => setShowModal2(true)}
        >
          Add new alert
        </button>
      </div>
      <div className={"w-100 h-100 p-3 rounded-2 border border-info overflow-auto"}>
        {customAlert.map((item) => {
          return <CustomAlert
            key={item.id}
            alert={item}
          />;
        })}
      </div>
    </div>
  );
}

export default App;
