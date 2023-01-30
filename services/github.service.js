const axios = require("axios")

const searchPopularRepositories = (params) => {
  return axios.get(`${process.env.GITHUB_SEARCH_URL}/repositories`, { params })
}

module.exports = {
  searchPopularRepositories
}