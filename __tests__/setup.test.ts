/**
 * Basic setup test to verify Jest configuration
 */
describe('Jest Setup', () => {
  it('should be configured correctly', () => {
    expect(true).toBe(true);
  });

  it('should have access to testing utilities', () => {
    expect(jest).toBeDefined();
  });
});
