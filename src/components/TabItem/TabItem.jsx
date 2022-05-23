import React from "react";
import TabIcon from "./TabIcon";
import Label from "./Label";

function TabItem({ text, icon, currentItem, pos, onClick }) {
  function clickHandler() {
    onClick(pos);
  }

  const active = currentItem === pos;
  return (
    <div className="w-16 items-center flex flex-col" onClick={clickHandler}>
      <span
        className={`
                    ${
                      active
                        ? "-mt-6 border-4 bg-rose-600 border-white"
                        : "bg-transparent pt-6"
                    }
                    w-12 duration-500 h-12 rounded-full  
                    flex flex-col relative items-center justify-center`}
      >
        <TabIcon icon={icon} active={active} />
      </span>
      <Label text={text} active={active} />
    </div>
  );
}

export default TabItem;
