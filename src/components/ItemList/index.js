import React, { Component } from 'react'
import { ActivityIndicator, ListView } from 'antd-mobile'
import './index.css'


class _ItemList extends Component {
  constructor(props) {
    super(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })

    this.state = {
      dataSource: dataSource.cloneWithRows(props.itemListData.data),
      isLoading: false
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.itemListData.status != 'nomore' && nextProps.itemListData !== this.props.itemListData) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.itemListData.data),
        isLoading: false
      })
    }
  }

  onEndReached(e) {
    if (!this.state.isLoading && this.props.itemListData.status != 'nomore') {
      this.props.getItemListLoadData()
    }
    this.setState({
      isLoading: true
    })
  }

  render() {
    const separator = (sectionID, rowID) => (<div className="itemRowSeparator" key = { `${sectionID}-${rowID}` }/>)

    const row = (rowData, sectionID, rowID) => {
      return (
        <div key = { rowID } className="itemRowWrap">
          <div className="itemRowImgWrap">
            <img className="itemRowImg" src={rowData.img} />
          </div>
          <div className="itemRowInfoWrap">
            <h3 className="itemRowTitle">{rowData.title}</h3>
            <div className="itemRowInfo">
              <span className="itemRowTime">{rowData.time}</span>
              <span className="itemRowfowllerNum"><i className="iconfont icon-favorfill"></i> { rowData.fowllerNum }</span>
            </div>
          </div>
        </div>
      )
    }

    return ( 
      <ListView className = "itemListView am-list"
        dataSource = { this.state.dataSource }
        renderRow = { row }
        renderSeparator = { separator }
        initialListSize = { 10 }
        pageSize = { 10 }
        scrollRenderAheadDistance = { 500 }
        scrollEventThrottle = { 20 }
        renderFooter = {
          () => {
            if (this.props.itemListData.status != 'nomore') {
              return <ActivityIndicator className="itemListFooter" animating={this.state.isLoading} text="加载中..."/>
            } else {
              return <div className="itemListFooter">没有更多数据了</div>
            }
          }
        }
        style = {{ height: document.documentElement.clientHeight * 3 / 4 }}
        onEndReached = {
          (e) => this.onEndReached(e)
        }
        onEndReachedThreshold = { 10 }
        useBodyScroll 
      />
    )

  }
}
export const ItemList = _ItemList

