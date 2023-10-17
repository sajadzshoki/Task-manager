import { createSlice , PayloadAction} from "@reduxjs/toolkit";

type category = {
    selectedCategory : string;
}

const initialState : category  = {
    selectedCategory : "Dashboard"
}

const selectedCategory = createSlice({
    name : "Notes",
    initialState,
    reducers:{
        setSelectedCategory :(state, action :PayloadAction<string>)=>{
            state.selectedCategory = action.payload
        }
    }
})

export const {setSelectedCategory} = selectedCategory.actions;

export default selectedCategory.reducer