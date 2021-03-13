    export const checkLocation = (newData, location, jobs) => {
        if (location) {
            const newJobList = jobs.filter((job) => job.location.toLowerCase().includes(location));
            // eslint-disable-next-line no-param-reassign
            newData = [...newData, ...newJobList];
        }
        return newData;
    }

    export const checkFullTime = (newData, fullTime, jobs) => {
        if (fullTime) {
            if (newData.length === 0) {
                // eslint-disable-next-line no-param-reassign
                newData = [...jobs];
            }
            const newJobList = newData.filter((job) => job.type.toLowerCase().includes("full time"));
            // eslint-disable-next-line no-param-reassign
            newData = [...newJobList]
        }
        return newData;
    }
