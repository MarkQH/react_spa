import React, {useEffect} from 'react';
import moment from 'moment';
import { renderRoutes } from "react-router-config";
import {
  Tab,
  TabItem,
} from './style';
import { NavLink } from 'react-router-dom';// 利用 NavLink 组件进行路由跳转

function Home(props) {
  const { route } = props;
  
  const getMonent = () => {
    let now = moment();
    //当月第一天
    let firstDayOfMonth = now.clone().startOf('month');
    //当月第一天是星期几
    let weekOfFirstDay = firstDayOfMonth.isoWeekday();
    //日历上的当月显示的第一天,始为周一 则向前减少周几的天数-1即为 开始的日期
    let firstDayOfMonthDisplay = firstDayOfMonth.clone().subtract(weekOfFirstDay - 1, 'days');
     // 开始日期为周日
    let startDateOfMonth = firstDayOfMonth.clone().subtract(weekOfFirstDay, 'day');
    let endDateOfMonth = firstDayOfMonthDisplay.clone().add(41, 'day');
    console.log(now);
    console.log(firstDayOfMonth);
    console.log(weekOfFirstDay);
    console.log(firstDayOfMonthDisplay);
    console.log(startDateOfMonth);
    console.log(endDateOfMonth);
  }

  useEffect(() => {
    getMonent();
  }, []);
  return (
    <div>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected"><TabItem><span > 推荐 </span></TabItem></NavLink>
        <NavLink to="/news" activeClassName="selected"><TabItem><span > 新闻 </span></TabItem></NavLink>
      </Tab>
      { renderRoutes(route.routes) }
    </div>
  )
}

export default React.memo(Home);
