// import './Portcolio.css';
import { useState } from "react";

function Contact() {
    // if we need logic to determine what to render, we put it here
    //   [variable that holds state, function that updates state] = useState(initial value) 
  const [contact, setContact] = useState({ name: "", email: "", message: ""});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        // prevent page from refreshing
        e.preventDefault();

        console.log("Submitted");

        // IF we sent it to a server, we would do that here
        // fetch(Server Route, { method: "POST", body: contact });
     };

  return (
    <div className="contact">
        <h1>Contact Me:</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />     
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />    
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })} /> 
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default Contact;