import loadUsers from '.'
import log from '../log'
jest.mock('../log')

describe('loadUsers()', () => {
    beforeEach(() => {
        log.mockReset()
    })

    it('should print greeting to the console', () => {
        loadUsers('World')
        expect(log).toBeCalledWith('Hello World!')
    })

    it('should print default greeting to the console', () => {
        loadUsers()
        expect(log).toBeCalledWith('Hello there!')
    })

    it('should return greeting', () => {
        expect(loadUsers('World')).toBe('Hello World!')
    })

    it('should return default greeting', () => {
        expect(loadUsers()).toBe('Hello there!')
    })
})
