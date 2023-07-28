import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";

@Injectable()
export class CacheService {
    constructor(
        @Inject(CACHE_MANAGER)
        private cacheManager: Cache
    ) {}

    async getCache<T>(
        key: string, 
        functionRequest: () => Promise<T>, 
        stateId: number): Promise<T> {
        const allData: T = await this.cacheManager.get(key);

        if(allData) {
            return allData;
        }

        const cities: T = await functionRequest();

        await this.cacheManager.set(`${stateId}`, cities)

        return cities;
    }
}