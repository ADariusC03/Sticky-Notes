import './App.css';
import Note from './Note/Note';
import React, { Component } from 'react'
import NoteForm from './NoteForm/NoteForm';


class App extends Component{
  constructor(props){
    super(props);

    //Setup the React state of our component
    // { inside the curly brackets is where we map the notes array }
    this.state ={
      note: [
        {id: 1, noteContent: "Note 1 here!" },
        {id: 2, noteContent: "Note 2 here!" },
      ],

    }
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
         <NoteForm />
        </div>
      </div>
    );
  }


}

export default App;
