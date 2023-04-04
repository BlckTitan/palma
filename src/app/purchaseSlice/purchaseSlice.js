import { createSlice } from '@reduxjs/toolkit'

export const purchaseSlice = createSlice({
    name: 'purchaseStep',
    initialState: {
        step: 1,
    },
    reducer: {
        changeStep: (state, action) => {
            state.step = action.payload
        }
    }
});
export const { changeStep } = purchaseSlice.actions
export default purchaseSlice.reducer