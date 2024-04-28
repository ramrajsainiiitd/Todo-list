import React, { useContext, useState } from "react";
import { MyContext } from "../ContextAPI/Context";

export default function Card(props) {
  const {
    taskItem,
    setTaskItem,
    flagCheck,
    setFlagCheck,
    falgDelete,
    setFlagDelete,
    completedTask,
    setCompletedTask,
  } = useContext(MyContext);

  function handleIfChecked(id) {
    const FlagUpdatedTaskItem = taskItem.map((item) => {
      if (item.Id == id) {
        return { ...item, flagCheck: !item.flagCheck };
      } else {
        return item;
      }
    });
    setTaskItem(FlagUpdatedTaskItem);
  }

  function handleDelete(id) {
    const filterItem = taskItem.filter((item) => item.Id != id);
    setTaskItem(filterItem);
  }
  return (
    <>
      <div
        style={{
          textAlign: "left",
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "darkgray",
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        <span style={{ display: "flex", gap: "10px" }}>
          {" "}
          <p className="m-1 p-2">{props.index + 1}.</p>
          <p className="m-1 p-2">{props.itemName}</p>
        </span>
        <p className="m-1 p-2"> {props.deadline} </p>
        <p className="m-1 p-2">Priority: {props.priority} </p>
        <span style={{ display: "flex", gap: "10px" }}>
          <p className="m-1 p-2">
            {
              <input
                value={props.Id}
                className="checkbox"
                type="checkbox"
                onChange={()=>handleIfChecked(props.Id)}
              />
            }
          </p>
          <button
            value={props.Id}
            className="btn btn-outline-primary m-1 p-2"
            onClick={()=>handleDelete(props.Id)}
          >
            🗑
          </button>
        </span>
      </div>
    </>
  );
}
