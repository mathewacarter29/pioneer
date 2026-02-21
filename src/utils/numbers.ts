/**
 * Generates a random integer between 0 (inclusive) and the specified maximum (exclusive).
 * @param max The maximum value (exclusive) for the random integer.
 * @returns A random integer between 0 and max - 1.
 */
export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};
