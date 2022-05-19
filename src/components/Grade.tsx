import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from '@chakra-ui/react'
import { ratio as realRatio } from '../utils/count'
import { useRecoilValue } from 'recoil'
import { studentGarde } from '../utils/atoms'

const Grade = () => {
  const ratio = useRecoilValue(studentGarde)

  return (
    <TableContainer>
      <Table variant="simple">
        {/* {JSON.stringify(ratio)} */}
        <Thead>
          <Tr>
            {ratio.map((_i, k) => (
              <Th key={k}>{k + 1}등급</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            {ratio.map((i, k) => (
              <Td key={k}>~{i}등</Td>
            ))}
          </Tr>
          <Tr>
            {realRatio.map((i, k) => (
              <Td key={k}>~{i * 100}%</Td>
            ))}
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Grade
