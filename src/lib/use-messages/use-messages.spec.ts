import { renderHook, act } from '@testing-library/react-hooks'
import useMessages from '.'

describe('useMessages()', () => {
    it('should have initial value', () => {
        const { result } = renderHook(() => useMessages())
        expect(result.current.count).toBe(0)
    })

    it('should have set initial value with given number', () => {
        const { result } = renderHook(() => useMessages(-10))
        expect(result.current.count).toBe(-10)
    })

    it('should have set initial value from given function', () => {
        const { result } = renderHook(() => useMessages(() => -10))
        expect(result.current.count).toBe(-10)
    })

    it('should change initial value by 1', () => {
        const { result } = renderHook(() => useMessages())
        act(() => result.current.increment())
        expect(result.current.count).toBe(1)
    })

    it('should change initial value incrementally', () => {
        const { result } = renderHook(() => useMessages())
        act(() => result.current.increment())
        act(() => result.current.increment())
        expect(result.current.count).toBe(2)
    })
})
