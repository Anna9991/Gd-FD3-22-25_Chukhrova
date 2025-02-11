

export function getIds(): number[] {
  const nums = new Set<number>();
  while (nums.size < 20) {
    nums.add(Math.floor(Math.random() * 300));
  }
  return Array.from(nums);
}