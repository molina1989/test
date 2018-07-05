'use strict';

var app = require('../app'),
    chai = require('chai'),
    request = require('supertest');

var expect = chai.expect;

describe('API Integration Tests', function() {
  var text = {
    data: 'integration test',
  };

  describe('#POST /text', function() {
    it('Should return a text', function(done) {

      request(app).post('/api/text').send(text) .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.data).to.equal('integration test');
        text = res.body;
        done();
      });

    });
  });

});
