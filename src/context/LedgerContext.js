import React, { createContext, useReducer } from 'react';

export const EntriesContext = createContext(null);
export const UserContext = createContext(1);
export const EntriesDispatchContext = createContext(null);

export function LedgerProvider({ children }) {
    const[entries, dispatch] = useReducer(entriesReducer, initialEntries);

    return (
        // <UserContext.Provider value={userId}>
            <EntriesContext.Provider value={entries}>
                <EntriesDispatchContext.Provider value={dispatch}>
                    {children}
                </EntriesDispatchContext.Provider>
            </EntriesContext.Provider>
        // </UserContext.Provider>
    );
}


export function entriesReducer(entries, action) {
    switch(action.type) {
        case 'added_entry': {
            return [
                ...entries, {
                    id: action.id, 
                    userId: action.userId, 
                    transDate: action.transDate, 
                    incomeExpense: action.incomeExpense, 
                    incExpType: action.incExpType, 
                    account: action.account, 
                    amount: action.amount, 
                    remarks: action.remarks, 
                    createdDateTime: action.createdDateTime
                }
            ];
        } 

        case 'got_entries': {
            return entries.filter(entry => (entry.transDate >= action.transDateFrom 
                && entry.transDate <= action.transDateTo));
        } 

        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export const initialEntries = [
    {id: 0, userId: 0, transDate: new Date('1900-01-01'), 
        incomeExpense: '', incExpType: '', account: '', amount: 0, createDateTime: new Date(Date.UTC(1900, 0, 1, 0, 0, 0, 0)), 
        remakrs: ''}
];