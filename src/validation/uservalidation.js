import * as yup from 'yup';

const userSchema = yup.object().shape({
    user: yup.string('Must be a string').required('You must enter a value')
})

export default userSchema;