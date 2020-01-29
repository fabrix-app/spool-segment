import joi from 'joi'

export const segmentGroup = joi.object().keys({
  //
  userId: joi.string(),
  groupId: joi.string(),
  anonymousId: joi.string(),
  timestamp: joi.string(),
  context: joi.object(),
  traits: joi.object(),
  integrations: joi.object(),
})
