import React from 'react';
import './Post-it.css';
import firebase from 'firebase'
// catches notes in props
const Postit = (props) => {
    const deleteNote = () => {
        //   delete note is called 
        //  goes in database 
        // finds clicked note and deletes it
        const itemRef = firebase.database().ref(props.noteId)
        itemRef.remove()
    }

    return(
        <li className={`${props.color} ${props.fontSize}`}>
            {/* listens for a click and calls deleteNote */}
            <span onClick={() => { deleteNote() }} className="delete" title="delete note">x</span>
            {/* grab info from notes array(App.js) and places it in a postit */}
            <p className="post-it--text" key={props.noteId}>{props.noteText}</p>
        </li>
    )
}

export default Postit;