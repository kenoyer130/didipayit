import AuthenticatorSettings from "./types/AuthenticatorSettings"
import Account from "../models/Account"

export interface AuthenticatorStore {
    isLocal: boolean,
    hasAuthToken: boolean,
    authToken: string,
    authenticatorSettingsLoaded: boolean
    authenticatorSettings?: AuthenticatorSettings,
    hasAccount: boolean
}

export const DefaultState : AuthenticatorStore = {
    isLocal: window.location.hostname === 'localhost',
    hasAuthToken: false,
    authToken: null,
    authenticatorSettingsLoaded: false,
    authenticatorSettings: null,
    hasAccount: false,
}