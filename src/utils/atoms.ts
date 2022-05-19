import { atom, selector } from 'recoil'
import count from './count'

export const studentTotal = atom<number>({
  key: 'studentTotal',
  default: 100,
})

export const subjects = atom<Subject[]>({
  key: 'subjects',
  default: [
    {
      name: '국어',
      grade: 3,
      unit: 4,
    },
    {
      name: '수학',
      grade: 2,
      unit: 4,
    },
  ],
})

export const studentGarde = selector<number[]>({
  key: 'studentGarde',
  get: ({ get }) => {
    return count(get(studentTotal))
  },
})

export const subjectsAverage = selector<number>({
  key: 'subjectsAverage',
  get: ({ get }) => {
    const subs = get(subjects)
    return (
      subs.reduce((acc, cur) => acc + (cur.grade || 0) * (cur.unit || 0), 0) /
      subs.reduce((acc, cur) => acc + Number(cur.unit || 0), 0)
    )
  },
})

interface Subject {
  name: string
  grade: number
  unit: number
}
