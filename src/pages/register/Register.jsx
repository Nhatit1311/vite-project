
import { Button, Divider, Form, Input } from "antd";
import './register.scss';
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register = () => {
    return (
        <div className="register-page">
            <main className="main">
                <div className="container">
                    <section className="wrapper">
                        <div className="heading">
                            <h2 className="text text-large" style={{ textAlign: "center", fontWeight: '600' }}>ĐĂNG KÝ</h2>
                            <Divider/>
                        </div>
                        <Form name="basic" style={{maxWidth: 600, margin: '0 auto'}} 
                            initialValues={{remember: true,}}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item labelCol={{ span: 24 }} label="Họ Và Tên" name="name" 
                                rules={[{required: true, message: "Vui lòng nhập tên của bạn!",},]}>
                                <Input />
                            </Form.Item>
                            <Form.Item labelCol={{ span: 24 }} label="Email" name="email" 
                                rules={[{required: true, message: "Vui lòng nhập email của bạn!",},]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item labelCol={{ span: 24 }} label="Mật Khẩu" name="password" 
                                rules={[{required: true, message: "Vui lòng nhập mật khẩu của bạn!",},]}>
                                <Input.Password/>
                            </Form.Item>
                            <Form.Item labelCol={{ span: 24 }} label="Số Điện Thoại" name="phone" 
                                rules={[{required: true, message: "Vui lòng nhập số điện thoại của bạn!",},]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item wrapperCol={{offset: 8, span: 16,}}>
                                <Button type="primary" htmlType="submit">Đăng Ký</Button>
                            </Form.Item>
                            <Divider>Or</Divider>
                            <p className="text text-normal">Đã có tài khoản ?
                                <span>
                                    <Link to='/login'> Đăng Nhập</Link>
                                </span>
                            </p>
                        </Form>
                    </section>
                </div>
            </main>
        </div>
    )
}
export default Register;
