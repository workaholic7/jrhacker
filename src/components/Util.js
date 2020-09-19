import React from 'react';
import roles from '../static/roles.json';

export function getUserRole(roleId) {
    for (var x in roles) {
        if (roles[x].id === roleId) {
            return (roles[x].name);
        }
    }
}