import React, { useContext } from "react";
import Card from "./Card";
import { MyContext } from "../ContextAPI/Context";

export default function TodayList() {
  const {
    taskItem,
    flagCheck,
    setTaskItem,
    itemName,
    setItemName,
    deadline,
    setDeadline,
    priority,
    setPriority,
    DeadlineToday,
  } = useContext(MyContext);

  const taskDueToday = Object.values(taskItem).filter((item) => {
    if (DeadlineToday === item.deadline && !item.flagCheck) {
      return item;
    }
  });

  return (
    <div>
      <h5 className="p-2 m-2">Today’s TodoList</h5>
      {taskDueToday.length > 0 ? (
        Object.values(taskDueToday).map((item, index) => {
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
        <p className="m-2 p-2">No task due today</p>
      )}
    </div>
  );
}
