import { useContext } from "react";
import "./Checkout.styles.scss";
// contexts
import { CartContext } from "../../contexts/Cart";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <h1>Checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;

// TESTING FIREBASE PURPOSES
// // import React, { useEffect, useRef, useState } from "react";
// import "./Checkout.styles.scss";
// // import { firestore } from "../../firebase";
// // import { addDoc, collection, onSnapshot, query } from "@firebase/firestore";

// const Checkout = () => {

// TESTING FIREBASE PURPOSES
// const [message, setMessage] = useState([]);
// const [loading, setLoading] = useState(true);
// const [newMessage, setNewMessage] = useState("");
// const inputRef = useRef(null);
// const messagesRef = collection(firestore, "messages");
// useEffect(() => {
//   const q = query(messagesRef);
//   const snapshot = onSnapshot(
//     q,
//     (querySnapshot) => {
//       const messages = [];
//       querySnapshot.forEach((msg) => {
//         messages.push({ id: msg.id, ...msg.data() });
//         console.log("msg: ", msg.data().name);
//       });
//       setMessage(messages);
//       setLoading(false);
//     },
//     (error) => {
//       console.error("Error fetching messages: ", error);
//       setLoading(false);
//     }
//   );
//   // Cleanup subscription on unmount
//   return () => snapshot();
// }, []);
// const handleAddMessage = async (e) => {
//   e.preventDefault();
//   if (!newMessage.trim()) return;
//   try {
//     await addDoc(messagesRef, {
//       name: newMessage,
//       createdAt: new Date(),
//     });
//     setNewMessage("");
//     inputRef.current?.focus();
//   } catch (error) {
//     console.error("Error adding document: ", error);
//   }
// };
// if (loading) {
//   return <div>Loading data from Firestore...</div>;
// }
// return (
//   <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//     <h2>Firestore Data</h2>
//     {/* Form to add new item */}
//     <form onSubmit={handleAddMessage} style={{ marginBottom: "20px" }}>
//       <input
//         ref={inputRef}
//         type="text"
//         value={newMessage}
//         onChange={(e) => setNewMessage(e.target.value)}
//         placeholder="Enter new item"
//         style={{ padding: "8px", marginRight: "10px" }}
//       />
//       <button type="submit" style={{ padding: "8px 16px" }}>
//         Add Item
//       </button>
//     </form>
//     {/* Display data */}
//     {message.length === 0 ? (
//       <p>No items found. Add one above!</p>
//     ) : (
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {message.map((msg) => (
//           <li
//             key={msg.id}
//             style={{
//               padding: "10px",
//               margin: "5px 0",
//               backgroundColor: "#f0f0f0",
//               borderRadius: "4px",
//             }}
//           >
//             <strong>{msg.name}</strong>
//             {msg.createdAt && (
//               <span
//                 style={{
//                   marginLeft: "10px",
//                   color: "#666",
//                   fontSize: "0.9em",
//                 }}
//               >
//                 ({new Date(msg.createdAt.seconds * 1000).toLocaleString()})
//               </span>
//             )}
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// );
// };

// export default Checkout;
