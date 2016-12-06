import AuthenticatorSettings from "./types/AuthenticatorSettings"

export interface AuthenticatorStore {
    isLocal: boolean,
    hasAuthToken: boolean,
    authToken: string,
    authenticatorSettingsLoaded: boolean
    authenticatorSettings?: AuthenticatorSettings,
    hasAccount: boolean,
    accountEmail: string
}

export const DefaultState : AuthenticatorStore = {
    isLocal: window.location.hostname === 'localhost',
    hasAuthToken: false,
    authToken: null,
    authenticatorSettingsLoaded: false,
    authenticatorSettings: null,
    hasAccount: false,
    accountEmail: null
}