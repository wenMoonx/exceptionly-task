import { Injectable, Logger } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getMetadataArgsStorage, createConnection } from 'typeorm';

import { MONGO_URL } from '../config';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const options = {
      url: MONGO_URL,
      type: 'mongodb',
      entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepConnectionAlive: true,
      logging: true,
    };
    createConnection(options)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((data) => {
        Logger.log(`☁️  MongoDB was connected`, 'TypeORM', false);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((err) => {
        Logger.error(`❌  MongoDB connect error`, '', 'TypeORM', false);
      });

    return options;
  }
}
