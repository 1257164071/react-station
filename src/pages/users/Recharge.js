import "./recharge.scss"
import { useEffect,useState } from 'react';
import { Form, Button, InputNumber, Input, TextArea, NavBar, Radio, Toast } from '@nutui/nutui-react';
import { Left, Share, Close } from '@nutui/icons-react'
import { useNavigate, useLocation } from 'react-router-dom';
import request from '../../utils/axios'

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state.user;
    const [me, setMe] = useState([]);

    const getMe = async ()=>{
        const res = await request.get("/station/station/me",{params:{token:localStorage.getItem("token")}})
        return res;
    }
    useEffect(() => {
        getMe().then((res)=>{
            setMe(res.data);
        })
    },[]);

    const onMenuChange = (value: string | number | boolean) => {
        console.log(location.state)

        switch (value) {
            case 'male':
                break
            case 'female':
                break
            default:
        }
    };
    const submitSucceed = function (value){
        request.post("/station/station/recharge",{token:localStorage.getItem("token"),user_id: user.id,...value}).then((response)=>{
            Toast.show("充值成功");
        }).catch(function ({response}) {
            Toast.show(response.data.message);
        });
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
                    用户充值
                </span>
            </NavBar>

            <div className="userinfo">
                <div className="info_left">
                    <img src={user.avatar}></img>
                    <div className="left_info">
                        <div>{user.nickname}</div>
                        <div>{user.telephone}</div>
                    </div>
                </div>
                <div className="info_right">

                </div>
            </div>

            <Form
                labelPosition="right"
                onFinish={(values) => submitSucceed(values)}
                footer={
                    <>
                        <Button nativeType="submit" block type="primary">
                            立即充值
                        </Button>
                    </>
                }
            >
                <Form.Item label="充值类型" name="gender">
                    <Radio.Group onChange={onMenuChange}>
                        <Radio value="male">积分 (可用积分: {me.integral})</Radio>
                        <Radio value="female">余额 (可用余额: {me.balance})</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    required
                    label="充值数量"
                    name="username"
                >
                    <Input
                        className="nut-input-text"
                        placeholder="请输入充值数量"
                        type="text"
                    />
                </Form.Item>
                <Form.Item label="充值备注" name="address">
                    <TextArea placeholder="请输入备注" maxLength={100} />
                </Form.Item>
            </Form>
        </>
    )
}
export default App;

