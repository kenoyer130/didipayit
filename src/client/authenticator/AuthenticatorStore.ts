import AuthenticatorSettings from "./types/AuthenticatorSettings"

export interface AuthenticatorStore {
    hasAuthToken: boolean
    authenticatorSettingsLoaded: boolean
    authenticatorSettings?: AuthenticatorSettings
}

export const DefaultState : AuthenticatorStore = {
    hasAuthToken: false,
    authenticatorSettingsLoaded: false,
    authenticatorSettings: null
}