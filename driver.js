'use strict';

//require event
const events = require ( './events.js' );

//require vendor for payload
const flowerPackage = require ( './vendor.js' );

//on pickUp event
events.on( 'pickUp',( payload )=>{

  //Wait 1 second
  setInterval( ()=>{
    //Log “DRIVER: picked up [ORDER_ID]” to the console.
    console.log( `DRIVER: picked up ${flowerPackage.orderID}` );

    //Emit an ‘in-transit’ event with the payload you received
    events.emit( 'in-transit', payload );
  } , 1000 );


  //Wait 3 seconds
  setInterval( ()=>{
    //Log “delivered” to the console
    console.log( 'delivered' );

    //Emit a ‘delivered’ event with the same payload
    events.emit( 'delivered',payload );
  },3000 );
} );



