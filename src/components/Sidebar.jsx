import {React,useState} from "react";
import data from "../data";
import { ReactComponent as Doc } from "../assets/icon-doc.svg";

import { useEditor } from "../context/Editor";
function Sidebar() {
  const { open } = useEditor();

  return (
    <aside
      className={`sidebar flow ${open && "open"}`}
    >
      <p className="siderbar-heading">My Document</p>
      <div className="new-doc primary-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          width="1.1em"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <p>New Document</p>
      </div>
      <div className="doc-list flow">
        {data.map((doc) => (
          <div className="doc-item flex align" key={doc.id}>
            <div className="doc-item__icon">
              <Doc></Doc>
            </div>
            <div className="doc-item__info">
              <p className="doc-item__date light-color">{doc.createdAt}</p>
              <p className="doc-item__name">{doc.name}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
