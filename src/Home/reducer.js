const initialValue = {
  DATA: [],
  index: -1,
  toggleBtn: true,
};

const HomeReducer = (state = initialValue, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'ADD':
      return {...state, DATA: [...state.DATA, payload]};
    case 'DELETE':
      return {...state, DATA: payload.DATA};
    default:
      return {...state};
  }
};
export default HomeReducer;
