/*
 * notification component
 * @Author: JiangBao
 * @Date: 2018-08-22 17:18:00
 * @Last Modified by: JiangBao
 * @Last Modified time: 2018-08-22 18:09:52
 */
import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Notification extends Component {
  constructor() {
    super();
    this.transitionTime = 300;
    this.state = { notices: [] };
    this.removeNotice = this.removeNotice.bind(this);
  }

  getNoticeKey() {
    const { notices } = this.state;
    return `notice-${new Date().getTime()}-${notices.length}`;
  }

  addNotice(notice) {
    const noticeObj = { ...notice };
    const { notices } = this.state;
    noticeObj.key = this.getNoticeKey();

    if (notices.every(item => item.key !== noticeObj.key)) {
      notices.push(noticeObj);
      this.setState({ notices });
      if (noticeObj.duration > 0) {
        setTimeout(() => {
          this.removeNotice(noticeObj.key);
        }, noticeObj.duration);
      }
    }

    return () => { this.removeNotice(noticeObj.key); };
  }

  removeNotice(key) {
    const { notices } = this.state;
    this.setState({
      notices: notices.filter((notice) => {
        if (notice.key === key) {
          return false;
        }
        return true;
      }),
    });
  }

  render() {
    const { notices } = this.state;
    return (
      <TransitionGroup className="toast-notification">
        {
          notices.map(notice => (
            <CSSTransition
              key={notice.key}
              classNames="toast-notice-wrapper notice"
              timeout={this.transitionTime}
            >
              <div className="toast-notice">
                <span>{notice.content}</span>
              </div>
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    );
  }
}

export default Notification;
