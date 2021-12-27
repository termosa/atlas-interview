import api from '.'
import log from '../log'
jest.mock('../log')

describe('api()', () => {
    beforeEach(() => {
        log.mockReset()
    })

    it('should print greeting to the console', () => {
        api('World')
        expect(log).toBeCalledWith('Hello World!')
    })

    it('should print default greeting to the console', () => {
        api()
        expect(log).toBeCalledWith('Hello there!')
    })

    it('should return greeting', () => {
        expect(api('World')).toBe('Hello World!')
    })

    it('should return default greeting', () => {
        expect(api()).toBe('Hello there!')
    })
})
