import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const SignupForm = () => {
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
      console.log(values);
    },
  });
  return (
    <section>
      <form
        className="infoform"
        onSubmit={formik.handleSubmit}
      >
        <label> Tên khách hàng </label>
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
        <label> Email</label>
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
        )}
        <label> Số điện thoại</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Số điện thoại"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone && (
          <p className="errorMsg"> {formik.errors.phone} </p>
        )}
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
        <label> Nhập lại mật khảu </label>
        <input
          type="text"
          id="confirmedPassword"
          name="confirmedPassword"
          placeholder="Xác nhận mật khẩu"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmedPassword && (
          <p className="errorMsg"> {formik.errors.confirmedPassword} </p>
        )}
        <button type="submit"> Tiếp tục </button>
      </form>
    </section>
  );
};

export default SignupForm;
