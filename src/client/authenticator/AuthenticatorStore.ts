import AuthenticatorSettings from "./types/AuthenticatorSettings"

export interface AuthenticatorStore {
    authenticatorSettings?: AuthenticatorSettings
    hasAuthToken: boolean
}

export const DefaultState : AuthenticatorStore = {
    hasAuthToken: false,
    authenticatorSettings: null
}