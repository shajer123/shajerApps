/*****************************
 * environment.js
 * path: '/environment.js' (root of your project)
 ******************************/

import * as Updates from 'expo-updates'

const ENV = {
  development: {
    GRAPHQL_URL: 'https://shajerapi.up.railway.app/graphql',
    WS_GRAPHQL_URL: 'wss://shajerapi.up.railway.app/graphql',
    SENTRY_DSN:
      'https://0a25963153144c7c8792cc0887cc5b85@o4505548794757120.ingest.sentry.io/4505559937712128' // [Add your own Sentry DSN link][example: https://e963731ba0f84e5d823a2bbe2968ea4d@o1103026.ingest.sentry.io/5135261]
  },
  staging: {
    GRAPHQL_URL: 'https://shajerapi.up.railway.app/graphql',
    WS_GRAPHQL_URL: 'wss://shajerapi.up.railway.app/graphql',
    SENTRY_DSN:
      'https://0a25963153144c7c8792cc0887cc5b85@o4505548794757120.ingest.sentry.io/4505559937712128' // [Add your own Sentry DSN link][example: https://e963731ba0f84e5d823a2bbe2968ea4d@o1103026.ingest.sentry.io/5135261]
  },
  production: {
    GRAPHQL_URL: 'https://shajerapi.up.railway.app/graphql',
    WS_GRAPHQL_URL: 'wss://shajerapi.up.railway.app/graphql',
    SENTRY_DSN:
      'https://0a25963153144c7c8792cc0887cc5b85@o4505548794757120.ingest.sentry.io/4505559937712128' // [Add your own Sentry DSN link][example: https://e963731ba0f84e5d823a2bbe2968ea4d@o1103026.ingest.sentry.io/5135261]
  }
}

const getEnvVars = (env = Updates.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  // eslint-disable-next-line no-undef
  if (env === 'production') {
    return ENV.production
  } else if (env === 'staging') {
    return ENV.staging
  } else {
    return ENV.development
  }
}

export default getEnvVars
