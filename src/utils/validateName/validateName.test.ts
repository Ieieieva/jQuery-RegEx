import {validateName} from './validateName'

describe(validateName, () => {
    it('sould return false if empty', () => {
        const result = validateName('')
        console.log('result', result)
        
        expect(result).toEqual(false)
    })
})