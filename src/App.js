import React, { Component } from 'react';
import firebase from './firebase';
import Fontsize from './Font-size.js'
import Colorselect from './Color-select.js'
import Postit from './Post-it';

import './setup.css'
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [],
      userInput: {
        text: "",
        color: "",
        fontSize: "",
      },
      charLeft: 432,
    }
  }

componentDidMount(){
  // save firebase database in a variable
  const dbRef = firebase.database().ref();
  dbRef.on('value', (result) => {
    const note = result.val();
    const newNotes = [];
    for (let page in note){
      // pushes the text and id of new notes into newNotes array
      newNotes.push({noteText: note[page].text, noteId: page, color: note[page].color}) 
    }
    // updates notes on page
    this.setState({
      notes: newNotes
    })
  })
}
handleSubmit = (event) => {
  // prevent default behavior of submit button
  event.preventDefault();
  // if there is anything in userInput 
  if (this.state.userInput.text === "") { 
      alert('YOU DIDNT WRITE ANYTHING! WRITE SOMETHING!')
  } else {
    const dbRef = firebase.database().ref();
    // this submits new notes to the firebase database
    dbRef.push(this.state.userInput);
    this.setState({
      userInput: {
        text: "",
        color: this.state.userInput.color
      },
      charLeft: 432
    });
  }
}

handleUserInput = (event) => {
  //calculate the number of characters left
  const charCount = event.target.value.length;
  const newCharLeft = 432 - charCount;
  // grab what the user is typing
  this.setState({
    userInput: {
      text: event.target.value,
      color: this.state.userInput.color
    },
    charLeft: newCharLeft
  })
}

getColorChoice = (colorName) => {
  this.setState({
    userInput: {
      color: colorName,
      text: this.state.userInput.text
    },
  })

}
render () {
  return (
    <div className="App wrapper">
      <header>
        <ul className="app-controls">
          <li className="blank-for-now"></li>
          < Fontsize />
          <li className="main-header-list-item">
            <h1>POST IT!!!</h1>
            <form action="" onSubmit={this.handleSubmit}>
              <label htmlFor="textInput">
                Write notes about what ever you want! Keep track of thoughts!
                Get inspired! Have some quotes? Postem here!
              </label>
              <textarea
                value={this.state.userInput.text}
                onChange={this.handleUserInput}
                placeholder="Write notes about what ever you want! Keep track of thoughts! Get inspired! Have some quotes? Postem here!"
                name="textInput"
                maxLength="432"
              />
              <span className="charCount">{this.state.charLeft}/ 432</span>
              <input type="submit" value="Post!" className="submit" />
            </form>
          </li>
          <Colorselect getColorChoice={this.getColorChoice} />

        </ul>
      </header>
      <main>
        <ul className="post-it-notes">
          {this.state.notes.map((note) => {
            return (
              // pass info to Post-it notes
              <Postit
                noteId={note.noteId}
                noteText={note.noteText}
                color={note.color}
              />
            );
          }).reverse()}
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
