import { createContext, useState } from "react";
export const MyContext = createContext(null);
export const ContextProvider = (props) => {
  // const[Item, setItem]=useState({
  //   itemName:'',
  //   deadline:'',
  //   priority:'',
  // })
  const [taskItem, setTaskItem] = useState([]);
  const [itemName, setItemName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");
  const [flagCheck, setFlagCheck] = useState(false);
  const [falgDelete, setFlagDelete] = useState(false);
  const [itemCount, setItemCount] = useState(1);
  const [completedTask, setCompletedTask] = useState([]);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const DeadlineToday = `${day}-${month}-${year}`;

  return (
    <MyContext.Provider
      value={{
        completedTask,
        setCompletedTask,
        flagCheck,
        setFlagCheck,
        falgDelete,
        setFlagDelete,
        itemCount,
        setItemCount,
        DeadlineToday,
        taskItem,
        setTaskItem,
        itemName,
        setItemName,
        deadline,
        setDeadline,
        priority,
        setPriority,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
