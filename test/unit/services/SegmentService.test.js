'use strict'
/* global describe, it */
const assert = require('assert')

describe('api.services.SegmentService', () => {
  it('should exist', () => {
    assert(global.app.api.services.SegmentService)
  })

  let SegmentService
  before(() => {
    SegmentService = global.app.services.SegmentService
    // return SegmentService.init()
  })

  describe('Segment', () => {

  })
})
