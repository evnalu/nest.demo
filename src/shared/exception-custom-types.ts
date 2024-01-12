export const userCustomTypes = new Map<number, string>([
  [10000, 'Invalid username'],
]);

export const customTypes = new Map<number, string>([
  ...userCustomTypes,
]);
