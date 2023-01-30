const githubService = require('../../services/github.service')
const axios = require('axios');

jest.mock("axios");

describe('githubService', () =>{
  test('get popular reposotories ', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ sttaus: 200 , data: {} }));
    const params = {
      q: 'created:>=2023-01-01',
      sort: 'stars',
      order:'desc',
      per_page: 1,
  
    }
    const response = await githubService.searchPopularRepositories(params)
    expect(response.sttaus).toBe(200)
  })
})