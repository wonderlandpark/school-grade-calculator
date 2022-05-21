import { ratio } from './count'

export default function grade(rate: number): number | undefined {
  for(let i in ratio) {
    if(rate <= ratio[i]) return Number(i) + 1
  }
  return
}