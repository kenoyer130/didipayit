import AuthenticatorSettings from "./types/AuthenticatorSettings"

export interface AuthenticatorStore {
    hasAuthToken: boolean,
    authToken: string,
    authenticatorSettingsLoaded: boolean
    authenticatorSettings?: AuthenticatorSettings,
    hasAccount: boolean,
    accountEmail: string
}

export const DefaultState : AuthenticatorStore = {
    hasAuthToken: false,
    authToken: null,
    authenticatorSettingsLoaded: false,
    authenticatorSettings: null,
    hasAccount: false,
    accountEmail: null
}