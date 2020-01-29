'use strict'
/* global describe, it */
const assert = require('assert')

describe('app.segment', () => {
  it('should exist', () => {
    assert(global.app.segment)
  })

  let segment
  before(() => {
    segment = global.app.segment
    // return SegmentService.init()
  })
})
