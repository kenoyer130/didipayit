import * as polyfill from 'es6-promise'
import * as fetch from 'isomorphic-fetch';

export interface ResponseError extends Error {
    status_code : number
}

export function exec(endPoint: string, method?: string, body?: {}) {

    const _method = method == null ? 'GET' : method;

    const init = {
        method: _method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : null
    }

    return fetch(endPoint, init)
        .then(checkStatus)
        .then(parseJson);
}

function checkStatus(response) {
    if(response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.statusText) as ResponseError;
        error.status_code = response.status;
        throw error;
    }
}

function parseJson(response) {
    return response.json();
}
