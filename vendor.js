'use strict';

//require event
const events = require ( './events.js' );

//require random fake data
const faker = require( 'faker' );

//require dotenv
require( 'dotenv' ).config();

//payload object
let flowerPackage = {
  store: process.env.STORE ,
  orderID: faker.datatype.uuid() ,
  customer:faker.name.findName() ,
  address: faker.address.streetName (),
};

//call the event every 5 sec
setInterval ( ()=>{
  //Create a fake order, as an object:
  flowerPackage ;

  //Emit a ‘pickup’ event and attach the fake order as payload
  events.emit( 'pickUp',flowerPackage );
}, 5000 );

//whenever the ‘delivered’ event occurs
events.on( 'delivered',( payload )=>{
  console.log( `***THANK YOU FOR DELIVERING ${flowerPackage.orderID}***` );
} );


module.exports = flowerPackage ;
