const { githubController } = require('../../controllers')

jest.mock('../../services', () => {
  return {
    githubService: {
      searchPopularRepositories: jest.fn()
      .mockResolvedValueOnce({status: 200, data: { someKey: 'someValue' }})
      .mockResolvedValueOnce({status: 422 })
    }
  }
});

const getMockResponse = () => {
  const res = {};
  res.status = () => res;
  res.send = () => res;
  return res;
};

describe('test githubController ', () => {

  const mockReq = { query: {repoCount: 1 } }
  const mockRes = getMockResponse()

  jest.spyOn(mockRes, 'status')
  jest.spyOn(mockRes, 'send')

  test('should return 200', async () =>{
    await githubController.searchPopularRepositories(mockReq, mockRes)
  
    expect(mockRes.status).toHaveBeenCalledWith(200)
    expect(mockRes.send).toHaveBeenCalledWith({ someKey: 'someValue' })
  })
  
  test('should return 422 ', async () => {
    await githubController.searchPopularRepositories(mockReq, mockRes)
    expect(mockRes.status).toHaveBeenCalledWith(422)
  })
})