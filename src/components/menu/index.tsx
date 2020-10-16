import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'umi'
const { SubMenu } = Menu

export default (props:any) => {

  const { menuData, defaultSelectedKeys, defaultOpenKeys, location } = props

  return(
    <Menu 
      theme="dark" 
      mode="inline" 
      defaultSelectedKeys={defaultSelectedKeys} 
      defaultOpenKeys={defaultOpenKeys}
    >
      {
        menuData && menuData.map((item:any) =>{
          if (item.child) {
            return <SubMenu key={item.id} title={
              <span>
                <Icon type="pie-chart" />
                {item.label}
              </span>
            }>
              {
                item.child.map((sonItem:any) => {
                  return <Menu.Item key={sonItem.id}>
                    <Link
                      to={sonItem.route}
                      replace={sonItem.route === location.pathname} 
                    >
                      <span>{sonItem.label}</span>
                    </Link>
                  </Menu.Item>
                })
              }
              </SubMenu>
          } else {
            return <Menu.Item key={item.id}>
              <Link
                to={item.route}
                replace={item.route === location.pathname} 
              >
                <Icon type="user" />
                <span>{item.label}</span>
              </Link>
            </Menu.Item>
          }
        })
      }
    </Menu>
  )
}