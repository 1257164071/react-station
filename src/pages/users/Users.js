import { NavBar, Toast } from '@nutui/nutui-react';
import { Left, Share, Close } from '@nutui/icons-react'
import { useNavigate } from 'react-router-dom';
import { SearchBar, Button } from '@nutui/nutui-react';
import "./users.scss"
import { useState } from 'react';


function LisItem() {

    return (
        <>
            <div className="listIndex">
                <div className="listItem">
                    <div className="userinfo">
                        <div className="info_left">
                                <img src="http://hjw.hj0539.com/static/images/left-top.png"></img>
                            <div className="left_info">
                                <div>海之水</div>
                                <div>18265197620</div>
                            </div>
                        </div>
                        <div className="info_right">
                            <Button type="default" size="small">余额充值</Button>
                            <Button type="default" size="small">积分充值</Button>
                        </div>
                    </div>
                    <div className="user_detail">
                        <div>
                            <span>交易额</span> 0.00
                        </div>
                        <div>
                            <span>积分数</span> 0
                        </div>
                        <div>
                            <span>会员状态</span> 付费会员
                        </div>

                        <div>
                            <span>订单数</span> 0
                        </div>
                        <div>
                            <span>余额数</span> 0
                        </div>
                        <div>
                            <span>实名状态</span> 未实名
                        </div>
                    </div>
                </div>
                <div className="listItem">
                    <div className="userinfo">
                        <div className="info_left">
                            <img src="http://hjw.hj0539.com/static/images/left-top.png"></img>
                            <div className="left_info">
                                <div>海之水</div>
                                <div>18265197620</div>
                            </div>
                        </div>
                        <div className="info_right">
                            <Button type="default" size="small">余额充值</Button>
                            <Button type="default" size="small">积分充值</Button>
                        </div>
                    </div>
                    <div className="user_detail">
                        <div>
                            <span>交易额</span> 0.00
                        </div>
                        <div>
                            <span>积分数</span> 0
                        </div>
                        <div>
                            <span>会员状态</span> 付费会员
                        </div>

                        <div>
                            <span>订单数</span> 0
                        </div>
                        <div>
                            <span>余额数</span> 0
                        </div>
                        <div>
                            <span>实名状态</span> 未实名
                        </div>
                    </div>
                </div>
                <div className="listItem">
                    <div className="userinfo">
                        <div className="info_left">
                            <img src="http://hjw.hj0539.com/static/images/left-top.png"></img>
                            <div className="left_info">
                                <div>海之水</div>
                                <div>18265197620</div>
                            </div>
                        </div>
                        <div className="info_right">
                            <Button type="default" size="small">余额充值</Button>
                            <Button type="default" size="small">积分充值</Button>
                        </div>
                    </div>
                    <div className="user_detail">
                        <div>
                            <span>交易额</span> 0.00
                        </div>
                        <div>
                            <span>积分数</span> 0
                        </div>
                        <div>
                            <span>会员状态</span> 付费会员
                        </div>

                        <div>
                            <span>订单数</span> 0
                        </div>
                        <div>
                            <span>余额数</span> 0
                        </div>
                        <div>
                            <span>实名状态</span> 未实名
                        </div>
                    </div>
                </div>

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
    function submit() {
        console.log('asda')
    }
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
            <LisItem></LisItem>


        </>
    );
}