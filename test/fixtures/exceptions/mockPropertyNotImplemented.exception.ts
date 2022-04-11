export class MockPropertyNotImplementedException extends Error {
  constructor(name: string, prop: string | symbol) {
    super(
      `${name}.${prop.toString()} was accessed without being mocked. ` +
        `Please provide a mock implementation of this property.`,
    );

    Object.setPrototypeOf(this, MockPropertyNotImplementedException.prototype);
  }
}
