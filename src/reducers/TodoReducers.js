const addPeople = (state, people) => {
    return { ...state, peopleList: [...state.peopleList, people].flat() };
};

const searchPeople = (state, people) => {
    return { ...state, peopleList: people };
};

const setLoadData = (state, load) => {
    return { ...state, loadData: load };
};

const setPageData = (state, page) => {
    return { ...state, pageData: parseInt(page) + 1 };
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PEOPLE':
            return addPeople(state, action.people);
        case 'SEARCH_PEOPLE':
            return searchPeople(state, action.people);
        case 'LOAD_DATA':
            return setLoadData(state, action.load);
        case 'PAGE_DATA':
            return setPageData(state, action.page);
        default:
            return state;
    }
};