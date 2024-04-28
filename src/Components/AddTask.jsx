import React, { useContext, useEffect } from "react";
import { MyContext } from "../ContextAPI/Context";

export default function AddTask() {
  const {
    taskItem,
    setTaskItem,
    flagCheck,
    setFlagCheck,
    falgDelete,
    setFlagDelete,
    itemName,
    setItemName,
    deadline,
    setDeadline,
    priority,
    setPriority,
    itemCount,
    setItemCount,
  } = useContext(MyContext);

  const handleAddItem = () => {
    if (itemName && deadline && priority) {
      const [year, month, day] = deadline.split("-");
      const formattedDate = `${day}-${month}-${year}`;
      setDeadline(formattedDate);
      setTaskItem([
        ...taskItem,
        {
          Id: itemCount,
          itemName: itemName,
          deadline: formattedDate,
          priority: priority,
          flagCheck: flagCheck,
          flagDelete: falgDelete,
        },
      ]);
      setItemCount(itemCount + 1);
      setItemName("");
      setDeadline("");
      setPriority("");
    } else {
      alert("Please fill in all the details.");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <input
        value={itemName}
        type="text"
        placeholder="Item Name"
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        value={deadline}
        type="date"
        placeholder="Deadline"
        onChange={(e) => setDeadline(e.target.value)}
      />
      <select
        name=""
        id=""
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="">Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button className="btn btn-outline-primary" onClick={handleAddItem}>Add Item</button>
    </div>
  );
}
