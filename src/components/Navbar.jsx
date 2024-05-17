import React from 'react'

//import components from ant design library
import { Button, Menu, Typography, Avatar } from 'antd';

import { Link } from 'react-router-dom';

//import icons from ant design icons
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

//import icon
import { icon } from '../images';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Menu theme="light">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>

        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>

        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar
