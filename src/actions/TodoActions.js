export const addPeople = (people, dispatch) => {
    dispatch({
        type: 'ADD_PEOPLE',
        people,
    })
};

export const searchPeople = (people, dispatch) => {
    dispatch({
        type: 'SEARCH_PEOPLE',
        people,
    })
};

export const setLoadData = (load, dispatch) => {
    dispatch({
        type: 'LOAD_DATA',
        load,
    })
};

export const setPageData = (page, dispatch) => {
    dispatch({
        type: 'PAGE_DATA',
        page,
    })
};