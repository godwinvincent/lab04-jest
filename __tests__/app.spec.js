'use strict';

import {greet, invertCase} from '../js/app'; //import the functions to test!

/* tests go here */
describe('Inverting Case', function(){
	it('Should work with empty string',function(){
		expect(invertCase('')).toEqual('');
	});
	it('Should invert the case of the string passed in',function(){
		expect(invertCase('cOMPUTER')).toEqual('Computer');
	});
}); 