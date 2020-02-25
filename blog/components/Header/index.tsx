import React from 'react';
import { Menu, Row, Col, Icon } from 'antd';
import './header.less';
const Header: () => JSX.Element = () => {
  return (
    <div className="blog_header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header_logo">指甲盖</span>
          <span className="header_desc">指甲盖的个人微博</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Icon type="home" />
              首页
            </Menu.Item>
            <Menu.Item key="article">
              <Icon type="html5" />
              文章
            </Menu.Item>
            <Menu.Item key="life">
              <Icon type="smile" />
              生活
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
