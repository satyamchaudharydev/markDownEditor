import React from "react";
import { useEditor } from "../context/Editor";
export default function Editor() {
  const { editor, setEditor, drag, preview } = useEditor();
  return (
    <>
      <section
        
        className={`editor ${preview && "none"}`}
        style={{ flexBasis: drag }}
      >
        <header className="header lt-spacing-2">MarkDown</header>
        <textarea
          className="texting"
          name="editor"
          value={editor}
          onChange={(e) => setEditor(e.target.value)}
        ></textarea>
      </section>
    </>
  );
}
