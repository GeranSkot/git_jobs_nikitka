import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
// Components
import App from "./App.js";
// Redux store
import {store} from "./services/redux/store/store";
// Redux thunk
import {fetchJobs} from "./services/redux/slices/jobs/jobsSlice";
import GlobalStyles from "./assets/globalStyles/globalStyle";

// Fetch jobs when page loads
store.dispatch(fetchJobs());

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyles/>
        <App/>
    </Provider>,
    document.getElementById("root")
);
