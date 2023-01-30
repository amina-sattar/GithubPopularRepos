const express = require('express')

const { githubController } = require('../controllers')

const validations= require('../validations')
const { validateRequest } = require('../utils')

const router = express.Router()

router.get(
  '/popular-repositories',
  validations.validatePopularRepoRequest,
  validateRequest,
  githubController.searchPopularRepositories
)

module.exports = router