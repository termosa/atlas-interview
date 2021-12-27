const stringifyQuery = (query: Query) =>
    Object.keys(query)
        .map((key) => {
            const value = query[key]
            if (typeof value !== 'undefined') return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        })
        .filter(Boolean)
        .join('&')

const patchURLWithQuery = (path: string, query?: Query) =>
    query ? `${path}${path.includes('?') ? '&' : '?'}${stringifyQuery(query)}` : path

const http = ({ method = 'GET', url, query, body, headers, mode, credentials }: Props) =>
    fetch(patchURLWithQuery(url, query), { method, headers, body, mode, credentials })

export default http

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type Query = Record<string, string | number | boolean | undefined>

export type Body =
    | string
    | Blob
    | ArrayBufferView
    | ArrayBuffer
    | FormData
    | URLSearchParams
    | ReadableStream<Uint8Array>
    | null

export type Props = {
    url: string
    query?: Query
    method?: Method
    headers?: Headers | string[][] | Record<string, string>
    body?: Body
    mode?: 'cors' | 'no-cors'
    credentials?: 'include' | 'same-origin'
}
