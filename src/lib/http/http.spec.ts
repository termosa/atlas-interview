import http from '.'
import log from '../log'
jest.mock('../log')

describe('http()', () => {
    beforeEach(() => {
        log.mockReset()
    })

    it('should print greeting to the console', () => {
        http('World')
        expect(log).toBeCalledWith('Hello World!')
    })

    it('should print default greeting to the console', () => {
        http()
        expect(log).toBeCalledWith('Hello there!')
    })

    it('should return greeting', () => {
        expect(http('World')).toBe('Hello World!')
    })

    it('should return default greeting', () => {
        expect(http()).toBe('Hello there!')
    })
})
