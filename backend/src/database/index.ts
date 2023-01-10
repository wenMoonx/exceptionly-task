import { Injectable, Logger } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getMetadataArgsStorage, createConnection } from 'typeorm';

import { MONGO_URL } from '../config';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const options: any = {
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
      .then(() => {
        Logger.log(`☁️  MongoDB was connected using TypeORM`);
      })
      .catch(() => {
        Logger.error(`❌  MongoDB connect error while using the TypeORM`);
      });

    return options;
  }
}
