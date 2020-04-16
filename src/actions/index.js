
import jsonPlaceHolder from '../apis/jsonPlaceHolder'

export const fetchPostsAndUsers = () =>async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userId = [...new Set(getState().posts.map(user => user.userId))];
    userId.forEach(id => dispatch(fetchUser(id)));    
}

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');

        dispatch({type: 'FETCH_POST', payload: response.data});
    }


export const fetchUser = (id) => async dispatch => {
    const res1 = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: res1.data})
}