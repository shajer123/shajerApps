/*****************************
 * environment.js
 * path: '/environment.js' (root of your project)
 ******************************/

import * as Updates from 'expo-updates'
const ENV = {
  development: {
    // GRAPHQL_URL: 'http://10.97.28.129:8001/graphql',
    // WS_GRAPHQL_URL: 'ws://10.97.28.129:8001/graphql',
    // SERVER_URL: 'http://10.97.28.129:8001/', // put / at the end of server url
    GRAPHQL_URL: 'https://shajerapi.up.railway.app/graphql',
    WS_GRAPHQL_URL: 'wss://shajerapi.up.railway.app/graphql',
    SERVER_URL: 'https://shajerapi.up.railway.app/', // put / at the end of server url
    IOS_CLIENT_ID_GOOGLE:
      '13794450669-6k0l8vgflotmg1llvl037ptu2kshaau4.apps.googleusercontent.com',
    ANDROID_CLIENT_ID_GOOGLE:
      '13794450669-s3iselmrkivsu9jcipqcf3q3ulvcr3e6.apps.googleusercontent.com',
    AMPLITUDE_API_KEY: '58dcfee9467cc4c3c616b856444b786e',
    GOOGLE_MAPS_KEY: 'AIzaSyCX74aTKx5CEV66XhXaDeV6HkaoTwMRzoo',
    EXPO_CLIENT_ID:
      '13794450669-qors86fskm3khc9ipl5mbca3el79foki.apps.googleusercontent.com',
    SENTRY_DSN:
      'https://0a25963153144c7c8792cc0887cc5b85@o4505548794757120.ingest.sentry.io/4505559937712128',
    TERMS_AND_CONDITIONS: 'https://enatega.ninjascode.com/privacy-policy',
    PRIVACY_POLICY: 'https://enatega.ninjascode.com/privacy-policy',
    STRIPE_PUBLIC_KEY: 'pk_test_lEaBbVGnTkzja2FyFiNlbqtw',
    STRIPE_IMAGE_URL:
      'https://prod-enatega-single-api.herokuapp.com/assets/images/logo.png',
    STRIPE_STORE_NAME: 'shajer',
    TEST_OTP: '111111',
    GOOGLE_PACES_API_BASE_URL: 'https://maps.googleapis.com/maps/api/place'
  },
  staging: {
    GRAPHQL_URL: 'https://shajerapi.up.railway.app/graphql',
    WS_GRAPHQL_URL: 'wss://shajerapi.up.railway.app/graphql',
    SERVER_URL: 'https://shajerapi.up.railway.app/', // put / at the end of server url
    IOS_CLIENT_ID_GOOGLE:
      '13794450669-6k0l8vgflotmg1llvl037ptu2kshaau4.apps.googleusercontent.com',
    ANDROID_CLIENT_ID_GOOGLE:
      '13794450669-s3iselmrkivsu9jcipqcf3q3ulvcr3e6.apps.googleusercontent.com',
    AMPLITUDE_API_KEY: '58dcfee9467cc4c3c616b856444b786e',
    GOOGLE_MAPS_KEY: 'AIzaSyCX74aTKx5CEV66XhXaDeV6HkaoTwMRzoo',
    EXPO_CLIENT_ID:
      '13794450669-qors86fskm3khc9ipl5mbca3el79foki.apps.googleusercontent.com',
    SENTRY_DSN:
      'https://0a25963153144c7c8792cc0887cc5b85@o4505548794757120.ingest.sentry.io/4505559937712128',
    TERMS_AND_CONDITIONS: 'https://enatega.ninjascode.com/privacy-policy',
    PRIVACY_POLICY: 'https://enatega.ninjascode.com/privacy-policy',
    STRIPE_PUBLIC_KEY: 'pk_test_lEaBbVGnTkzja2FyFiNlbqtw',
    STRIPE_IMAGE_URL:
      'https://prod-enatega-single-api.herokuapp.com/assets/images/logo.png',
    STRIPE_STORE_NAME: 'shajer',
    TEST_OTP: '111111',
    GOOGLE_PACES_API_BASE_URL: 'https://maps.googleapis.com/maps/api/place'
  },
  production: {
    GRAPHQL_URL: 'https://shajerapi.up.railway.app/graphql',
    WS_GRAPHQL_URL: 'wss://shajerapi.up.railway.app/graphql',
    SERVER_URL: 'https://shajerapi.up.railway.app/', // put / at the end of server url
    IOS_CLIENT_ID_GOOGLE:
      '13794450669-6k0l8vgflotmg1llvl037ptu2kshaau4.apps.googleusercontent.com',
    ANDROID_CLIENT_ID_GOOGLE:
      '13794450669-s3iselmrkivsu9jcipqcf3q3ulvcr3e6.apps.googleusercontent.com',
    AMPLITUDE_API_KEY: '58dcfee9467cc4c3c616b856444b786e',
    GOOGLE_MAPS_KEY: 'AIzaSyCX74aTKx5CEV66XhXaDeV6HkaoTwMRzoo',
    EXPO_CLIENT_ID:
      '13794450669-qors86fskm3khc9ipl5mbca3el79foki.apps.googleusercontent.com',
    SENTRY_DSN:
      'https://0a25963153144c7c8792cc0887cc5b85@o4505548794757120.ingest.sentry.io/4505559937712128',
    TERMS_AND_CONDITIONS: 'https://enatega.ninjascode.com/privacy-policy',
    PRIVACY_POLICY: 'https://enatega.ninjascode.com/privacy-policy',
    STRIPE_PUBLIC_KEY: 'pk_test_lEaBbVGnTkzja2FyFiNlbqtw',
    STRIPE_IMAGE_URL:
      'https://prod-enatega-single-api.herokuapp.com/assets/images/logo.png',
    STRIPE_STORE_NAME: 'shajer',
    TEST_OTP: '111111',
    GOOGLE_PACES_API_BASE_URL: 'https://maps.googleapis.com/maps/api/place'
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
