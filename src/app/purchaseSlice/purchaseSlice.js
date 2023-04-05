import { createSlice } from '@reduxjs/toolkit'

export const purchaseSlice = createSlice({
    name: 'purchaseStep',
    initialState: {
        step: 1,
    },
    reducers: {
        nextStep: (state) => {
            state.step += 1
        },
        prevStep: (state) => {
            state.step -= 1
        },
        changeStep: (state, action) => {
            state.step -= action.payload
        }
    }
});
export const { nextStep, prevStep, changeStep } = purchaseSlice.actions
export default purchaseSlice.reducer