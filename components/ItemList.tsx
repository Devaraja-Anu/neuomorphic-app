import React from "react";
import { useState } from "react";
import Collapsible from "react-collapsible";

const ItemList = (props: any) => {
  const [expand, setExpand] = useState<boolean>(false);

  const expandHandler = () => {
    setExpand(!expand);
  };

  return (
    <>
      <Collapsible
        trigger={
          <div
            onClick={expandHandler}
            className=" flex justify-between items-center "
          >
            <p className="text-mainText sm:text-3xl py-5 pl-4 sm:pl-10 border-opacity-30">
              {props.item.itemName}
            </p>
            <button
              className={`px-10 text-lg transition-all origin-center ${
                expand ? "rotate-0" : "rotate-45"
              }`}
            >{`\u2715`}</button>
          </div>
        }
      >
        <p className="px-7 mx-4 pb-5">{props.item.itemDescription}</p>
      </Collapsible>
    </>
  );
};
export default ItemList;
