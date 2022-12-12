import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'BD',
  connector: 'mongodb',
  url: 'mongodb+srv://Jenny:Jenny1234@datadesarrollo.lmyirei.mongodb.net/vacaciones',
  host: 'datadesarrollo.lmyirei.mongodb.net/vacaciones',
  port: 27018,
  user: 'Jenny',
  password: 'Jenny1234',
  database: 'vacaciones',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BdDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'BD';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.BD', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
