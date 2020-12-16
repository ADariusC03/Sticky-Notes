import React, { Component } from 'react';
import './NoteForm.css';


// When the new NoteForm is create the newNoteContent compe
// value => is the this.state componenet fucntion, using a empty string
// onChange => handles users input
// when a user starts typing, have to state the function of the component
// this.setState is => newNoteContent so rather it being an empty string it corresponds with the user typing
// e==event ; using e.target.value => the value of the text input


class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newNoteContent : '',
        };
        // Make sure to always bind handler to component/constructor
        // expliticly bind handleUserInput 
        this.handleUserInput = this.handleUserInput.bind(this);

        this.makeNote = this.makeNote.bind(this);
    }

    // When the user input changes, set the newNoteContent to the value of whats
    // in the input box
    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value, // the value of the text input
        })
    }

    makeNote(){
        // call a method that set the noteContent for a note to the value of the input
        // method that adds a note to the note's arrary is inside App.js(component)
        // Can call that method that we write in the App.js
        this.props.addNote(this.state.newNoteContent);
        

        // Set newNoteContent back to an empty string after being added.
        this.setState({
            newNoteContent: '',
        })
    }

    render(){
        return(
        <div className="formWrapper">
            <input className="noteInput" 
            type="text" placeholder="Write a new note..." 
            value={this.state.newNoteContent} 
            onChange={this.handleUserInput} />
            <button className="noteButton" onClick={this.makeNote}>Add Note</button>
        </div>

        )
    }
}

export default NoteForm;