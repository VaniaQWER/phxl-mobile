import React, { Component } from 'react'

import { Indexes } from 'phxl-mobile'

const data = [
  { key: 'A', title: 'A', 
    items: [ { name: '阿坝' }, { name: '阿拉善' }, { name: '阿巴嘎旗' },
    { name: '阿坝藏族羌族自治州' }, { name: '阿尔山市' }, { name: '阿合奇县' } ,
    { name: '阿克塞哈萨克族自治县' }, { name: '阿克苏市' }, { name: '阿克苏地区' } ,
    { name: '阿克陶县' }, { name: '阿拉尔市' }, { name: '阿拉山口市' }  ] 
  },
  { key: 'B', title: 'B', items: [ { name: '北京' }, { name: '保定' }, { name: '巴楚县' },
  { name: '巴东县' }, { name: '白城市' }, { name: '拜城县' },
  { name: '白河县' }, { name: '白朗县' }, { name: '拜泉县' },
  { name: '百色市' }, { name: '白沙黎族自治县' }, { name: '白山市' } ] },
  { key: 'C', title: 'C', items: [ { name: '苍南县' }, { name: '苍梧县' }, { name: '苍溪县' },
  { name: '沧县' }, { name: '沧源佤族自治县' }, { name: '沧州市' },
  { name: '曹县' }, { name: '册亨县' }, { name: '策勒县' },
  { name: '岑巩县' }, { name: '岑西县' }, { name: '察布查尔锡伯自治县' } ] },
]
export default class App extends Component {
  render () {
    return (
      <div>
        <Indexes data={data} animated={true}/>
      </div>
    )
  }
}
