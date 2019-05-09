/*
 * 索引选择器 indexes
 * @Author: Ye YuChen 
 * @Date: 2019-05-06 13:55:19 
 * @Last Modified by: Ye YuChen
 * @Last Modified time: 2019-05-09 17:13:24
 * @ TODO: 动画效果优化
 */

import * as React from 'react';
import classnames from 'classnames';
import { scrollTop } from '../_utils/animation';
import '../../style/components/indexes.scss';

export interface IndexesItems {
  name: string;
}
export interface IndexesPropsData {
  key: string;
  title: string;
  items?: Array<IndexesItems>;
}
export interface IndexesProps {
  data?: Array<IndexesPropsData>
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => any;
  // 边界, 默认 5px
  bounds?: number; 
  animated?: boolean
}

class Indexes extends React.Component<IndexesProps, {}> {
  static defaultProps: IndexesProps = {
    bounds: 5,
    animated: false
  }
  _jumpTarget (key: string) {
      // fixed ts-lint；
      const { bounds=5, animated } = this.props;
      const node: any = document.querySelector(`#indexes-${key}`);
      const container: any = document.querySelector('.phxl-indexes');
      if (node && container) {
        if (animated) {
          scrollTop(node.offsetTop - bounds, 200, container);
        } else {
          container.scrollTop = node.offsetTop - bounds; 
        }
      }
  }
  render () {
    const { 
      data, 
      style, 
      className,
      onClick,
    } = this.props;
    return (
      <div className='phxl-indexes-wrapper'>
        <div 
          className={classnames('phxl-indexes', className)} 
          {...style}
        >
          {
            data && data.map((list: IndexesPropsData) => (
              <div key={list.key} className='phxl-indexes-list' id={`indexes-${list.key}`}>
                <div className='phxl-indexes-list-header'> { list.title } </div>
                {
                  list.items && list.items.map((item: IndexesItems) => (
                    <div key={item.name} 
                      className='phxl-indexes-list-item' 
                      onClick={() => onClick}> 
                      <span>{ item.name }</span>
                    </div>
                  ))
                }
              </div>
            ))
          }
          <div className='phxl-indexes-menu'>
            {
              data && data.map((list: IndexesPropsData) => (
                <span 
                  key={list.key} 
                  onClick={this._jumpTarget.bind(this, list.key)}> 
                    { list.title } 
                </span>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Indexes;