import * as polyfill from 'es6-promise'
import * as fetch from 'isomorphic-fetch';

import { AuthenticatorStore } from '../AuthenticatorStore'

export function exec(endPoint: string, responseAction) {
    return(dispatch , getState) => {
       
       fetch(endPoint)
        .then(response => response.json())
        .then(json => dispatch(responseAction(json)))
    } 
}
