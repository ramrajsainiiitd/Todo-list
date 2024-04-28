import React, { useContext } from "react";
import { MyContext } from "../ContextAPI/Context";
import Card from "./Card";

export default function CompletedList() {
  const { taskItem, flagCheck } = useContext(MyContext);
  const FilterCompletedTask = taskItem.filter((item) => item.flagCheck == true);
  console.log("filtered completed task", FilterCompletedTask.length);
  console.log("task item", taskItem);
  return (
    <div>
      <h5 className="p-2 m-2">Completed TodoList</h5>
      {FilterCompletedTask.length > 0 ? (
        FilterCompletedTask.map((item, index) => {
          return (
            <Card
              index={index}
              Id={item.Id}
              itemName={item.itemName}
              deadline={item.deadline}
              priority={item.priority}
            />
          );
        })
      ) : (
        <p className="m-2 p-2">No task completed yet</p>
      )}
    </div>
  );
}
