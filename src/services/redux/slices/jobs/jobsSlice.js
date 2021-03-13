import {createAsyncThunk, createEntityAdapter, createSlice,} from "@reduxjs/toolkit";
import getJobs from "../../../api/jobs";

const jobsAdapter = createEntityAdapter();

const initialState = jobsAdapter.getInitialState({
    status: "",
    error: null,
});

export const fetchJobs = createAsyncThunk(
    "jobs/fetchJobs",
    async (params = {}) =>
        // eslint-disable-next-line no-return-await
         await getJobs(params)
);

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        updateJobs: (state, action) => {
            jobsAdapter.setAll(state, action.payload);
        },
    },
    extraReducers: {
        [fetchJobs.fulfilled]: (state, action) => {
            jobsAdapter.setAll(state, action.payload);
            // eslint-disable-next-line no-param-reassign
            state.status = "finished";
        },
        [fetchJobs.pending]: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.status = "loading";
        },
        [fetchJobs.rejected]: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.status = "rejected";
            // eslint-disable-next-line no-param-reassign
            state.error = action.error.message;
        },
    },
});

export const {
    selectAll: selectAllJobs,
    selectById: selectJobById,
} = jobsAdapter.getSelectors((state) => state.jobs);

export default jobsSlice.reducer;
