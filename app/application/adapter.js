import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'https://db2c-185-78-75-249.ngrok.io';
  get headers() {
    return { 'owner-secret': 'cV87zOVw3F' };
  }
}
