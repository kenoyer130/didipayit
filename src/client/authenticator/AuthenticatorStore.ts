import AuthenticatorSettings from "./types/AuthenticatorSettings"
import Account from "../models/Account"

export interface AuthenticatorStore {
    isLocal: boolean,
    hasAuthToken: boolean,
    authToken: string,
    authenticatorSettingsLoaded: boolean
    authenticatorSettings?: AuthenticatorSettings,
    hasAccount: boolean,
    joinExistingFamily: boolean,
    valid: boolean,
    violation?: string,
    account: Account
}

export const DefaultState : AuthenticatorStore = {
    isLocal: window.location.hostname === 'localhost',
    hasAuthToken: false,
    authToken: null,
    authenticatorSettingsLoaded: false,
    authenticatorSettings: null,
    hasAccount: false,
    joinExistingFamily: false,
    valid: true,
    violation: null,
    account: null
}