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
        color: "yellow",
        fontSize: "small",
        charLimit: 432,
      },
      charLeft: 432,
      numTyped: 0,
    }
    
  }

componentDidMount(){
  // save firebase database in a variable
  const dbRef = firebase.database().ref();
  dbRef.on('value', (result) => {
    const note = result.val();
    const newNotes = [];
    for (let page in note){
      console.log(note[page].fontSize)
      console.log(typeof note[page].fontSize)

      // pushes the text and id of new notes into newNotes array
      newNotes.push({noteText: note[page].text, noteId: page, color: note[page].color, fontSize: note[page].fontSize, count: note[page].charLimit}) 
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
      alert("YOU DIDN'T WRITE ANYTHING! WRITE SOMETHING!")
  } else {
    const dbRef = firebase.database().ref();
    // this submits new notes to the firebase database
    dbRef.push(this.state.userInput);
    this.setState({
      userInput: {
        text: "",
        color: this.state.userInput.color,
        fontSize: this.state.userInput.fontSize,
        charLimit: this.state.userInput.charLimit,
      },
      charLeft: this.state.userInput.charLimit,
      numTyped: this.state.numTyped
    });
  }
}

handleUserInput = (event) => {
  //the length of characters that have been typed
  const charCount = event.target.value.length;
  // take the character limit that has been selected by the font size the user selects and subtract from how much has been typed in the textbox
  const newCharLeft = this.state.userInput.charLimit - charCount;
  // save what what the user is typing
  this.setState({
    userInput: {
      text: event.target.value,
      color: this.state.userInput.color,
      fontSize: this.state.userInput.fontSize,
      charLimit: this.state.userInput.charLimit,
    },
    charLeft: newCharLeft,
    numTyped: charCount
  })
}

getColorChoice = (colorName) => {
  this.setState({
    userInput: {
      color: colorName,
      text: this.state.userInput.text,
      fontSize: this.state.userInput.fontSize,
      charLimit: this.state.userInput.charLimit,
    },
    charLeft: this.state.charLeft,
    numTyped: this.state.numTyped
  })
}

getFontSize = (fontSize) => {
  // // passes on the number of characters total for each size of text
  if(fontSize === "small"){
    // sets font size
    this.setState({
      userInput: {
        color: this.state.userInput.color,
        text: this.state.userInput.text,
        fontSize: fontSize,
        charLimit: 432,
      },
      charLeft: 432 - this.state.numTyped,
      numTyped: this.state.numTyped
    })
  } else if (fontSize === "med"){
    // sets font size
    this.setState({
      userInput: {
        color: this.state.userInput.color,
        text: this.state.userInput.text,
        fontSize: fontSize,
        charLimit: 198,
      },
      charLeft: 198 - this.state.numTyped,
      numTyped: this.state.numTyped
    })
  } else if (fontSize === "lrg"){
    // sets font size
    this.setState({
      userInput: {
        color: this.state.userInput.color,
        text: this.state.userInput.text,
        fontSize: fontSize,
        charLimit: 104,
      },
      charLeft: 104 - this.state.numTyped,
      numTyped: this.state.numTyped
    })
  } else if (fontSize === 'xlrg'){
    // sets font size
    this.setState({
      userInput: {
        color: this.state.userInput.color,
        text: this.state.userInput.text,
        fontSize: fontSize,
        charLimit: 77,
      },
      charLeft: 77 - this.state.numTyped,
      numTyped: this.state.numTyped
    })
  } else {
    // sets font size
    this.setState({
      userInput: {
        color: this.state.userInput.color,
        text: this.state.userInput.text,
        fontSize: fontSize,
        charLimit: 432,
      },
      charLeft: 432 - this.state.numTyped,
      numTyped: this.state.numTyped
    })
  }
}
render () {
  return (
    <div className="App wrapper">
      <header>
        <ul className="app-controls">
          {/* below is the format for blank list items used to balance out the header when there is an odd of features. A list item with the class of .blank-for-now is added at the opposite end for the header, resulting in the textarea being center front of the page. */}
          {/* <li className="blank-for-now"></li> */}

          {/* displays font size widget. */}
          < Fontsize getFontSize={this.getFontSize}  />

          {/* the note taking section including a textarea to take notes and a character counter that shows how many more characters you can add. */}
          <li className="main-header-list-item">
            <h1>POST IT!!!</h1>
            <form action="" onSubmit={this.handleSubmit}>
              <label htmlFor="textInput">
                Write notes about what ever you want! Keep track of thoughts!
                Get inspired! Have some quotes? Pick a color! Pick a font size! Postem here!
              </label>
              <textarea
                value={this.state.userInput.text}
                onChange={this.handleUserInput}
                placeholder="Write notes about what ever you want! Keep track of thoughts! Get inspired! Have some quotes? Pick a color! Pick a font size! Postem here!"
                name="textInput"
                maxLength={this.state.userInput.charLimit}
              />
              <span className="charCount" >{this.state.charLeft}/ {this.state.userInput.charLimit}</span>
              <input type="submit" value="Post!" className="submit" title="post your note" />
            </form>
          </li>

          {/* displays color selection for the notes */}
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
                fontSize={note.fontSize}
              />
            );
          }).reverse()}
        </ul>
      </main>
      <footer>
        <span>Designed and created by Marie O'Shaughnessy</span>
      </footer>
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
