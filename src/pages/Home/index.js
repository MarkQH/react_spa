import React from 'react';
import { renderRoutes } from "react-router-config";
import {
  Tab,
  TabItem,
} from './style';
import { NavLink } from 'react-router-dom';// 利用 NavLink 组件进行路由跳转

function Home(props) {
  const { route } = props;

  return (
    <div>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected"><TabItem><span > 推荐 </span></TabItem></NavLink>
        <NavLink to="/news" activeClassName="selected"><TabItem><span > 新闻 </span></TabItem></NavLink>
      </Tab>
      <img src={require('@/assets/images/test.jpg')} alt=""/>
      <img src={require('@/assets/images/index_banner1.jpg')} alt=""/>
      { renderRoutes(route.routes) }
    </div>
  )
}

export default React.memo(Home);
