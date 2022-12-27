import { RECENT_POSTS, RECENT_WORKS } from './types';


const initialState = { 
  recentPosts: [],
  recentWorks: [],
};

const mainReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case RECENT_POSTS:
      return {
        ...state,
        recentPosts: action.recentPosts,
      };
    case RECENT_WORKS:
      return {
        ...state,
        recentWorks: action.recentWorks,
      };
    default:
      return state;
  }
};


export const recentPostsAC = (recentPosts: Array<string>[]) => {
  return { type: RECENT_POSTS, recentPosts };
};

export const recentWorksAC = (recentWorks: Array<string>[]) => {
  return { type: RECENT_WORKS, recentWorks };
};

export default mainReducer;