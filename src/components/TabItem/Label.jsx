import React from "react";

function Label({ text, active }) {
  return (
    <span
      className={`
            ${active ? "duration-700 opacity-100" : "opacity-0 translate-y-10"} 
            font-light text-sm pb-1`
        }>
      {text}
    </span>
  );
}

export default Label;
