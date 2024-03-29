const express = require('express');
const { validateNumsArray, findMode, findMean, findMedian } = require('./helpers');
const ExpressError = require('./expressError');
 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Average
app.get('/mean/:nums', function(req, res, next) {
  if (!req.params.nums) {
    throw new ExpressError();
  }
  let numsArray = req.params.nums.split(',');
  let nums = validateNumsArray(numsArray);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
  let result = {
    operation: 'mean',
    result: findMean(nums),
  };
  return res.send(result);
});

// Median
app.get('/median/:nums', function(req, res, next) {
  if (!req.params.nums) {
    throw new ExpressError();
  }
  let numsArray = req.params.nums.split(',');
  let nums = validateNumsArray(numsArray);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
  let result = {
    operation: 'median',
    result: findMedian(nums),
  };
  return res.send(result);
});

// Most Fequent
app.get('/mode/:nums', function(req, res, next) {
  if (!req.params.nums) {
    throw new ExpressError();
  }
  let numsArray = req.params.nums.split(',');
  let nums = validateNumsArray(numsArray);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
  let result = {
    operation: 'mode',
    result: findMode(nums),
  };
  return res.send(result);
});

app.listen(3000, function () {
  console.log('App on port 3000');
});
