import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'antd-mobile'
import { getBannerAction } from '../'
import { Banner } from '../../components'
import './index.css'

class _Home extends Component {
  componentWillmount() {
    if (!this.props.bannerData.length) {
      this.props.getBannerData()
    }
  }
  render() {
    const { bannerData } = this.props
    if (!bannerData.length) {
      return <ActivityIndicator
        animating="false"
        toast="true"
        text="加载中..."
      />
    }
    return (
      <div className="main">
        <Banner bannerData={bannerData} />
        Home
      </div>
    )
  }
}

export const Home = connect(
  (state) => {
    return {
      bannerData: state.bannerData
    }
  }, (dispatch) => {
    return {
      getBannerData: dispatch(getBannerAction())
    }
  }
)(_Home)
