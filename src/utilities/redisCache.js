const { promisify } = require('util');
const fs = require('fs');
const redis = require('redis');
const path = require('path');

const manifest = require('../manifest');

/**
 * This method initializes a redis instance and returns the client, get, set and delete methods,
 * if redis is enabled.
 * @returns {Object} An object containing the redisClient, redisClientSetEx, redisClientGet
 * and redisClientDelete methods.
 */
const initializeRedisCache = () => {
  const {
    redisHost,
    redisPort,
    redisUser,
    redisPassword,
    certificatesPath
    // eslint-disable-next-line prettier/prettier
  } = manifest.plugins.redis;

  // Create Redis Client and connect
  const redisClient = redis.createClient({
    host: redisHost,
    port: redisPort,
    tls: {
      key: fs.readFileSync(path.resolve(`${certificatesPath}client.key`)),
      cert: fs.readFileSync(path.resolve(`${certificatesPath}client.crt`)),
      ca: [fs.readFileSync(path.resolve(`${certificatesPath}ca.crt`))],
      checkServerIdentity: () => null
    },
    user: redisUser,
    password: redisPassword
  });

  // Promisify redis get, set and del methods
  const redisClientSetEx = promisify(redisClient.setex).bind(redisClient);
  const redisClientGet = promisify(redisClient.get).bind(redisClient);
  const redisClientDelete = promisify(redisClient.del).bind(redisClient);
  const redisClientSet = promisify(redisClient.set).bind(redisClient);

  // Listen to Redis Client connection and log successful connection.
  redisClient.on('connect', (error) => {
    if (error) {
      console.error(
        JSON.stringify({
          message: 'Error connecting to Redis Cache',
          error
        })
      );
    } else {
      console.log('Successfully connected to Redis Cache');
    }
  });

  // Listen to Redis Cache errors
  redisClient.on('error', (error) => {
    console.error(
      JSON.stringify({
        message: 'Error: Redis Cache',
        error
      })
    );
  });
  redisClient.on('ready', (error) => {
    console.log(
      JSON.stringify({
        message: 'Ready: Redis Cache',
        error
      })
    );
  });
  redisClient.on('reconnecting', (error) => {
    console.error(
      JSON.stringify({
        message: 'Reconnecting: Redis Cache',
        error
      })
    );
  });
  return { redisClient, redisClientGet, redisClientSetEx, redisClientDelete, redisClientSet };
};

/**
 * This utility method stringifies and sets the data to redis cache.
 * @param {Object} request - The API Request object.
 * @param {Object|Array|String|Number} cacheData - The data to be cached.
 * @param {String} cacheKey - The unique ID used to identify and store the data.
 * @param {Number} expiry - Optional. Pass the number of mins after which the cached data
 * needs to be cleared. Don't pass anything if you want to retain your data indefinitely.
 * @returns {undefined}
 */
const setDataToRedisCache = async (request, cacheData, cacheKey, expiry) => {
  const startTimer = Date.now();
  request.log.info({
    message: 'Start: SetDataToRedisCache',
    cacheType: 'Redis',
    startTime: new Date(),
    timestamp: Date.now(),
    elapsed: Date.now() - startTimer,
    cacheKey
  });
  const { redisClient, redisClientSetEx, redisClientSet } = request.redis;
  try {
    if (!redisClient || !redisClientSetEx) {
      throw new Error('Redis Cache is not initialized!');
    }
    let data;
    // Set Payment data to Redis Cache with expiry, if available.
    if (expiry) {
      data = await redisClientSetEx(cacheKey, 60 * expiry, JSON.stringify(cacheData));
    } else {
      data = await redisClientSet(cacheKey, JSON.stringify(cacheData));
    }
    request.log.info({
      message: 'Success: SetDataToRedisCache',
      cacheType: 'Redis',
      startTime: new Date(),
      timestamp: Date.now(),
      elapsed: Date.now() - startTimer,
      cacheKey,
      data
    });
  } catch (error) {
    request.log.error({
      message: 'Error: SetDataToRedisCache',
      cacheType: 'Redis',
      startTime: new Date(),
      timestamp: Date.now(),
      elapsed: Date.now() - startTimer,
      cacheKey,
      errorMessage: error && error.message,
      error
    });
  }
};

/**
 * This utility method retrieves the data available in cache, based on the key passed.
 * @param {Object} request - The API Request object.
 * @param {String} cacheKey - The unique ID used to identify and retrieve the data.
 * @returns {Object|Array|String|Number} The data from the cache. If no data is found in cache,
 * null is returned.
 */
const getDataFromRedisCache = async (request, cacheKey) => {
  const { redisClient, redisClientGet } = request.redis;
  if (!redisClient || !redisClientGet) {
    request.log.error({
      message: 'Error: GetDataFromRedisCache',
      cacheType: 'Redis',
      cacheKey,
      errorMessage: 'Redis Cache is not initialized!'
    });
    // Throw empty error with no message as Redis errors should not get leaked to FE.
    throw new Error();
  }
  const stringifiedData = await redisClientGet(cacheKey);
  request.log.info({
    message: 'Success: GetDataFromRedisCache',
    cacheType: 'Redis',
    startTime: new Date(),
    timestamp: Date.now(),
    cacheKey,
    isDataNull: !stringifiedData
  });
  const data = stringifiedData ? JSON.parse(stringifiedData) : null;
  return data;
};

/**
 * This utility method removes the data from the cache, based on the key passed.
 * @param {Object} request - The API Request object.
 * @param {String} cacheKey - The unique ID used to identify and delete the data.
 * @returns {undefined}
 */
const removeDataFromRedisCache = async (request, cacheKey) => {
  const startTimer = Date.now();
  request.log.info({
    message: 'Start: RemoveDataFromRedisCache',
    cacheType: 'Redis',
    startTime: new Date(),
    timestamp: Date.now(),
    elapsed: Date.now() - startTimer,
    cacheKey
  });
  const { redisClient, redisClientDelete } = request.redis;
  try {
    if (!redisClient || !redisClientDelete) {
      throw new Error('Redis Cache is not initialized!');
    }
    const data = await redisClientDelete(cacheKey);

    request.log.info({
      message: 'Success: RemoveDataFromRedisCache',
      cacheType: 'Redis',
      startTime: new Date(),
      timestamp: Date.now(),
      elapsed: Date.now() - startTimer,
      cacheKey,
      data
    });
    return data;
  } catch (error) {
    request.log.error({
      message: 'Error: RemoveDataFromRedisCache',
      cacheType: 'Redis',
      startTime: new Date(),
      timestamp: Date.now(),
      elapsed: Date.now() - startTimer,
      cacheKey,
      errorMessage: error && error.message,
      error
    });
    return null;
  }
};

module.exports = {
  initializeRedisCache,
  setDataToRedisCache,
  getDataFromRedisCache,
  removeDataFromRedisCache
};