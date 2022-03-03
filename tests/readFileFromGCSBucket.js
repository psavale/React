const { readFileFromGCSBucket } = require('../../src/utilities/readFileFromGCSBucket');
const { getFile } = require('../../src/utilities/getFile');

const mockedFile = { exists: jest.fn() };
const mockedBucket = { file: jest.fn(() => mockedFile) };
const mockedStorage = { bucket: jest.fn(() => mockedBucket) };

jest.mock('@google-cloud/storage', () => ({ Storage: jest.fn(() => mockedStorage) }));
jest.mock('../../src/utilities/getFile', () => ({ getFile: jest.fn() }));

describe('ReadGCSFileFromStorage', () => {
  beforeEach(() => {});

  afterAll(() => {});

  test('should return GCS file Data', async () => {
    const fileData = { key: 'value' };
    const fileName = 'testfile';
    mockedFile.exists.mockResolvedValue([true]);
    getFile.mockResolvedValue(Buffer.from(JSON.stringify(fileData)));
    const data = await readFileFromGCSBucket({ filePathToRead: fileName });
    expect(JSON.parse(data[fileName])).toEqual(fileData);
  });

  test('should return empty json when GCS file Data fetched', async () => {
    mockedFile.exists.mockResolvedValue([true]);
    getFile.mockRejectedValue(new Error('Error'));
    const data = await readFileFromGCSBucket({ request: { log: { error: jest.fn() } } });
    expect(data).toEqual({});
  });

  test('should return empty string when GCS file Data fetched', async () => {
    mockedFile.exists.mockResolvedValue([false]);
    const data = await readFileFromGCSBucket({});
    expect(data).toEqual('');
  });
});