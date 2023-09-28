import React, { useState, useEffect } from 'react';
import './Notes.css';

const Note = () => {
  const [note, setNote] = useState('');
  const [notesList, setNotesList] = useState([]);

  useEffect(() => {
    
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotesList(savedNotes);
  }, []);

  const handleNoteChange = (event) => {
    setNote(event.target.value);

    
    localStorage.setItem('notes', JSON.stringify([...notesList, event.target.value]));
  };

  return (
    <div>
      <textarea
        value={note}
        onChange={handleNoteChange}
        placeholder="All notes"
        className="note-textarea"
      />

      
    </div>
  );
};

export default Note;


