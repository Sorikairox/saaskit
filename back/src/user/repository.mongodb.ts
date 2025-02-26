import { Injectable } from 'danet/mod.ts';
import { MongodbService } from 'danet-database/mongodb/service.ts';
import { MongodbRepository } from 'danet-database/mongodb/repository.ts';
import { User } from './class.ts';
import { UserRepository } from './repository.ts';

@Injectable()
export class MongoDbUserRepository extends MongodbRepository<User>
  implements UserRepository {
  constructor(protected dbService: MongodbService) {
    super(dbService, 'users');
  }
  async getByEmail(email: string): Promise<User | undefined> {
    return this.dbService.getCollection<User>(this.collectionName).findOne({
      email,
    });
  }
}
