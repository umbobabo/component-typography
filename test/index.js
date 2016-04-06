import 'babel-polyfill';
import React from 'react';
import Typography from '../src';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme()).should();
describe('Typography', () => {
  it('renders a React element', () => {
    React.isValidElement(<Typography />).should.equal(true);
  });
});
