import './App.css';
import Note from './Note/Note';
import React, { Component } from 'react'
import NoteForm from './NoteForm/NoteForm';
import { DB_CONFIG } from './Config/Config';
import firebase from 'firebase/app';
import 'firebase/database';




class App extends Component{
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('note');

    //Setup the React state of our component
    // { inside the curly brackets is where we map the notes array }
    this.state = {
      note: [],
    }

  }

  componentWillMount(){
    const previousNotes = this.state.note;

    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })

      this.setState({
        notes: previousNotes
      })
    })

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      })
    })
  }

  addNote(note){
    this.database.push().set({ noteContent: note});
  }

  removeNote(noteId){
    console.log("from the parent: " + noteId);
    this.database.child(noteId).remove();
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
