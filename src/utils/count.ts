export const ratio = [0.04, 0.11, 0.23, 0.4, 0.6, 0.77, 0.89, 0.96, 1]
export default function count(n: number) {
  return ratio.map((k) => Math.floor(n * k))
}
