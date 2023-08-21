import {NavBar, SearchBar, Toast,Button, Elevator,Cell,Card, Price, Tag,Tabs, Dialog} from '@nutui/nutui-react';
import { Left, Share, Close } from '@nutui/icons-react'
import { useNavigate,useLocation } from 'react-router-dom';
import {useState, useEffect} from "react";
import request from '../../utils/axios'

import "./orders.scss"
const Navbar = function ({user}){
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
                    {user.nickname == undefined?'历史订单管理':user.nickname+" ("+user.telephone+") 的订单"}
                </span>
            </NavBar>

        </>
    );
}
const Search = ({search,setSearch, tab1value,setTab1value,searchChange})=>{

    function change(val, e) {
        setSearch(val)
    }
    function submit() {
        searchChange()
    }

    return (
        <>
            <Tabs onChange={(value) => {
                setTab1value(value)
                searchChange()
            }}>
                <div title="全部" value="all"></div>
                <div title="待发货" value="2"></div>
                <div title="配送中" value="3"></div>
                <div title="待收货" value="4"></div>
                <div title="已完成" value="5"></div>
                <div title="已取消" value="-1"></div>
            </Tabs>

            <SearchBar
                //right="搜索"
                onChange={(val, e) => change(val, e)}
                onSearch={submit}
                placeholder="请输入手机号搜索"
            />

        </>
    );

}


const List = ({orders}) => {
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
    const OrderButtom = function ({order}){

        const community = function (){
            // request.get("/station/station/orders",{"params":{token:localStorage.getItem("token"),telephone:search, status: tab1value}}).then((response)=>{
            //     // setUsers(response['data']['data'])
            //     setOrders(response['data']['data'])
            // })

            Dialog.alert({
                title: '提示',
                content: '社区收货, 是否继续?。',
                onConfirm: function (){
                    request.get("/station/station/community",{"params":{token:localStorage.getItem("token"), "order": order.id}}).then((response)=>{
                        // setUsers(response['data']['data'])
                        Toast.show('社区收货确认成功')
                    }).catch(function ({response}) {
                        Toast.show(response.data.message ? response.data.message : '网络链接失败');
                    });
                },
            });

        }
        const done = function (){
            // request.get("/station/station/orders",{"params":{token:localStorage.getItem("token"),telephone:search, status: tab1value}}).then((response)=>{
            //     // setUsers(response['data']['data'])
            //     setOrders(response['data']['data'])
            // })
            Dialog.alert({
                title: '提示',
                content: '用户收货, 是否继续?。',
                onConfirm: function (){
                    request.get("/station/station/done",{"params":{token:localStorage.getItem("token"), "order": order.id}}).then((response)=>{
                        // setUsers(response['data']['data'])
                        Toast.show('用户收货确认成功')
                    }).catch(function ({response}) {
                        Toast.show(response.data.message ? response.data.message : '网络链接失败');
                    });

                },
            });

        }

        switch (Number(order.status)) {
            case 2:
                return <Button fill="outline"  type="info" size="small" disabled>待平台发货</Button>
                break;
            case 3:
                return <Button fill="outline"  type="info" size="small" onClick={()=>{community()}}>社区收货</Button>
                break;
            case 4:
                return <Button fill="outline"  type="info" size="small" onClick={()=>{done()}}>用户收货</Button>
                break;
            case 1:
                return <Button fill="outline"  type="info" size="small" disabled>等待付款</Button>
                break;
            case 0:
                return <Button fill="outline"  type="info" size="small" disabled>订单取消</Button>
                break;
            case 99:
                return <Button fill="outline"  type="info" size="small" disabled>订单退款</Button>
                break;
            case 5:
                return <Button fill="outline"  type="info" size="small" disabled>订单完成</Button>
                break;
        }
    }
    return (
        <>
            <div className="list-item">
                {orders.map(order=>

                    <div className="list-item-text" >
                        <Cell title={"手机号: "+order.telephone} description={"收货地址: " + (order.address==null ? '站点自提':order.address)} extra={"收货人名: "+order.consignee} className="address_info"/>

                        <Cell title={order.orderno} description={"下单时间: "+order.create_time} extra={"订单状态: "+order.status_text} className="address_info_2" />
                        {/*<div className="text_name" >*/}
                        {/*    <span>  商品列表  </span>*/}
                        {/*</div>*/}
                        {order.ordergoods.map(goods=>
                            <div className="goods_list">
                                <div className="goods_item" v-for="goods in item.ordergoods">
                                    <Card
                                        src={goods.goods_cover}
                                        title={goods.goods_name}
                                        shopName={"数量: "+ goods.number +"  商品id: "+goods.goods_id}
                                    />
                                </div>
                            </div>
                        )}
                        {/*<div className="list_buttom">*/}
                        {/*    <OrderButtom order={order}></OrderButtom>*/}
                        {/*</div>*/}
                    </div>
                )}
            </div>
        </>
    )
}

export default function (){

    const [ search, setSearch ] = useState("");
    const [tab1value, setTab1value] = useState('all');
    const [orders, setOrders] = useState([]);
    const location = useLocation();
    const [user, setUser] = useState([]);
    const getList = function (){
        let params = {token:localStorage.getItem("token"),telephone:search, status: tab1value};
        if (location.state){
            params['uid'] = location.state.user.id;
            setUser(location.state.user)
        }
        request.get("/station/station/orders",{"params":params}).then((response)=>{
            // setUsers(response['data']['data'])
            setOrders(response['data']['data'])
        })
    }
    const searchChange= function (){
        getList();
    }

    useEffect(()=>{
        getList();
    },[tab1value,user])
    return (
        <>
            <Navbar user={user}/>
            <Search search={search} setSearch={setSearch} tab1value={tab1value} setTab1value={setTab1value} searchChange={searchChange}/>
            <List orders={orders}/>
        </>
    );
}