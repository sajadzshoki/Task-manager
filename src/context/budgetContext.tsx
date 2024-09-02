import { nanoid } from "nanoid";
import { createContext, useReducer ,Dispatch ,ReactNode} from "react";

interface Expense {
  id: string;
  name: string;
  cost: number;
}

interface State {
  budget: number;
  expenses: Expense[];
}
type Action =
  | { type: "addExpense"; payload: Expense }
  | { type: "deleteExpense"; payload: string }
  | { type: "editBudget"; payload: number };

export const AppReducer = (state:State, action:Action) => {
  switch (action.type) {
    case "addExpense":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "deleteExpense":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "editBudget":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};
// 1. Sets the initial state when the app loads
const initialState:State = {
  budget: 2000,
  expenses: [
    { id: nanoid(), name: "Shopping", cost: 50 },
    { id: nanoid(), name: "Holiday", cost: 230 },
    { id: nanoid(), name: "Transportation", cost: 70 },
  ],
};

// 2. Creates the context this is the thing our components import and use to get the state
export const budgetContext = createContext<{
  budget: number;
  expenses: Expense[];
  dispatch: Dispatch<Action>;
}>({
  budget: initialState.budget,
  expenses: initialState.expenses,
  dispatch: () => null,
});
// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
interface AppProviderProps {
  children: ReactNode;
}
export const AppProvider = ({children}:AppProviderProps) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // 5. Returns our context. Pass in the values we want to expose
  return (
    <budgetContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {children}
    </budgetContext.Provider>
  );
};
