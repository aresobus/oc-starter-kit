'use strict';
const oc = require('oc');
const s3 = require('./s3-adapter/index');

let conf = {
  verbosity: 5, //
  baseUrl: '', // Registry URL
  port: 3333, // Registry port - must match the port of the baseUrl
  refreshInterval: 600,
  pollingInterval: 5,
  templates: [require('oc-template-react'), require('oc-template-jade')],
  storage: {
    adapter: s3,
    options: {
      key: '', // Access key
      secret: '', // Secret key
      bucket: '',
      region: '',
      componentsDir: 'components',
      // signatureVersion: 'v2', // Use v2 for RiakCS
      sslEnabled: false,
      path: ``,
      s3ForcePathStyle: true, // Necessary to get the path right - will not prefix the bucket to the domain name but add it as part of the URL path
      debug: true, // Log what AWS-SDK is up to to stdout
    }
  },
  env: { name: 'production' }
};

let registry = new oc.Registry(conf);

registry.start(function(err, app){
  console.log('a')
  if(err) {
    console.log('Registry not started: ', err);
    process.exit(1);
  }
});
