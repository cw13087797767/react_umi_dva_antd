import React, { useEffect, useState } from 'react'
import { connect } from 'dva'
import { message, Table, Tooltip  } from 'antd'

const allChressComponent: React.FC = (props:any) => {

    const { dispatch, allChess, allChessLoading } = props
    console.log(allChess)

    const getAllChess = () => {
        dispatch({
            type:'ydzy/getAllChess',
            payload:null,
            callback:() => {
                message.success("获取数据成功！")
            }
        })
    }
    useEffect(() =>{
        getAllChess()
    },[])


    return (
        <div>
            <Table 
                dataSource={allChess}
                loading={allChessLoading}
            >
                <Table.Column
                    width={100}
                    dataIndex="name"
                    key="name"
                    render={src => (
                        <span>
                            <img style={{height:'66px',width:'auto'}} src={"http://game.gtimg.cn/images/lol/act/img/tft/champions/"+src} alt=""/>
                        </span>
                    )}
                />
                <Table.Column 
                    dataIndex="title"
                    key="title"
                    render={text => text}
                    title="名称"
                />
                <Table.Column 
                    dataIndex="price"
                    key="price"
                    render={text => text}
                    title="星级"
                />
                <Table.Column 
                    dataIndex="races"
                    key="races"
                    render={text => text}
                    title="羁绊"
                />
                <Table.Column 
                    dataIndex="jobs"
                    key="jobs"
                    render={text => text}
                    title="职业"
                />
                <Table.Column 
                    dataIndex="skillImage"
                    key="skillImage"
                    render={(obj,record,index) =>(
                        <Tooltip title={()=>(
                            <>
                                <p>{allChess[index].skillName}</p>
                                <p>{allChess[index].skillDetail}</p>
                            </>
                        )}>
                            <img src={obj}/>
                        </Tooltip>
                    )}
                    title="技能"
                />

                

            </Table>
        </div>
    )
}

export default connect(({ ydzy, loading }: any) => ({
    allChess:ydzy.allChess,
    allChessLoading:loading.effects["ydzy/getAllChess"]
}))(allChressComponent)