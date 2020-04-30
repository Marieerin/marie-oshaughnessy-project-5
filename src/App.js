import React, { Component } from 'react';
import firebase from './firebase';
import Postit from './Post-it';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [],
      userInput: "",
      charLeft: 527,
    }
  }

componentDidMount(){
  // save firebase database in a variable
  const dbRef = firebase.database().ref();
  dbRef.on('value', (result) => {
    const note = result.val();
    const newNote = [];
    for (let page in note){
      // pushes the text and id of new notes into newNote array
      newNote.push({noteText: note[page], noteId: page})
    }
    // updates notes on page
    this.setState({
      notes: newNote
    })
  })
}

handleSubmit = (event) => {
  // prevent default behavior of submit button
  event.preventDefault();
  // if there is anything in userInput 
  // if user input is !== not equal to and or not the same type as an empty string
  if (this.state.userInput !== ""){
    const dbRef = firebase.database().ref();
    // this submits new notes to the firebase database
    dbRef.push(this.state.userInput);
    this.setState({
      userInput:'',
    })
  }
    // add to the database
}
// handleCharCount = (event) => {
//   const charCount = event.target.value.length;
//   console.log(charCount)
// }
handleUserInput = (event) => {
  const charCount = event.target.value.length;
  const newCharLeft = 527 - charCount;
  console.log(newCharLeft);

  // grab what the user is typing
  console.log(event);
  this.setState({
    userInput: event.target.value,
    charLeft: newCharLeft
  })
}
render () {
  return (
    <div className="App">
      <header>
        <h1>POST IT!!!</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="texInput">Write notes about what ever you want! Keep track of thoughts! Get inspired! Have some quotes? Postem here!</label>
          <textarea value={this.state.userInput} onChange={this.handleUserInput} placeholder="Write notes about what ever you want! Keep track of thoughts! Get inspired! Have some quotes? Postem here!" name="textInput" maxLength="527" />
          <span className="charCount">{this.state.charLeft}/ 527</span>
          <input type="submit" value="Post!" className="submit"/>
        </form>
      </header>
      <main>
        <ul>
          {this.state.notes.map((note) => {
            // console.log(note.noteId);
            return(
                  // pass info to Post-it notes
              <Postit noteId={note.noteId} noteText={note.noteText} />
            )
          })}
        </ul>
      </main>
    </div>
    );
  }
}

export default App;

//text input
    // placeholder text in input textbox explaining how to use app
    //empty text from note
    // submit button adds text to page 
    // STRETCH GOAL different size of post it to chose from
    // STRETCH GOAL pick different color of post it

// takes text and stores it in firebase database
    // save key in a variable
    // save text in a variable
        // save these in state
    // saving post its in objects
    // push objects into an array
    // setState array in constructor

// display text
    // arguments pass key and text of post it
    // STRETCH GOAL pass color/size
    // display post it


// on post it << component
    // delete post it with little X in corner
    // displays content of note 
        // content is limited to a number of characters (approx 590)
    // STRETCH GOAL allow to drag and move post it
    // STRETCH GOAL an edit pen in the corner allowing you to edit notes 
