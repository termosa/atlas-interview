import loadChats from '.'
import log from '../log'
jest.mock('../log')

describe('loadChats()', () => {
    beforeEach(() => {
        log.mockReset()
    })

    it('should print greeting to the console', () => {
        loadChats('World')
        expect(log).toBeCalledWith('Hello World!')
    })

    it('should print default greeting to the console', () => {
        loadChats()
        expect(log).toBeCalledWith('Hello there!')
    })

    it('should return greeting', () => {
        expect(loadChats('World')).toBe('Hello World!')
    })

    it('should return default greeting', () => {
        expect(loadChats()).toBe('Hello there!')
    })
})
