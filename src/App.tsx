import * as React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Code,
  Grid,
  theme,
  Heading,
  Input,
  GridItem,
  Flex,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

import { studentTotal, subjectsAverage } from './utils/atoms'
import { useRecoilState, useRecoilValue } from 'recoil'
import Grade from './components/Grade'
import Average from './components/Average'

export const App = () => {
  const [student, setStudent] = useRecoilState(studentTotal)
  const averageGrade = useRecoilValue(subjectsAverage)

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
        <Box>
          <Heading pb={12}>내신 등급 계산기</Heading>
          <Text size="md">수강자 수</Text>
          <Input
            w={32}
            value={student}
            onChange={(e) => setStudent(Number(e.target.value))}
            type="number"
            textAlign="right"
          />{' '}
          명
          <Box px={{ base: 10, xl: 100 }}>
            <Code>실제 결과와 차이가 있을 수 있습니다.</Code>
            <Grade />

            <Heading pt={32} pb={5} fontSize="2xl" textAlign="left">
              등급 평점 계산하기
            </Heading>
            <Grid templateColumns="repeat(5, 1fr)">
              <GridItem colSpan={{ base: 5, xl: 4 }}>
                <Average />
              </GridItem>
              <GridItem fontWeight="bold" colSpan={{ base: 5, xl: 1 }}>
                <Flex justifyContent="center" alignItems="center" height="100%">
                  <Box>
                    <Text fontSize="xl">등급 평점</Text>
                    <Text fontSize="2xl" color="red">
                      {averageGrade.toFixed(2)}등급
                    </Text>
                  </Box>
                </Flex>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  )
}
