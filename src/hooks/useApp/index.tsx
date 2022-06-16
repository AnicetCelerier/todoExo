import { useState, useEffect } from "react";
import { TaskType } from "../../types";

const useApp = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (t: TaskType) => {
    // setTasks(Array.from(tasks.concat(t)));

    setTasks((_tasks: TaskType[]) => {
      _tasks = _tasks.concat(t);
      // console.log(_tasks, '_tasks')
      return Array.from(_tasks);
    });
  };
  const deleteTask = (t: TaskType) => {
    // _tasks.filter((_t: TaskType) => {
    //   if (_t.content === t.content) return true;
    //   return false;
    // });
    setTasks((_tasks: TaskType[]) => {
      const tt = _tasks.filter((_t: TaskType) => _t.content !== t.content);
      return Array.from(tt);
    });
  };

  const toggleTask = (t: TaskType) => {
    setTasks((_tasks: TaskType[]) => {
      console.log("toggleTask");
      const tt = _tasks.find((_t: TaskType) => _t.content === t.content);
      if (tt === undefined || typeof tt === "undefined") {
        return _tasks;
      }

      if (tt.checked === true) {
        // console.log("true");
        // tt.checked = false;
      } else {
        // console.log("false");
        tt.checked = true;
      }

      // console.log(tt, "i'm here");

      return Array.from(_tasks);
    });
  };

  // const saveTasks = (t: TaskType) => {
  //   const test =  _tasks.filter((_t: TaskType) => _t.content === t.content)
  //   console.log(test)

  // };

  useEffect(() => {
    console.log("use effect useApp called");
    const data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    } else {
      setTasks([]);
    }
  }, []);

  //   useEffect(() => {
  //     console.log("use effect tasks changed", tasks);
  //     if (tasks.length !== 0) {
  //        localStorage.setItem("tasks", JSON.stringify(tasks));
  //      }
  //   }, [tasks]);

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
  };
};

export default useApp;