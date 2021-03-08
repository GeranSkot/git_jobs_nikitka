//V2 BICTCH

import axios from "axios";

const client = axios.create({
    baseURL:
    // "https://jobs.github.com/positions.json",
        "https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json/",
    headers: {
        "Content-Type": "application/json",
    },
});

const request = (url = "", params = {}) => {
    const response = client.get(url, {params});
    return response;
};

export const getJobs = async (params = {}) => {
    const requestPromise = await request("https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json/", params)
        .then((response) => {
            if (response.statusText === "OK") {
                return response.data;
            }
            throw new Error(response.statusText);
        })
        .catch((e) => {
            return Promise.reject(e.message);
        });

    return requestPromise;
};

