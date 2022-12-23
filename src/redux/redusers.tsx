import { RECENT_POSTS } from './types';


const initialState = { 
    recentPosts: [
        {id: 1, text: 'text'}
    ]
};


const mainReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case RECENT_POSTS:
        return {
          ...state,
          recentPosts: action.recentPosts,
        };
      default:
        return state;
    }
};


export const recentPostsAC = (recentPosts: Array<string>[]) => {
    return { type: RECENT_POSTS, recentPosts };
  };

export default mainReducer;