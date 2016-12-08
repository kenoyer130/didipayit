import * as polyfill from 'es6-promise'
import * as fetch from 'isomorphic-fetch';

export function exec(endPoint: string, responseAction: any, props?: any) {
    return(dispatch , getState) => {
       fetch(endPoint)
        .then(response => response.json())
        .then(json => dispatch(responseAction(json, props)))
    } 
}
