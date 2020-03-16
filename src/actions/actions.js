const actions = {
    setData: (data) => ({type: 'SET_DATA', payload: data}),
    changeSearchData: (searchData) => ({type: 'CHANGE_SEARCH_DATA', payload: searchData}),
    changeSort: (sort) => ({type: 'CHANGE_SORT', payload: sort}),
    setSortTitle: (sortField) => ({type: 'SET_SORT_TITLE', payload: sortField}),
    changeArrow: (arrow) => ({type: 'CHANGE_ARROW', payload: arrow}),
  }
;

export default actions;
