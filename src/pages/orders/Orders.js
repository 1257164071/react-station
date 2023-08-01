import {NavBar, SearchBar, Toast,Button, Elevator,Cell,Card, Price, Tag,Tabs} from '@nutui/nutui-react';
import { Left, Share, Close } from '@nutui/icons-react'
import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import "./orders.scss"
const Navbar = function (){
    const navigate = useNavigate();
    return (
        <>
            <NavBar
                back={
                    <>
                        <Left name="left" color="#979797" />
                    </>
                }
                right={
                    <span onClick={(e) => Toast.show('icon')}>
                        <Share />
                    </span>
                }
                onBackClick={(e) => navigate("/")}
            >
                <span onClick={(e) => Toast.show("标题")}>
                    订单管理
                </span>
            </NavBar>

        </>
    );
}
const Search = ()=>{
    const [ search, setSearch ] = useState("");
    function change(val, e) {
        console.log(val)
        setSearch(val)
    }
    function submit() {
        console.log('asda')
    }

    return (
        <SearchBar
            //right="搜索"
            onChange={(val, e) => change(val, e)}
            onSearch={submit}
            placeholder="请输入手机号搜索"
        />
    );

}


const List = () => {
    const dataList = [
        {
            title: 'A',
            list: [
                {
                    name: '安徽',
                    id: 1,
                },
            ],
        },
        {
            title: 'B',
            list: [
                {
                    name: '北京',
                    id: 2,
                },
            ],
        },
        {
            title: 'G',
            list: [
                {
                    name: '广西',
                    id: 3,
                },
                {
                    name: '广东',
                    id: 4,
                },
            ],
        },
        {
            title: 'H',
            list: [
                {
                    name: '湖南',
                    id: 5,
                },
                {
                    name: '湖北',
                    id: 6,
                },
                {
                    name: '河南',
                    id: 7,
                },
            ],
        },
    ]
    const onItemClick = (key: string, item: any) => {
        console.log(key, JSON.stringify(item))
    }

    const onIndexClick = (key: string) => {
        console.log(key)
    }
    return (
        <>
            <div className="list-item">
                <div className="list-item-text" >
                    <Cell title="手机号: orderno" description="收货地址: create_time" extra="收货人名: status_text" className="address_info"/>

                    <Cell title="订单编号: orderno" description="下单时间: create_time" extra="订单状态: status_text" className="address_info_2" />

                    <div className="text_name" >
                        <span>  商品列表  </span>
                    </div>
                    <div className="goods_list">
                        <div className="goods_item" v-for="goods in item.ordergoods">
                            <Card
                                src="http://hjw.hj0539.com/static/images/left-top.png"
                                title="title"
                                shopName="数量:100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const Tabse = () => {
    const [tab1value, setTab1value] = useState('0');
    return (
        <>
            <Tabs value={tab1value} onChange={(value) => {
                setTab1value(value)
            }}>
                <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
                <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
                <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
            </Tabs>
        </>
    );
};

export default function (){

    return (
        <>
            <Navbar />
            <Search />
            <List />
        </>
    );
}