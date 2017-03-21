import { SERVER } from './constants'
import superagent from 'superagent';

import feathers from 'feathers-client';
import rest from 'feathers-rest/client';

const io = require('socket.io-client');
var socket = io(SERVER);
/*Feathers conf*/
let feathersClient = 
  feathers()
    // .configure(rest(SERVER).superagent(superagent))
    .configure(feathers.socketio(socket))
    .configure(feathers.hooks())
    .configure(feathers.authentication({
      storage: window.localStorage
    }));
  

// const userService = feathersClient.service('users');


export default feathersClient

