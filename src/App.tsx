import Modal from "./comronents/Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import CustomAlert from "./comronents/Alert/CustomAlert";
import {forAlert} from "./type";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [customAlert, setCustomAlert] = useState<forAlert[]>([
    {id: "1", type: "primary", children: "CustomAlert from array!"},
    {id: "2", type: "primary", children: "CustomAlert from array two!",}
  ])

  const addNewAlert = () => {
    setCustomAlert((prevState) => {
      const id = Math.random().toString()
      const newAlert: forAlert = {
        id: id,
        type: "primary",
        children: `New alert ${prevState.length + 1}`,
        onDismiss: () => onDismiss(id),

      };

      return [...prevState, newAlert];
    });
  };

  const onDismiss = (id: string) => {
    setCustomAlert((prevState) => {
      return prevState.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      });
    });
  }

  const cancel = () => setShowModal(false);
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
          onClick={addNewAlert}
        >
          Add new alert
        </button>
      </div>
      <div className={"w-100 h-100 p-3 rounded-2 border border-info overflow-auto"}>
        {customAlert.map((item) => {
          return <CustomAlert
            key={item.id}
            customAlert={item}
            onDismiss={() => onDismiss(item.id)}
          />
        })}
      </div>
    </div>
  );
}

export default App;
