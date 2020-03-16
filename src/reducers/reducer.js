let search = {
  data: ''
};
let sort = {
  data: 'asc' // 'desc'
};

let fakeInfo = {
  data: []
};

let sortTitle = {
  data: []
};

let arrow = {
  data: ''
};

function firstData(state = search, action) {
  switch (action.type) {
    case 'CHANGE_SEARCH_DATA':
      return { ...state, data: action.payload };

    default:
      return state
  }
}

function secondData(state = sort, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      return { ...state, data: action.payload };

    default:
      return state
  }
}

function thirdData(state = fakeInfo, action) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };

    default:
      return state
  }
}

function fourthData(state = sortTitle, action) {
  switch (action.type) {
    case 'SET_SORT_TITLE':
      return { ...state, data: action.payload };

    default:
      return state
  }
}

function fifthData(state = arrow, action) {
  switch (action.type) {
    case 'CHANGE_ARROW':
      return { ...state, data: action.payload };

    default:
      return state
  }
}

export default {firstData, secondData, thirdData, fourthData, fifthData};
