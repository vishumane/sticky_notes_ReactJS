import React, { useState } from "react";
import './notepad.css';

const Notepad = () => {
    const [notesText, setNotesText] = useState('');
    const [noteList, setNoteList] = useState([]);

    const onSaveNotes = () => {
        const notes = document.getElementById("notes-value").value;
        const obj = { notes };
        setNotesText("");
        setNoteList(noteList.concat(obj))

        console.log("noteList", noteList);
    };

    const onChangeValue = () => {
        const notes = document.getElementById("notes-value").value;
        setNotesText(notes);
    };

    const onDeleteNote = (index) => {
        const deleteNotes = noteList.filter(indx => indx === index);
        setNoteList(deleteNotes);
    };


    return (
        <div className="Note-pad">
            <div className="some-test">
                <div>
                    <textarea
                        rows="5"
                        cols="35"
                        placeholder="Enter Notes here"
                        id="notes-value"
                        value={notesText}
                        onChange={onChangeValue}
                    />
                    <button className="save-button" onClick={onSaveNotes}>
                        Save
            </button>
                </div>
            </div>
            <div className="display-notes" id="display">
                {noteList.length > 0
                    ? noteList.map((item, index) => (
                        <div key={index} className={`notes-item ${index}`}>
                            <div className="note-head">
                                <h3>Note {index}</h3>

                                <button
                                    className="delete-note"
                                    onClick={() => onDeleteNote(index)}
                                >
                                    X
                    </button>
                            </div>
                            {item.notes}
                        </div>
                    ))
                    : ""}
            </div>
        </div>
    );

}

export default Notepad;
