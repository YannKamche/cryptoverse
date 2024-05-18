import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

// Destructure the Title component from the Typography object
const { Title } = Typography
const Homepage = () => {
  return (
      <>
          <Title level={2} className='heading'>Global Crypto Stats</Title>
          <Row>
              <Col span={12}><Statistic title="Total Cryptocurrencies" value="" /></Col>
              <Col span={12}><Statistic title="Total Exchanges" value="" /></Col>
              <Col span={12}><Statistic title="Total Market Cap" value="" /></Col>
              <Col span={12}><Statistic title="Total 24h Volume" value="" /></Col>
              <Col span={12}><Statistic title="Total Markets" value="" /></Col>
          </Row>
    </>
  )
}

export default Homepage
