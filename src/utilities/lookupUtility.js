/* eslint-disable no-console */
import NodeCache from 'node-cache';
import cron from 'node-cron';
import axios from 'axios';
// Initialize Node In-Memory Cache
export const mCache = new NodeCache();

export const setKeywordsInMemCache = async (redirectMetaData) => {
    try {
        const data = Object.entries(redirectMetaData).reduce((accumulator, [key, val]) => [
            ...accumulator,
            { key, val }
        ], []);
        const status = await mCache.mset(data);
        if (!status) {
            throw new Error('Error setting redirect meta data in mem cache.');
        }
        console.log(
            JSON.stringify({
                message: 'Success: setKeywordsInMemCache'
            })
        );
        return status;
    } catch (error) {
        console.error(
            JSON.stringify({
                message: 'Error: setKeywordsInMemCache',
                error: error?.message
            })
        );
        return null;
    }
};

export const lookupKeywordFromMemCache = async (
    request,
    searchKeyword
) => {
    try {
        const stringifiedData = await mCache.get(searchKeyword);
        return stringifiedData ? JSON.parse(stringifiedData) : null;
    } catch (error) {
        return null;
    }
};

export const updateMemCache = async (data) => {
    try {
        if (!data) {
            return null;
        }
        Object.keys(data).forEach((key) => mCache.del(key));
        return await setKeywordsInMemCache(data);
    } catch (error) {
        console.error(
            JSON.stringify({
                message: 'Error: updateMemCache',
                error: error?.message
            })
        );
        return null;
    }
};

export const readStaticContentFile = async (url , staticFilePath, bucketName) => {
    const response = await axios.get(`${url}?staticFilePath=${staticFilePath}&bucketName=${bucketName}`)
    if (response && response?.status === 200) {
         updateMemCache(response?.data);
    }
    return response;
}

/**
 * CRON job to update node mem cache every half an hour
 * If autoUpdateStaticContent is false, then do not update the mem cache
 */
export const startCronJob = async (url, staticFilePath, bucketName) => {
    cron.schedule('30 * * * *', async () => {
        try {
            console.log(JSON.stringify({message: 'Running daily CRON to updateMemCache from:' + staticFilePath}));
            const response = await readStaticContentFile(url, staticFilePath, bucketName);
            if (response && response?.status === 200) {
                console.log(JSON.stringify({message: 'Success: CRON updateMemCache from:' + staticFilePath}));
            }
        } catch (error) {
            console.error(
                JSON.stringify({message: 'Error: CRON updateMemCache',error: error?.message}));
        }
    });
}