const { validateRequest } = require('../utils')
const { getMockResponse } = require('./testUtils')
jest.mock('express-validator', () =>{
  return{
    validationResult: jest.fn().mockReturnValue({
      isEmpty: jest.fn().mockReturnValueOnce(false).mockReturnValue(true), // for 1st test it will return false, for the second one it will return true
        array: jest.fn().mockReturnValue([
          { 
            param: 'repoCount', 
            value: 400, 
            isEmpty: jest.fn().mockReturnValue(false)
          }
        ])
    })
  }
})
describe('test validateRequest method', () =>{
  const mockReq = { query: {repoCount: 'invalid value' } }
  const mockRes = getMockResponse()
  const nextFn = jest.fn()

  test('validaion errors should return 400', () => {
    jest.spyOn(mockRes, 'status')
    validateRequest(mockReq, mockRes, nextFn)
    expect(mockRes.status).toHaveBeenCalledWith(400)
  })
  test('should move to next iteration when validation passes', () => {
    validateRequest(mockReq, mockRes, nextFn)
    expect(nextFn).toHaveBeenCalled()
  })
})
