export interface AuthenticatorStore {
    hasAuthToken: boolean
}

export const DefaultState : AuthenticatorStore = {
    hasAuthToken: false
}