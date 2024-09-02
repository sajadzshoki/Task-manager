import { useContext, useState } from "react";
import { budgetContext } from "../../context/budgetContext";
import { nanoid } from "nanoid";
import { TiDelete } from "react-icons/ti";


interface EditBudgetProps {
  budget: number;
  handleSaveClick: (value: number) => void;
}
interface ExpenseItemProps {
  id: string;
  name: string;
  cost: number;
}
interface ViewBudgetProps {
  budget: number;
  handleEditClick: () => void;
}

// why isn't it possible to write them in one type and add the, 
// interface types {
//   budget: number;
//   id:string;
//   name:string;
//   cost:number;
//   handleSaveClick: (value: number) => void;
//   handleEditClick: () => void;
// }
export const AddExpenseForm = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const { dispatch } = useContext(budgetContext);

  const onSubmit = (event :React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const expense = {
      id: nanoid(),
      name,
      cost: parseInt(cost),
    };
    dispatch({
      type: "addExpense",
      payload: expense,
    });
    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 ">
      <div className="space-y-2">
        <div className="flex items-center border border-gray-300 rounded-md bg-white">
          <span className="px-3 py-2 bg-gray-200 rounded-md">Name</span>
          <input
            type="text"
            className="flex-1 p-2 border-none rounded-md "
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-md bg-white">
          <span className="px-3 py-2 bg-gray-200 rounded-md">Cost</span>
          <input
            type="number"
            className="flex-1 p-2 border-none rounded-md"
            required
            placeholder="$"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
};

export const EditBudget = (props:EditBudgetProps) => {
  const [value, setValue] = useState(props.budget);

  return (
    <div className="flex items-center space-x-3">
      <input
        className="p-2 border border-gray-300 rounded-md"
        type="number"
        required
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
      <button
        type="button"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </div>
  );
};


export const ViewBudget = (props:ViewBudgetProps) => {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-lg font-semibold">Budget: £{props.budget}</span>
      <button
        type="button"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </div>
  );
};


  export const ExpenseItem = (props:ExpenseItemProps) => {
  const { dispatch } = useContext(budgetContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "deleteExpense",
      payload: props.id,
    });
  };

  return (
    <li className="flex justify-between items-center p-2 border-b border-gray-200">
      {props.name}
      <div className="flex items-center space-x-2">
        <span className="bg-blue-500 text-white px-2 py-1 rounded-full">
          ${props.cost}
        </span>
        <TiDelete
          size="1.5rem"
          cursor="pointer"
          onClick={handleDeleteExpense}
        />
      </div>
    </li>
  );
};

export const ExpenseList = () => {
  const { expenses } = useContext(budgetContext);

  return (
    <ul className="divide-y divide-gray-200">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </ul>
  );
};



//---------------------------------------------------------------------------------------------
export const ExpenseTotal = () => {
  const { expenses, budget } = useContext(budgetContext);

  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

  const alertType =
    totalExpenses > budget
      ? "bg-red-100 text-red-800"
      : "bg-gray-100 text-gray-800";

  return (
    <div className={`p-5 rounded-md border border-gray-300 ${alertType}`}>
      Spent so far: ${totalExpenses}
    </div>
  );
};

export const Remaining = () => {
  const { budget, expenses } = useContext(budgetContext);

  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

  const alertType =
    totalExpenses > budget
      ? "bg-red-100 text-red-800"
      : "bg-green-100 text-green-800";

  return (
    <div className={`p-5 rounded-md border border-gray-300 ${alertType}`}>
      Remaining: ${budget - totalExpenses}
    </div>
  );
};
export const Budget = () => {
  const { budget, dispatch } = useContext(budgetContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value: any) => {
    dispatch({
      type: "editBudget",
      payload: value,
    });
    setIsEditing(false);
  };


  return (
    <div className="flex justify-between items-center p-4 border border-gray-300 rounded-md bg-blue-100">
      {isEditing ? (
        <EditBudget budget={budget} handleSaveClick={handleSaveClick} />
      ) : (
        <ViewBudget budget={budget} handleEditClick={handleEditClick} />
      )}
    </div>
  );
};
