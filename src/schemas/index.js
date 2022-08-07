import * as yup from 'yup';

export const bacicSchema = yup.object().shape({
  username: yup.string().min(1).required('Required'),
  venuename: yup.string().min(1).required('Required'),
  venuecity: yup.string().min(1).required('Required'),
  statecity: yup.string().min(1).required('Required'),
  email: yup.string().email('Please enter a valid email').required(),
  subject: yup.string().min(1).required('Required'),
  message: yup.string().min(1).required('Required'),
});
