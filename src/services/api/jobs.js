import axios from "axios";

// eslint-disable-next-line import/prefer-default-export
export const getJobs = async (params = {}) => axios.get("positions.json", {params})
        .then((response) => {
            if (response.statusText === "OK") {
                return response.data;
            }
            throw new Error(response.statusText);
        })
        .catch((e) => Promise.reject(e.message));