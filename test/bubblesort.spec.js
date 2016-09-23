var chai = require('chai');
const expect = chai.expect;
var bubblesort = require('../bubblesort');

describe ('hi should be a Function', function(){
  it('Should exist',() => {
    expect(sort).to.be.a('function');
  });

  it('Should look like ',() => {
    expect(sort([10,50,13,43,2,8])).to.deep.equal([2,8,10,13,43,50]);
  });
  it('Should look like ',() => {
    expect(sort([4,12,56,11,7,2])).to.deep.equal([2,4,7,11,12,56]);
  });
  it('Should look like ',() => {
    expect(sort([88,4,7,3])).to.deep.equal([3,4,7,88]);
  });
  it('Should look like ',() => {
    expect(sort([5,4,3,2,1])).to.deep.equal([1,2,3,4,5]);
  });
  it('Should look like ',() => {
    expect(sort([1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
  });

  // it('Should  ',() => {
  //   expect(myBubblesort.sort()).to.be.equal(4);
  //   });
  });