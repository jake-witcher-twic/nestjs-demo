import { ClassConstructor } from 'class-transformer';
import { MockMethodNotImplementedException } from './exceptions/mockMethodNotImplemented.exception';
import { MockPropertyNotImplementedException } from './exceptions/mockPropertyNotImplemented.exception';

const nestJsModuleHooks: Array<string | symbol> = [
  'then',
  'onModuleInit',
  'onApplicationBootstrap',
  'onModuleDestroy',
  'beforeApplicationShutdown',
  'onApplicationShutdown',
];

export function mockService<T extends object>(
  constructor: ClassConstructor<T>,
  overrides: Partial<T> = {},
): T {
  return new Proxy<T>(constructor.prototype, {
    get(target: any, prop) {
      if (Reflect.has(overrides, prop)) {
        return (overrides as any)[prop];
      }

      // Property does not exist or the property is a NestJS application hook that should be called
      if (!Reflect.has(target, prop) || nestJsModuleHooks.includes(prop)) {
        return target[prop];
      }

      if (typeof target[prop] === 'function') {
        return () => {
          throw new MockMethodNotImplementedException(
            target.constructor.name,
            prop,
          );
        };
      }

      throw new MockPropertyNotImplementedException(
        target.constructor.name,
        prop,
      );
    },
  });
}
