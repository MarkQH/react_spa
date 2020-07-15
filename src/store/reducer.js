import { combineReducers } from 'redux-immutable';
// import { reducer as homeReducer } from "@/pages/Home";
import { reducer as newsReducer } from '@/pages/News/store';
import { reducer as newsDetailReducer } from "@/pages/Detail/store";
import { reducer as recommendReducer } from "@/pages/Recommend/store";
export default combineReducers ({
  recommend: recommendReducer,
  // home: homeReducer,
  news: newsReducer,
  newsDetail: newsDetailReducer,
});
