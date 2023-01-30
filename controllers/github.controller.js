const { githubService } = require('../services')

const searchPopularRepositories = async (req, res) => {

  const { createdFrom, repoCount, language } = req.query;
  let q = ''

  if(createdFrom){
    q = q.concat(` created:>=${createdFrom}`)
  }
  if(language){
    q = q.concat(` language:${language}`)
  }
  // let's set default qualifier for creation date, as q is mandotory and cannot be empty
  if(!q){
    q = 'created:>=1970-01-01'
  }

  const params = {
    q,
    sort: 'stars',
    order:'desc',
    per_page: repoCount,

  }

  githubService.searchPopularRepositories(params).then(response =>{
    if(response.status == 200){
      res.status(200).send(response.data)
    }else{
      console.log('Status not 200, staus returned : ', response.status)
      res.status(response.status).send('Something went wrong. Please try again')
    }
  }).catch(error => {
    console.error(`Error! Status: ${error?.response?.status}. Message: ${error?.response?.data?.message}`)
    res.status(error?.response?.status).send(error?.response?.data?.message)
  })
 }

module.exports = {
  searchPopularRepositories
}