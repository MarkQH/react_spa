import { CHANGE_CURRENT_ALBUM, CHANGE_ENTER_LOADING } from "./constants";

import { fromJS } from 'immutable';

const changeCurrentAlbum = (data) => ({
  type: CHANGE_CURRENT_ALBUM,
  data: fromJS(data)
});

export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data
});

export const getAlbumList = (id) => {
  return dispatch => {
    getAlbumDetailRequest(id)
      .then(d => {
        let data = d.playlist;
        dispatch(changeCurrentAlbum(data));
        dispatch(changeEnterLoading(false));
      })
      .catch(() => {
        console.log('获取 album 数据失败！')
      });
  }
};
