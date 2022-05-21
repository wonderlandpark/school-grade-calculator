import { Box, Text, Input, Grid, GridItem, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { rank, finalRank as finalRankState, studentTotal } from "../utils/atoms"
import grade from "../utils/grade"

const Rank = () => {
  const [ rankData, setRankData ] = useRecoilState(rank)
  const student = useRecoilValue(studentTotal)
  const finalRank = useRecoilValue(finalRankState)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const copied = { ...rankData }
    copied[e.target.name as 'rank'] = Number(e.target.value)
    setRankData(copied)
  }
  return <Grid textAlign='left' templateColumns={{ xl: 'repeat(5, 1fr)' }} gap={4} pt={10}>
    <Box>
    <Text mb={2}>석차</Text>
      <Input
        name='rank'
        value={rankData.rank}
        onChange={handleChange}
        size='sm'
        type='number'
        min={1}
        mb={2}
      />
      <Text mb={2}>동석차</Text>
      <Input
        name='equal'
        value={rankData.equal}
        onChange={handleChange}
        size='sm'
        type='number'
        min={0}
      />
    </Box>
    <GridItem colSpan={{ xl: 4 }}>
      <Table>
        <Thead>
          <Tr>
            <Th>석차 (중간 석차 적용됨.)</Th>
            <Th>백분위</Th>
            <Th>등급</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{finalRank}</Td>
            <Td>{finalRank / student * 100}%</Td>
            <Td>{grade(finalRank / student)}등급</Td>
          </Tr>
        </Tbody>
      </Table>
    </GridItem>

  </Grid>
}

export default Rank