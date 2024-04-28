import React, { useContext } from "react";
import { MyContext } from "../ContextAPI/Context";
import Card from "./Card";

export default function FutureList() {
  const { taskItem, deadline, DeadlineToday, flagCheck, itemCount } =
    useContext(MyContext);

  const filteredFutureTask = Object.values(taskItem).filter((item) => {
    if (DeadlineToday != item.deadline && !item.flagCheck) {
      return item;
    }
  });

  return (
    <div>
      <h5 className="p-2 m-2">Future TodoList</h5>
      {filteredFutureTask.length > 0 ? (
        Object.values(filteredFutureTask).map((item, index) => {
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
        <p className="m-2 p-2">No future task due</p>
      )}
    </div>
  );
}
