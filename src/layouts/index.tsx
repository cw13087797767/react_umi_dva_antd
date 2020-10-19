import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { Layout, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import MenuComp from '@/components/menu';
import menuConfigData from '@/globalConfig/menu'

const BasicLayout: React.FC = (props:any) => {

  const {
    children,
    location
  } = props

  const [collapsed, setCollapsed] = useState(false)
  const [menuData, setMenuData] = useState<any[]>([])
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(['A1'])
  const [defaultOpenKeys, setDefaultOpenKeys] = useState(['A'])

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const getMenuData = () => {
    setMenuData(menuConfigData)
  }

  useEffect(() => {
    getMenuData()
  },[])

  const menuConfig:any = {
    menuData,
    defaultSelectedKeys,
    defaultOpenKeys,
    location
  }
  if (['/login','/404'].includes(location.pathname)) {
    return children
  }

  return (
    <Layout style={{height: '100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.menuTitle}>React实验系统</div>
        <MenuComp {...menuConfig} />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: '0 10px' }}>
          <Icon
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
