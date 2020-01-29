import joi from 'joi'

export const segmentIdentity = joi.object().keys({
  //
  userId: joi.string(),
  anonymousId: joi.string(),
  timestamp: joi.string(),
  context: joi.object(),
  traits: joi.object(),
})
