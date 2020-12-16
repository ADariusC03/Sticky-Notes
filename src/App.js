import './App.css';
import Note from './Note/Note';
import React, { Component } from 'react'
import NoteForm from './NoteForm/NoteForm';


class App extends Component{
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);

    //Setup the React state of our component
    // { inside the curly brackets is where we map the notes array }
    this.state = {
      note: [
        {id: 1, noteContent: "Note 1 here!" },
        {id: 2, noteContent: "Note 2 here!" },
      ],

    }

  }

  addNote(note){
    // updates the current state of our notes
    // push the notes onto the notes array.
    const previousNotes = this.state.note;
    previousNotes.push({ id: previousNotes.length + 1, noteContent: note });

    this.setState({
      notes: previousNotes
    })
  }

  render(){
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">Sticky Notes</div>
        </div>
        <div className="notesBody">
          {
            this.state.note.map((note) => {
              return (
                <Note noteContent={note.noteContent} noteId={note.noteId} key={note.Id} />
              )
            })
          }
        </div>
        <div className="notesFooter">
          {/* Notes input and add button feature */}
         <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }


}

export default App;
