import roles from '../static/roles.json';

export function getUserRole(roleId) {
    for (var x in roles) {
        if (roles[x].id === roleId) {
            return (roles[x].name);
        }
    }
}

export default function validate(values) {
    let errors = {};
    if (!values.name) {
        errors.name = 'Name is required';
    } if (!values.email) {
        errors.email = 'Email address is required';
    } if (!values.countryCode) {
        errors.countryCode = 'Country code address is required';
    } if (!values.mobile) {
        errors.mobile = 'Mobile number is required';
    } if (!values.role) {
        errors.role = 'Role is required';
    } if (!values.dob) {
        let dob = [];
        dob.push('Date of birth is required');
        errors.dob = dob;
    }

    return errors;
}

export function validateForm(errors){
    let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
}