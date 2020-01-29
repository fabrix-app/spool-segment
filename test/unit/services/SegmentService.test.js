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

  describe('SegmentService', () => {
    it('should track', (done) => {
      SegmentService.track({
        anonymousId: 'spool-segment-1',
        event: 'Test Track',
        properties: {
          revenue: 39.95,
          shippingMethod: '2-day'
        }
      })
        .then(res => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
})
