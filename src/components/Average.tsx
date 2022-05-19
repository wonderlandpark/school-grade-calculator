import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
} from '@chakra-ui/react'

import { useRecoilState } from 'recoil'
import { subjects } from '../utils/atoms'

const Average = () => {
  const [subjectList, setSubjectList] = useRecoilState(subjects)
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>과목명 (선택)</Th>
            <Th>등급 (1~9)</Th>
            <Th>이수 단위수</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {subjectList.map((subject, i) => (
            <Tr key={i}>
              {Object.entries(subject).map(([key, value]) => (
                <Td key={key}>
                  <Input
                    value={value}
                    type={key !== 'name' ? 'number' : 'text'}
                    min={{ unit: 1, grade: 1 }[key]}
                    max={{ unit: 10, grade: 9 }[key]}
                    onChange={(e) => {
                      const newSubjectList = JSON.parse(
                        JSON.stringify(subjectList)
                      )
                      newSubjectList[i][key as 'name'] = e.target.value
                      setSubjectList(newSubjectList)
                    }}
                  />
                </Td>
              ))}
              <Td>
                {subjectList.length > 2 && (
                  <Button
                    onClick={() =>
                      setSubjectList((v) => {
                        const copied = [...v]
                        copied.splice(i, 1)
                        return copied
                      })
                    }
                  >
                    -
                  </Button>
                )}
              </Td>
            </Tr>
          ))}

          <Td />
          <Td />
          <Td />
          <Td>
            <Button
              onClick={() =>
                setSubjectList((v) => [
                  ...v,
                  {
                    name: `과목 ${v.length + 1}`,
                    grade: 3,
                    unit: 4,
                  },
                ])
              }
            >
              +
            </Button>
          </Td>
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Average
