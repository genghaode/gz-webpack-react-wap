import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'antd-mobile'
import { getBannerAction, getItemListLoadAction } from './action'
import { Banner, ItemList } from '../../components'
import './index.css'

class _Home extends Component {
  constructor(props) {
    super(props)

    // 数据初始化
    if (!props.bannerData.length) {
      props.getBannerData()
    }
    if (props.itemListData.status != 'nomore' && !props.itemListData.data.length) {
      props.getItemListLoadData()
    }
  }
  render() {

    const { bannerData, itemListData, getItemListLoadData } = this.props
    if (!bannerData.length || (itemListData.status != 'nomore' && !itemListData.data.length)) {
      return <ActivityIndicator
        animating="false"
        toast="true"
        text="加载中..."
      />
    }
    return (
      <div className="main">
        <Banner bannerData={bannerData} />
        <ItemList itemListData={itemListData} getItemListLoadData={getItemListLoadData} />
      </div>
    )
  }
}

export const Home = connect(
  (state) => {
    return {
      bannerData: state.bannerData,
      itemListData: state.itemListData
    }
  }, (dispatch) => {
    return {
      getBannerData: () => dispatch(getBannerAction()),
      getItemListLoadData: () => dispatch(getItemListLoadAction())
    }
  }
)(_Home)
