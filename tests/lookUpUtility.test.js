/* eslint-disable no-console */
import axios from 'axios';
import {lookupKeywordFromMemCache, readStaticContentFile,mCache, setKeywordsInMemCache, updateMemCache} from '../lookupUtility';

 jest.mock('node-cache', () => { return jest.fn() });
jest.mock('axios');

 describe('setKeywordsInMemCache', () => {
    mCache.mset = jest.fn();
    it('memcache getting set', async () => {
        expect.hasAssertions();
        mCache.mset.mockImplementation(() => true);
        const memCacheSetStatus = await setKeywordsInMemCache({ key: 'value'});
        expect(memCacheSetStatus).toStrictEqual(true);
    });

    it('memcache setting failed', async () => {
        expect.hasAssertions();
        mCache.mset.mockImplementation(() => false);
        const dataOnError = await setKeywordsInMemCache({ key: 'value'});
        expect(dataOnError).toBeNull();
    });
});

describe('lookupKeywordFromMemCache', () => {
    mCache.get = jest.fn();
    it('memcache get value', async () => {
        expect.hasAssertions();
        const data = {key:"value"};
        mCache.get.mockImplementation(() => (JSON.stringify(data)));
        const memCacheData = await lookupKeywordFromMemCache('key');
        expect(memCacheData).toStrictEqual(data);
    });

    it('memcache get value and not found', async () => {
        expect.hasAssertions();
        mCache.get.mockImplementation(() => null);
        const dataOnError = await lookupKeywordFromMemCache('key');
        expect(dataOnError).toBeNull();
    });
});

describe('updateMemCache', () => {
    mCache.del = jest.fn();
    mCache.mset = jest.fn();
    it('memcache update value', async () => {
        expect.hasAssertions();
        mCache.mset.mockImplementation(() => true);
        await setKeywordsInMemCache({key: "value"});
        const memCacheData = await updateMemCache({key:"value1"});
        expect(memCacheData).toStrictEqual(true);
    });

    it('memcache update null value', async () => {
        expect.hasAssertions();
        mCache.mset.mockImplementation(() => true);
        await setKeywordsInMemCache({key: "value"});
        const dataOnError = await updateMemCache(null);
        expect(dataOnError).toBeNull();
    });
});

describe('readStaticContentFile', () => {
    it('read data from Node endpoint', async () => {
        expect.hasAssertions();
        const data = { key : "value" };
        axios.get.mockImplementation(() =>
            Promise.resolve({
                status: 200,
                data: data
            })
        );
        const response = await readStaticContentFile();
        expect(response.status).toStrictEqual(200);
        expect(response.data).toStrictEqual(data);
    });

    it('memcache get value and not found', async () => {
        expect.hasAssertions();
        axios.get.mockImplementation(() =>
            Promise.resolve({
                status: 400,
                data: null
            })
        );
        const response = await readStaticContentFile();
        expect(response.status).toStrictEqual(400);
        expect(response.data).toBeNull();
    });
});