import http, { Query, Method } from '../http'

const defaultParseResponse = <APIResponse>(response: Response): Promise<APIResponse> =>
    response
        .text()
        .then((text) => {
            if (!text) return null
            return JSON.parse(text)
        })
        .then((result) => {
            if (response.status < 400) return result
            return Promise.reject(result)
        })

export default function api<Response = Record<string, unknown>, Body = FormData | Record<string, unknown> | Array<unknown>>({
    method,
    path,
    base = 'http://127.0.0.1:8000',
    query,
    body,
    headers,
    parseResponse,
}: Props<Response, Body>): Promise<Response> {
    return http({
        url: `${base}${path.startsWith('/') ? path : `/${path}`}`,
        query,
        method,
        headers: {
            ...(!(body instanceof FormData) ? {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            } : { 'Content-Type': 'application/x-www-form-urlencoded' }),
            ...headers,
        },
        body: body instanceof FormData ? new URLSearchParams(body) : JSON.stringify(body),
    })
        .then((response) => {
            if (parseResponse) return parseResponse(response, defaultParseResponse)
            return defaultParseResponse<Response>(response)
        })
}

export type Props<APIResponse, Body = FormData | Record<string, unknown> | Array<unknown>> = {
    path: string
    base?: string
    query?: Query
    method?: Method
    headers?: Record<string, string>
    body?: Body
    parseResponse?: (response: Response, defaultParser: (response: Response) => Promise<APIResponse>) => APIResponse
}

export type { Query, Method }
