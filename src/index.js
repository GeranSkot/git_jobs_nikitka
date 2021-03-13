import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import {store} from "./services/redux/store/store";
import {fetchJobs} from "./services/redux/slices/jobs/jobsSlice";
import GlobalStyles from "./styles/globalStyle";

store.dispatch(fetchJobs());

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyles/>
        <App/>
    </Provider>,
    document.getElementById("root")
);
