import React, { ChangeEvent } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };
  return (
    <>
      <h1 className="text-5xl font-medium leading-tight">Add new note</h1>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="name"
        placeholder="Note"
      />
      <button onClick={onAddNoteClick}>Add Note</button>
    </>
  );
};

export default NewNoteInput;
