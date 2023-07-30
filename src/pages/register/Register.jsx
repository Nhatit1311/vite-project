import { Button, Divider, Form, Input, message, notification } from "antd";
import './register.scss';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { callRegister } from "../../services/API";

const Register = () => {
    const navigate = useNavigate(); // dùng useNavigate để điều hướng trang
    const [isSubmit, setIsSubmit] = useState(false); // loading khi nhấn submit
    const onFinish = async (values) => {
        const {username, email, password, phone} = values;
        setIsSubmit(true);
        const res = await callRegister(username, email, password, phone); // gọi API truyền các tham số đầu vào
        setIsSubmit(false);
        if(res?.data?._id) {
            message.success('Đăng ký tài khoản thành công!');
            navigate('/login')
        }else {
            notification.error({
                message: "Có lỗi xảy ra",
                description:
                    res.message && Array.isArray(res.message) ? res.message[0] : res.message,
                duration: 5
            })
        }
    };
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
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item labelCol={{ span: 24 }} label="Họ Và Tên" name="username" 
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
                                <Button type="primary" htmlType="submit" loading={isSubmit}>Đăng Ký</Button>
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
