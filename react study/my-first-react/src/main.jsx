import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => setData(data));
  },[]);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>
        })
      }
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Home />
);