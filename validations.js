const { query } = require('express-validator')

exports.validatePopularRepoRequest = [
  query('repoCount').default(30).isInt({ min: 1, max: 100 }).withMessage('must be number, max 100'),
  query('createdFrom').optional().isISO8601() ,
  query('language').optional().isString(),
]
