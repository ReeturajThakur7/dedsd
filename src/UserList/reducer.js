const initialState = {
  listData: [],
};

const UsersListReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'SET_DATA':
      return {...state, ...payload};

    default:
      return {...state};
  }
};

export default UsersListReducer;
