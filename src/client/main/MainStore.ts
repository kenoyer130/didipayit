
export enum MainView {
    Upcoming,
    Paid
}

export interface BillInstance {
    _id: number,
    name: string,
    amount: number,
    dueDate: Date,
    paid: boolean
}

export interface MainStore {
    selectedDate: Date,
    selectedView: MainView,
    billInstances: BillInstance[] 
}

export const DefaultMainState: MainStore = {
    selectedDate: new Date(),
    selectedView: MainView.Upcoming,
    billInstances: []
}