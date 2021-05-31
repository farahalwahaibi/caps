'use strict';

//require exported events
const events = require ( './events.js' );
const flowerPackage = require('./vendor.js');

//require vendor
require ( './vendor.js' );

//require driver
require ( './driver.js' );

//1st state pick up
events.on( 'pickUp', ( payload ) => {
  console.log( `EVENT { event: 'pickUp', time: ${new Date ()}, payload: ${payload} }` );
} );


//2nd state in transit
events.on( 'in-transit',( payload )=>{
  console.log( `EVENT { event: 'in-transit', time: ${new Date()}, payload: ${payload}}` );
} );


//3rd state delivered
events.on( 'delivered', ( payload )=>{
  console.log( `EVENT { event: 'delivered', time: ${new Date()}, payload: ${payload}}` );
} );

module.exports = events ;
