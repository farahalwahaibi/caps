'use strict';

//require event from node js(singleton from events class)
const Events = require( 'events' );

//create new instance event
const events = new Events () ;

//export the event
module.exports = events ;
