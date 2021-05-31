'use strict';

//require dotenv
require( 'dotenv' ).config();
//require fake data
const faker = require( 'faker' );
// require jest
const { expect, describe, it } = require( '@jest/globals' );
//require events
require ( '../events.js' );
//require caps
const events = require ( '../caps.js' );
//require vendor
const flowerPackage = require ( '../vendor.js' );
//require driver
require ( '../driver.js' );


//start test
describe ( 'events',()=>{
  //for consoleSpy
  let consoleSpy;

  beforeEach( () => {
    consoleSpy = jest.spyOn( console, 'log' );//.mockImplementation();
  } );

  afterEach( () => {
    consoleSpy.mockRestore();
  } );

  //flowerPackage
  let payload = flowerPackage ;

  //test pickUp event
  it( 'should log pickUp event state', ()=>{
    //arrange
    events.on( 'pickUp', payload );
    //act
    //assert
    expect( consoleSpy ).toHaveBeenCalled();
  } );

  //test in-transit event
  it( 'should log in-transit event state', ()=>{
    //arrange
    events.on( 'in-transit', payload );
    //act
    //assert
    expect( consoleSpy ).toHaveBeenCalled();
  } );

  //test pickUp event
  it( 'should log delivered event state', ()=>{
    //arrange
    events.on( 'delivered', payload );
    //act
    //assert
    expect( consoleSpy ).toHaveBeenCalled();
  } );
} );
