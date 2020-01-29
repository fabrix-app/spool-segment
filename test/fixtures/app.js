'use strict'

const fsStore = require('cache-manager-fs')

module.exports = {
  pkg: {
    name: require('../../package').name + '-test'
  },
  api: {
    models: {},
    controllers: {},
    services: {}
  },
  config: {
    segment: {
      write_key: process.env.SEGMENT_WRITE_KEY,
      flush_at: 1,
      flush_interval: 1000
    },
    main: {
      spools: [
        require('../../dist').SegmentSpool
      ]
    }
  }
}


