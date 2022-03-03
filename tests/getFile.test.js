const fs = require('fs');
const { getFile } = require('../../src/utilities/getFile');

const mockedFile = {
  createReadStream: jest
    .fn()
    .mockImplementation(() => fs.createReadStream('secrets/GCS/key_dev.json')),
  exists: jest.fn().mockResolvedValue([true])
};

const mockedBucket = { file: jest.fn(() => mockedFile) };

describe('ReadGCSFileFromStorage', () => {
  beforeEach(() => {});

  afterAll(() => {});

  test('should return data from GCS file', async () => {
    let fileData = '';
    await getFile(mockedBucket.file()).then((data) => {
      fileData = JSON.parse(data);
    });
    expect(fileData).toEqual(expect.objectContaining({ project_id: expect.any(String) }));
  });
});