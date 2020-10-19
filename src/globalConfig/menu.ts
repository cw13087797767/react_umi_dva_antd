let menu: any[] = [
    {
        label: '云顶之弈',
        route: '/ydzy',
        id: 'A',
        child: [
            {
                label:'英雄大全',
                route:'/ydzy/allChress',
                id:'A1'
            },
            {
                label:'羁绊大全',
                route:'/ydzy/allJob',
                id:'A2'
            },
            {
                label:'职业大全',
                route:'/ydzy/allRace',
                id:'A3'
            },
            {
                label:'装备大全',
                route:'/ydzy/allEquip',
                id:'A4'
            }
        ],
    },
    {
        label: '菜单2',
        child: null,
        route: '/route2',
        id: 2
    },
    {
        label: '菜单3',
        child: [
            {
                label: '子菜单1',
                id: 100,
                route: '/route3',
            },
            {
                label: '子菜单2',
                id: 101,
                route: '/route4',
            },
            {
                label: '子菜单3',
                route: '/route5',
                id: 102
            },
        ],
        id: 3
    },
    {
        label: '菜单4',
        child: null,
        id: 4,
        route: '/route6',
    },
    {
        label: '测试菜单',
        child: null,
        id: 5,
        route: '/test',
    },
]
export default menu