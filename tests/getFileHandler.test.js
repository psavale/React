const { readFileFromGCSBucket } = require('../../../src/utilities/readFileFromGCSBucket');
const gcsFileHandler = require('../../../src/handlers/staticContent/gcsFileHandler');

jest.mock('../../../src/utilities/readFileFromGCSBucket', () => ({
  readFileFromGCSBucket: jest.fn()
}));

describe('readGCSFile', () => {
  beforeEach(() => {});

  afterAll(() => {});

  test('should return error response on API call failure', async () => {
    readFileFromGCSBucket.mockRejectedValueOnce(new Error('Error'));
    const mockSend = jest.fn();
    const request = {
      query: { staticFilePath: '', bucketName: '' },
      log: { error: jest.fn(), info: jest.fn() }
    };
    const reply = { code: () => ({ send: mockSend }) };
    await gcsFileHandler(request, reply);
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'something went wrong' })
    );
  });

  test('should return response on API call', async () => {
    readFileFromGCSBucket.mockResolvedValueOnce({ key: 'value' });
    const mockSend = jest.fn();
    const request = {
      query: { staticFilePath: '', bucketName: '' }
    };
    const reply = { code: () => ({ send: mockSend }) };
    await gcsFileHandler(request, reply);
    expect(mockSend).toHaveBeenCalledWith({ key: 'value' });
  });
});