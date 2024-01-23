import Modal from "./comronents/Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const cancel = () => setShowModal(false);
  return (
    <div className={"container-fluid mt-5 d-flex "} style={{width: 1000, height: 700}}>
      <div className={"w-75 d-flex align-items-center"}>
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
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          Show modal window
        </button>
      </div>
      <div className={"w-100 h-100 rounded-2 border border-info overflow-auto"}>

      </div>
    </div>
  );
}

export default App;
