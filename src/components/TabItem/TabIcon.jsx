import React from "react";

function TabIcon({ icon, active }) {
  return (
    <div
      className={`
            ${active ? "text-white" : "text-black"} 
            cursor-pointer text-center duration-500`}
    >
      {icon}
    </div>
  );
}

export default TabIcon;
