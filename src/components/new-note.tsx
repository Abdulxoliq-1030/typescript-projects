import React from "react";
import NoteForm from "./note-form";

interface NewNoteProps {}

const NewNote: React.FC<NewNoteProps> = () => {
  return (
    <>
      <h1 className="mb-4">NewNote Component</h1>
      <NoteForm />
    </>
  );
};

export default NewNote;
