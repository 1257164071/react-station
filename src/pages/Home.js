
import '../css/App.scss'

import { Link } from 'react-router-dom'
import { Right } from '@nutui/icons-react'

const Home = () => {
    const logo = "http://hjw.hj0539.com/static/images/left-top.png"
    return (
        <>

            <div className="index">
                <div className="index-header">
                    <div className="logo">
                        <img src={logo} alt="" srcSet="" />
                    </div>
                    <div className="info">
                        <h1>海江网 - 站长后台管理</h1>
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
                            <li key="userctrl4">
                                <Link key="userctr3" to="/ffdksfjds">
                                    用户实名
                                </Link>
                                <Right color="#979797" name="right"></Right>
                            </li>
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
                                <Link key="userctr3" to="/ffdksfjds">
                                    历史订单
                                </Link>
                                <Right color="#979797" name="right"></Right>
                            </li>
                        </ul>
                    </ol>
                    <ol key="userctrl3">
                        <li>财务管理</li>
                        <ul>
                            <li key="userctrl5">
                                <Link key="userctr3" to="/ffdksfjds">
                                    余额管理
                                </Link>
                                <Right color="#979797" name="right"></Right>
                            </li>
                            <li key="userctrl6">
                                <Link key="userctr3" to="/ffdksfjds">
                                    积分管理
                                </Link>
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