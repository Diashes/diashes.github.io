import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');

/**
 * Production
 */
if (process.env.ENV === 'production')
{

}

/**
 * Development
 */
else
{
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}