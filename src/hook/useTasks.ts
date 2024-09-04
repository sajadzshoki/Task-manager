// useTaskManager.ts
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export const useTasks = (initialTasks: string[], onDeleteAll: () => void) => {
  const [tasks, setTasks] = useState<string[]>(initialTasks);
  const [newInput, setNewInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = e.currentTarget.value;
    setTasks(updatedTasks);
  };

  const add = () => {
    if (newInput.trim() !== "") {
      setTasks([...tasks, newInput.trim()]);
      setNewInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      add();
    }
  };

  const remove = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const removeAll = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete all tasks?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            setTasks([]);
            if (onDeleteAll) onDeleteAll();
          }
        },
        {
          label: 'No',
        }
      ]
    });
  };

  return {
    tasks,
    newInput,
    setNewInput,
    handleChange,
    add,
    handleKeyPress,
    remove,
    removeAll
  };
};
