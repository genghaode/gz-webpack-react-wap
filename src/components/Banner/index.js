import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import { Link } from 'react-router'
import './index.css'

export const Banner = (props) => {
  const { bannerData } = props

  return (
    <div className="bannerWrap">
      <div className="bannerBox">
        <Carousel className="banner" autoplay infinite dots>
         {
            bannerData.map((item, index) => {
              return (
                <Link to={item.url} key={index} className="bannerItem">
                  <img src={item.img} className="bannerImg" />
                </Link>
              )
            })
          }
        </Carousel>
      </div>
    </div>

  )
}
