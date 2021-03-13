//V2 BICTCH

import axios from "axios";

export const getJobs = async (params = {}) => {
    return axios.get("positions.json", {params})
        .then((response) => {
            if (response.statusText === "OK") {
                return response.data;
            }
            throw new Error(response.statusText);
        })
        .catch((e) => {
            return Promise.reject(e.message);
        });
};

