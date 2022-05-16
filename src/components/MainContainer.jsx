import React from "react";
import Editor from "./Editor";
import NavBar from "./NavBar";
import Preview from "./Preview";
import Splitter from "./Splitter";
import { useEditor } from "../context/Editor";

function MainContainer() {
  const { open } = useEditor();
  return (
    <div
      className="main-container"
      style={{ marginLeft: open &&  "var(--sidebar-width)" }}
    >
      <NavBar />
      <main className="editor-container flex">
        <Editor />
        <Splitter />
        <Preview />
      </main>
    </div>
  );
}

export default MainContainer;
