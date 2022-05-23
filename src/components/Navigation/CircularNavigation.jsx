import React, { useState } from "react";
import TabItem from "../TabItem/TabItem";

function CircularNavigation({ model }) {
  const [currentItem, setCurrentItem] = useState(0);

  const items = model.map((item, i) => {
    return (
      <TabItem
        text={item.title}
        key={i}
        icon={item.icon}
        pos={i}
        onClick={(pos) => setCurrentItem(pos)}
        currentItem={currentItem}
      />
    );
  });

  return (
    <div
      className={`max-h-[48px] bg-white border px-4 rounded-b-2xl flex flex-row items-center`}
    >
      {items}
    </div>
  );
}

export default CircularNavigation;
