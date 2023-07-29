import { Toast } from '@nutui/nutui-react';
import { Form, Button, InputNumber, Input, TextArea, NavBar, Radio } from '@nutui/nutui-react';
import { Left, Share, Close } from '@nutui/icons-react'
import { useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate();
    const onMenuChange = (value: string | number | boolean) => {
        switch (value) {
            case 'male':
                break
            case 'female':
                break
            default:
        }
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

            <Form
                labelPosition="right"
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
                        <Radio value="male">积分 (可用积分: 10000000)</Radio>
                        <Radio value="female">余额 (可用余额: 100000)</Radio>
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

