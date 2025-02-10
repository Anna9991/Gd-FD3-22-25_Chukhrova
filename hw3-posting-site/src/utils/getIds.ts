

export function getIds(): number[] {
  return Array.from({ length: 20}, () => Math.floor(Math.random() * 100) + Math.floor(Math.random() * 10));
}