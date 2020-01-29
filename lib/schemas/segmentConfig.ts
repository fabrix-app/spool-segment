import joi from 'joi'

export const segmentConfig = joi.object().keys({
  write_key: joi.string().required(),
  flush_at: joi.number(),
  flush_interval: joi.number()
})
