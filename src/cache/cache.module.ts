import { CacheModule as CacheModuleNest, Module } from "@nestjs/common";
import { CacheService } from "./cache.service";

@Module({
    imports: [
        CacheModuleNest.register({
            ttl: 100000
        })
    ],
    controllers: [],
    providers: [CacheService],
    exports: [CacheService]
})
export class CacheModule {}