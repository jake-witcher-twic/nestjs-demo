export class MockMethodNotImplementedException extends Error {
  constructor(name: string, prop: string | symbol) {
    super(
      `${name}.${prop.toString()}() was called without being mocked. ` +
        `Please provide a mock implementation of this method.`,
    );

    Object.setPrototypeOf(this, MockMethodNotImplementedException.prototype);
  }
}
