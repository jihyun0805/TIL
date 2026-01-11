import { createRoot } from "react-dom/client";
import { useRef } from "react";

function App() {
  const a = useRef();

  const focusInput = () => {
    a.current.focus();
  }

  return (
    <>
      <input type="text" ref={a} />
      <button onClick={focusInput}>Input box에 주기</button>
    </>
  )
}


createRoot(document.getElementById('root')).render(
  <App />
);