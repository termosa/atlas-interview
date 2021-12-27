import sendMessage from '.'
import log from '../log'
jest.mock('../log')

describe('sendMessage()', () => {
    beforeEach(() => {
        log.mockReset()
    })

    it('should print greeting to the console', () => {
        sendMessage('World')
        expect(log).toBeCalledWith('Hello World!')
    })

    it('should print default greeting to the console', () => {
        sendMessage()
        expect(log).toBeCalledWith('Hello there!')
    })

    it('should return greeting', () => {
        expect(sendMessage('World')).toBe('Hello World!')
    })

    it('should return default greeting', () => {
        expect(sendMessage()).toBe('Hello there!')
    })
})
