import React, { createContext, useReducer } from 'react';

import { reducer } from "../reducers";

const initialState = {
    peopleList: [],
    loadData: true,
    pageData: 1,
};

export const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};