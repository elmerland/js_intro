/* global $ */
'use strict';

var global = window.global_var = {};

global.sample_01 = function() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return "Result: " + sum;
};

global.sample_02 = function() {
  $('.sample-02 .output').css('border', '2px solid blue');
};

global.sample_03 = function() {
  $('.sample-03 .output').html('Click count: <span class="counter-div">0</span>');
  $('.sample-03 .my-button').on('click', global.increase_counter);
};

global.counter = 0;

global.increase_counter = function() {
  global.counter++;
  $('.sample-03 .output .counter-div').html(global.counter);
};

$('.sample-01 .output').html(global.sample_01());
global.sample_02();
global.sample_03();