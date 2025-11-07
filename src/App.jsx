import { useRef } from "react";
import { firestore } from "./firebase";
import { addDoc, collection } from "@firebase/firestore";
import "./App.css";

function App() {
  const messageRef = useRef();
  const ref = collection(firestore, "messages");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    };

    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSave}>
          <label>Enter message</label>
          <input type="text" ref={messageRef} />
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}

export default App;
