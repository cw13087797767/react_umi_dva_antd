import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path:'/login',
          component:'../pages/login'
        },
        {
          path: '/', 
          component: '../pages/index' 
        },
        {
          path:'/test',
          component:'../pages/test',
        },
        {
          path:'/404',
          component:'../pages/404'
        },
        {
          path:'/ydzy/allChress',
          component:'../pages/ydzy/allChress'
        },
        {
          path:'/ydzy/allJob',
          component:"../pages/ydzy/allJob"
        },
        {
          path:'/ydzy/allEquip',
          component:'../pages/ydzy/allEquip'
        },
        {
          path:'/ydzy/allRace',
          component:'../pages/ydzy/allRace'
        },
        {
          component:'../pages/404',
        }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'react_umi_dva_antd',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  proxy:{
    "/images/lol/act": {
      target: 'http://game.gtimg.cn'
    }
  }
}

export default config;
