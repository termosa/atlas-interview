import signIn from '.'
import log from '../log'
jest.mock('../log')

describe('signIn()', () => {
    beforeEach(() => {
        log.mockReset()
    })

    it('should print greeting to the console', () => {
        signIn('World')
        expect(log).toBeCalledWith('Hello World!')
    })

    it('should print default greeting to the console', () => {
        signIn()
        expect(log).toBeCalledWith('Hello there!')
    })

    it('should return greeting', () => {
        expect(signIn('World')).toBe('Hello World!')
    })

    it('should return default greeting', () => {
        expect(signIn()).toBe('Hello there!')
    })
})
