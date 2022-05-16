import { React, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ReactComponent as EyeShow } from "../assets/icon-show-preview.svg";
import { ReactComponent as EyeHide } from "../assets/icon-hide-preview.svg";
import { motion } from "framer-motion";
import { useEditor } from "../context/Editor";

function Preview() {
  const { editor, preview, isPreview } = useEditor();

  return (
    <>
      <section className="preview">
        <header className="header lt-spacing-2">
          Preview
          {!preview ? (
            <EyeShow onClick={() => isPreview()}></EyeShow>
          ) : (
            <EyeHide onClick={() => isPreview()}></EyeHide>
          )}
        </header>
        <article className="result texting flow">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{editor}</ReactMarkdown>
        </article>
      </section>
    </>
  );
}

export default Preview;
