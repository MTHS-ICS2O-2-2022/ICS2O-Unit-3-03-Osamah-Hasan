// Copyright (c) 2023 Osamah Hasan All rights reserved
//
// Created by: Osamah Hasan
// Created on: Mar 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the volume of a pyramid
 */
function calculate () {
  // input
  const radius = parseInt(document.getElementById('Radius for the Sphere').value)

  // process
  const volume = 4/3 * Math.PI * radius ** 3

  // output
  document.getElementById('Volume').innerHTML = `the volume is ${volume.toFixed(1)}`
}
