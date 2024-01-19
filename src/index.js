import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './ch03/Library';
import Clock from './ch04/Clock';
import CommentList from './ch05/CommentList';
import NotificationList from './ch06/NotificationList';
import Accommodate from './ch07/Accommodate';
import ConfirmButton from './ch08/ConfirmButton';
import LandingPage from './ch09/LandingPage';
import AttendanceBook from './ch10/AttendanceBook';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Library/> */}
//     {/* <Clock/> */}
//     {/* <CommentList/> */}
//     {/* <NotificationList/> */}
//     {/* <Accommodate/> */}
//     {/* <ConfirmButton/> */}
//     {/* <LandingPage/> */}
//     <AttendanceBook/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
  
//리액트 18버전 이후부터는 ReactDOM의 경로를 /client를 붙이고 밑의 방식과 같이한다.
ReactDOM.createRoot(document.getElementById("root")).render(<AttendanceBook/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
