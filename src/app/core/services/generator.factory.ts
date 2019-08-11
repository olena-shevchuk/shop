import { InjectionToken } from '@angular/core';

import { GeneratorService } from './generator.service';

export const Generator = new InjectionToken<any[]>('Generator');

export function GeneratorFactoryService(n: number) {

    return (data: GeneratorService) => data.generate(n);
}
