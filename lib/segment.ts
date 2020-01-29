import { FabrixApp } from '@fabrix/fabrix'
import Analytics from 'analytics-node'

export const Segment = {
  /**
   * Configure the write key
   */
  config: (app: FabrixApp) => {
    const options: {[key: string]: any} = {}
    const key = app.config.get('segment.write_key')
    const flushAt = app.config.get('segment.flush_at')
    const flushInterval = app.config.get('segment.flush_interval')

    if (flushAt) {
      options.flushAt = flushAt
    }

    if (flushInterval) {
      options.flushInterval = flushInterval
    }

    const analytics = new Analytics(key, options)

    // TODO
    // Emit on Fabrix when a flush happens
    // analytics.watch('flushed', (id, oldVal?, newVal?) => {
    //   if (oldVal && oldVal !== newVal) {
    //     app.emit('spool:segment:flushed', 'segment.' + id + ' changed from ' + oldVal + ' to ' + newVal)
    //   }
    // })

    return analytics
  },


// {
//   flushAt: 20,
//     flushInterval: 10000
// }

  init: (app: FabrixApp) => {
    return Promise.resolve()
  },

  /**
   * Flush segment when spool is unloading
   */
  unload: (app: FabrixApp) => {
    return new Promise((resolve, reject) => {
      if (app && app.segment && typeof app.segment.flush === 'function') {
        app.segment.flush((err?) => {
          if (err) {
            return reject(err)
          }
          return resolve()
        })
      }
      else {
        return resolve()
      }
    })
  }
}
