import axios from 'axios';

const getUsersList = () => {
  return (dispatch, getState) => {
    const {listData} = getState().UsersListReducer;
    axios
      .get('https://reqres.in/api/users?page=1')
      .then(res => {
        console.log(res.data.data);
        dispatch({type: 'SET_DATA', payload: {listData: [...res.data.data]}});
      })
      .catch(err => {
        console.log('api err', err);
      });
  };
};

export default getUsersList;
