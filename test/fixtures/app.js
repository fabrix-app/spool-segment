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
    },
    main: {
      spools: [
        require('../../dist').SegmentSpool
      ]
    }
  }
}


