/*
 * entry
 * @Author: JiangBao
 * @Date: 2018-08-22 17:05:10
 * @Last Modified by: JiangBao
 * @Last Modified time: 2018-08-24 15:47:47
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Notification from './notification';

/* eslint-disable */
let notification;
const DURATION = 1500;

/**
 * create notification dom
 */
function createNotification() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const notification = ReactDOM.render(<Notification />, div);
  return {
    addNotice(notice) {
      return notification.addNotice(notice);
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
  };
}

const Toast = (content, duration = DURATION) => {
  if (!notification) {
    notification = createNotification();
  }
  return notification.addNotice({ content, duration });
};

export default Toast;
