import loadMessages from '.'
import log from '../log'
jest.mock('../log')

describe('loadMessages()', () => {
    beforeEach(() => {
        log.mockReset()
    })

    it('should print greeting to the console', () => {
        loadMessages('World')
        expect(log).toBeCalledWith('Hello World!')
    })

    it('should print default greeting to the console', () => {
        loadMessages()
        expect(log).toBeCalledWith('Hello there!')
    })

    it('should return greeting', () => {
        expect(loadMessages('World')).toBe('Hello World!')
    })

    it('should return default greeting', () => {
        expect(loadMessages()).toBe('Hello there!')
    })
})
