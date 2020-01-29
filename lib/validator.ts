/* eslint no-console: [0] */
'use strict'

import joi from 'joi'
import { segmentConfig, segmentIdentity, segmentTrack, segmentPage, segmentAlias, segmentGroup } from './schemas'

export const Validator = {

  // Validate Segment Config
  validateSegmentConfig (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, segmentConfig, (err, value) => {
        if (err) {
          return reject(new TypeError('config.segment: ' + err))
        }
        return resolve(value)
      })
    })
  },

  // Validate Identify function
  identify (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, segmentIdentity, (err, value) => {
        if (err) {
          return reject(new TypeError('segment.identify: ' + err))
        }
        return resolve(value)
      })
    })
  },

  // Validate Segment Track function
  track (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, segmentTrack, (err, value) => {
        if (err) {
          return reject(new TypeError('segment.track: ' + err))
        }
        return resolve(value)
      })
    })
  },

  // Validate Segment Alias function
  alias (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, segmentAlias, (err, value) => {
        if (err) {
          return reject(new TypeError('segment.alias: ' + err))
        }
        return resolve(value)
      })
    })
  },

  // Validate Segment Group function
  group (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, segmentGroup, (err, value) => {
        if (err) {
          return reject(new TypeError('segment.group: ' + err))
        }
        return resolve(value)
      })
    })
  },

  // Validate Segment Page function
  page (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, segmentPage, (err, value) => {
        if (err) {
          return reject(new TypeError('segment.page: ' + err))
        }
        return resolve(value)
      })
    })
  }
}
