
import '../css/App.scss'

import { Link } from 'react-router-dom'
import { Right } from '@nutui/icons-react'
import request from '../utils/axios'
import { useState,useEffect } from 'react';

const Home = () => {
    const logo = "https://hjw.hj0539.com/static/images/left-top.png"
    const [station, setStation] = useState([]);

    const getData = async ()=>{
        const res = await request.get("/station/station/index",{"params":{token:localStorage.getItem("token")}});
        return res;
    }
    const backaaa = function (){
        console.log('dsfsf')
        window.wx.miniProgram.navigateBack({url:'pages/my/index'})
    }
    useEffect(() => {
        getData().then((res)=>{
            setStation(res['data'])
        })

    },[]);


    return (
        <>

            <div className="index">
                <div className="index-header">
                    <div className="logo">
                        <img src={logo} alt="" srcSet="" />
                    </div>
                    <div className="info">
                        <h1>海江网 - 站长后台管理</h1>
                        <h3>{station.name}</h3>
                    </div>
                </div>

                <div className="index-components">

                    <ol key="userctrl1">
                        <li>用户管理</li>
                        <ul>
                            <li key="userctrl2">
                                <Link key="userctr3" to="/userlist">
                                    用户管理
                                </Link>
                                <Right color="#979797" name="right"></Right>
                            </li>
                            <li key="userctrl3">
                                <Link key="userctr3" to="/jecz">
                                    用户充值
                                </Link>
                                <Right color="#979797" name="right"></Right>
                            </li>
                            {/*<li key="userctrl4">*/}
                            {/*    <Link key="userctr3" to="/ffdksfjds">*/}
                            {/*        用户实名*/}
                            {/*    </Link>*/}
                            {/*    <Right color="#979797" name="right"></Right>*/}
                            {/*</li>*/}
                        </ul>
                    </ol>
                    <ol key="userctrl2">
                        <li>订单管理</li>
                        <ul>
                            <li key="userctrl5">
                                <Link key="userctr3" to="/orders">
                                    到店订单
                                </Link>
                                <Right color="#979797" name="right"></Right>
                            </li>
                            <li key="userctrl6">
                                <Link key="userctr3" to="/ordersHistory">
                                    历史订单
                                </Link>
                                <Right color="#979797" name="right"></Right>
                            </li>
                        </ul>
                    </ol>
                    <ol key="userctrl31">
                        <li>财务管理</li>
                        <ul>
                            <li key="userctrl5">
                                <Link key="userctr3" to="/manage">
                                    财务管理
                                </Link>
                                <Right color="#979797" name="right"></Right>
                            </li>
                            <li key="userctrl6">
                                <Link key="userctr3" to="/managerecord">
                                    充值记录
                                </Link>
                                <Right color="#979797" name="right"></Right>
                            </li>
                        </ul>
                    </ol>
                    <ol key="userctrl32">
                        <li>系统功能</li>
                        <ul>
                            <li key="userctrl7" onClick={function (){backaaa()}}>
                                <a key="userctr3" to="/managerecord">
                                    返回用户端
                                </a>
                                <Right color="#979797" name="right"></Right>
                            </li>
                        </ul>
                    </ol>

                </div>
            </div>
        </>
    )
}
export default Home