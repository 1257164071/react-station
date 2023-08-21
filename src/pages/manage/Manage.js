import "./manage.scss"
import { useState,useEffect } from 'react';
import { NavBar, Toast, Cell, Tabs, Calendar } from '@nutui/nutui-react';
import { Left, Share, Close } from '@nutui/icons-react'
import { useNavigate, Link } from 'react-router-dom';

import request from '../../utils/axios'

export default function (){
    const navigate = useNavigate();
    const [list, setList] = useState([])
    const [tab1value, setTab1value] = useState('recharge');
    const [date1, setDate1] = useState([])
    const [isVisible1, setIsVisible1] = useState(false)
    const openSwitch1 = () => {
        setIsVisible1(true)
    }

    const closeSwitch1 = () => {
        setIsVisible1(false)
    }
    const getList = function (){
        request.get("/station/station/manage",{"params":{token:localStorage.getItem("token"),'type': tab1value,'create_time[]': date1[0],'create_time[1]': date1[1]}}).then((response)=>{
            // setUsers(response['data']['data'])
            setList(response['data'])
        })
    }

    const setChooseValue1 = (param: string) => {
        setDate1([...[param[0][3], param[1][3]]])
    }


    useEffect(() => {
        // if(queryParams.get('token')){
        //     localStorage.setItem('token', queryParams.get('token'));
        // }
        getList();
        console.log(date1)
    },[tab1value,date1]);

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
                    财务管理
                </span>
            </NavBar>
            <Cell className="timepicker" title={ date1.length ? `${date1[0]}至${date1[1]}` : '选择日期范围'} onClick={ openSwitch1 } align="center" />
            <Calendar
                visible={ isVisible1 }
                defaultValue={ date1 }
                startDate="2019-7-20"
                type="range"

                onClose={ closeSwitch1 }
                onConfirm={ setChooseValue1 }
            />

            <Tabs value={tab1value} onChange={(value) => {
                setTab1value(value)
            }}>
                <div title="余额记录" value="recharge"></div>
                <div title="积分记录" value="integral"></div>
            </Tabs>

            <div className="list">
                {list.map(item=>
                    <>
                        <Cell title={item.msg} description={item.create_time} extra={(item.edit=="1"?'+':'-' )+ (tab1value=="recharge"? item.balance : item.integral)} className="address_info"/>
                    </>
                )}
            </div>

        </>
    )
}