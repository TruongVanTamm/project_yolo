import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      password: '',
      confirmedPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Vui lòng nhập trường này')
        .min(4, 'Tên quá ngắn, yêu cầu ít nhất 4 kí tự'),
      email: Yup.string()
      .required('Vui lòng nhập trường này')
        .matches(
           // eslint-disable-next-line
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          'Địa chỉ email không hợp lệ'
        ),
      password: Yup.string()
      .required('Vui lòng nhập trường này')
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          'Mật khẩu yêu cầu 7-19 ký tự, chứa ít nhất một chữ cái, một số và một ký tự đặc biệt'
        ),
      confirmedPassword: Yup.string()
      .required('Vui lòng nhập trường này')
        .oneOf([Yup.ref('password'), null], 'Mật khẩu không trùng khớp'),
      phone: Yup.string()
      .required('Vui lòng nhập trường này')
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          'Số điện thoại không hợp lệ'
        ),
    }),
    onSubmit: (values) => {
      window.alert('Form submitted');
    },
  });
  return (
    <section>
      <form
        className="infoform"
        onSubmit={formik.handleSubmit}
      >
        <label> Tên đăng nhập</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Họ Và Tên"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <p className="errorMsg"> {formik.errors.name} </p>
        )}
        {/* <label> Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email "
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <p className="errorMsg"> {formik.errors.email} </p>
        )} */}
      
        <label> Mật khẩu </label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Mật khảu"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && (
          <p className="errorMsg"> {formik.errors.password} </p>
        )}
           <div className="infoform__control">
          <button>
            <Link to="/signup">Đăng kí</Link>
          </button>
          <button type="submit"> Tiếp tục </button>
        </div>
      </form>
    </section>
  );
};

export default SignInForm ;
