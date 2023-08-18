import { NavBar, Toast } from '@nutui/nutui-react';
import { Left, Share, Close } from '@nutui/icons-react'
import { useNavigate, Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { SearchBar, Button } from '@nutui/nutui-react';
import "./users.scss"
import { useState,useEffect } from 'react';
import request from '../../utils/axios'


function LisItem({users}) {
    const navigate = useNavigate();

    const goToAboutPage = (user) => {
        navigate("/jecz",{state: {user: user}})
    };
    return (
        <>
            <div className="listIndex">
                {users.map(user=>
                    <div className="listItem">
                        <div className="userinfo">
                            <div className="info_left">
                                    <img src={user.avatar}></img>
                                <div className="left_info">
                                    <div>{user.nickname}</div>
                                    <div>{user.telephone}</div>
                                </div>
                            </div>
                            <div className="info_right">
                                <Button type="default" size="small" onClick={()=>{goToAboutPage(user)}}>
                                        余额充值
                                </Button>
                                <Button type="default" size="small">订单管理</Button>
                            </div>
                        </div>
                        <div className="user_detail">
                            <div>
                                <span>交易额</span> {user.jye}
                            </div>
                            <div>
                                <span>积分数</span> {user.integral}
                            </div>
                            <div>
                                <span>会员截止</span> {user.hyzt}
                            </div>

                            <div>
                                <span>订单数</span> {user.dys}
                            </div>
                            <div>
                                <span>余额数</span> {user.balance}
                            </div>
                            <div>
                                <span>实名状态</span> {user.smzt}
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    );
}

export default function () {
    const navigate = useNavigate();
    const [ search, setSearch ] = useState("");
    function change(val, e) {
        console.log(val)
        setSearch(val)
    }
    const [users, setUsers] = useState([]);
    const getList = function (){
        request.get("/station/station/users",{"params":{token:localStorage.getItem("token"),'telephone':search}}).then((response)=>{
            setUsers(response['data']['data'])
        })
    }
    function submit() {
        console.log('sdfds')
        getList();
    }

    useEffect(()=>{
        getList();
    },[])

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
                    用户列表
                </span>
            </NavBar>

            <SearchBar
                //right="搜索"
                onChange={(val, e) => change(val, e)}
                onSearch={submit}
                placeholder="请输入手机号搜索"
            />
            <LisItem users={users}/>


        </>
    );
}