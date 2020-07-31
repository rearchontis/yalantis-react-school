import {Dispatch} from "react";

export interface User {
    id: string
    firstName: string
    lastName: string
    dob: string
}

export interface DispatchAction {
    type     : string
    payload ?: number | User[]
}

export interface State {
    selectedMonth: number
    users : User[]
}

export interface ContextState {
    state: State
    dispatch: Dispatch<DispatchAction>
}

export interface UserCardProps {
    firstName: string,
    lastName: string,
    month: number,
}