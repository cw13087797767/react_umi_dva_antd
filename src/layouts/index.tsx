import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { Layout, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import MenuComp from '@/components/menu';

const BasicLayout: React.FC = (props:any) => {

  const {
    children,
    location
  } = props

  const [collapsed, setCollapsed] = useState(false)
  const [menuData, setMenuData] = useState<any[]>([])
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(['100'])
  const [defaultOpenKeys, setDefaultOpenKeys] = useState(['3'])

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const getMenuData = () => {
    let menu:any[] = [
      {
        label:'菜单1',
        child:null,
        route:'/route1',
        id:1
      },
      {
        label:'菜单2',
        child:null,
        route:'/route2',
        id:2
      },
      {
        label:'菜单3',
        child:[
          {
            label:'子菜单1',
            id:100,
            route:'/route3',
          },
          {
            label:'子菜单2',
            id:101,
            route:'/route4',
          },
          {
            label:'子菜单3',
            route:'/route5',
            id:102
          },
        ],
        id:3
      },
      {
        label:'菜单4',
        child:null,
        id:4,
        route:'/route6',
      },
      {
        label:'测试菜单',
        child:null,
        id:5,
        route:'/test',
      },
    ]
    setMenuData(menu)
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
