import loadCurrentUser from '.'
import log from '../log'
jest.mock('../log')

describe('loadCurrentUser()', () => {
    beforeEach(() => {
        log.mockReset()
    })

    it('should print greeting to the console', () => {
        loadCurrentUser('World')
        expect(log).toBeCalledWith('Hello World!')
    })

    it('should print default greeting to the console', () => {
        loadCurrentUser()
        expect(log).toBeCalledWith('Hello there!')
    })

    it('should return greeting', () => {
        expect(loadCurrentUser('World')).toBe('Hello World!')
    })

    it('should return default greeting', () => {
        expect(loadCurrentUser()).toBe('Hello there!')
    })
})
