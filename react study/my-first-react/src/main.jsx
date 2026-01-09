import { useState } from "react";
import { createRoot } from "react-dom/client";
import Modal from "./Modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
        <h1>React Portal Example</h1>
        <button onClick={ () => setOpen(true) }>Open Modal</button>

        { open && (
          <Modal>
            <h2>안녕하세요!</h2>
            <button onClick={ () => setOpen(false) }>닫기</button>
          </Modal>
        )
      }
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);