 import {getAllUsers} from '../controllers/user.controller.js'

export function routerUser (request, response) {
if (request.url === '/users') return getAllUsers(response);

}