'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('should reverse', function () {
        expect(app.reverseNumber(691)).to.eql(196);
    })
    /*it('if is not number', function () {
        expect(app.reverseNumber('2I')).to.eql(false);
    })*/

});

describe('returnOnlyLetter', function ()
{
    it('should return only letter',function () {
        expect(app.returnOnlyLetter('ry3siu21')).to.eql('rysiu');
    })
    /*it('should return false',function () {
        expect(app.returnOnlyLetter(669)).to.eql(false);
    })
    it('should return only letter',function () {
        expect(app.returnOnlyLetter('xyz')).to.eql('xyz');
    })*/

});

describe('isEmail', function ()
{
    it('should return true',function () {
        expect(app.isEmail('gdybym@mialgitare.pl')).to.eql(true);
    })
    /*it('should return false',function () {
        expect(app.isEmail(gdybymmialgitare.pl)).to.eql(false);
    })*/
});
