import * as Yup from 'yup';

export const contactSchema = Yup.object({
  name: Yup.string().min(5,'حداقل 5 حرف').max(40,'حداکثر 40 حرف').required('نام الزامی است.'),
  email: Yup.string().email('ایمیل معتبر نیست.').required('ایمیل الزامی است.'),
  message: Yup.string().min(10,'حداقل 10 حرف').required('متن پیام الزامی است.')
});

export const sanitize = (v = '') =>
  v.replace(/</g, '&lt;').replace(/>/g, '&gt;');
