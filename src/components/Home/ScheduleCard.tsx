import { Card, CardBody, Stack,Text,Image, VStack, Box, HStack, useBreakpointValue } from "@chakra-ui/react"
import { Checkbox} from '@chakra-ui/react'
import { FaCalendarDay } from "react-icons/fa";


interface Props {
  date:string,
  name:string,
  sets:number,
  reps:number,
  image:string
}


const ScheduleCard = ({date,name,sets,reps,image}:Props) => {

  const iconSize = useBreakpointValue({base:'12px',md:'15px',lg:'18px',xl:'20px'}) 

  return (

<Box alignItems={"center"} justifyContent={"center"} m={{base:2,md:5,lg:10}} pb={3}display={{ base: 'block', lg: 'flex' }} >

<Card
  direction={{ base: "row"}}
  overflow="hidden"
  borderRadius={"20px"}
  bg={"#fff"}
  width={{base:'auto',md:'auto',lg:'80%'}}
  height={{ base: '50%', md: '250px', lg: '250px' }}
  justifyContent={'space-between'}
>  
  <Stack  flex={1}>
    <CardBody bg={'#FFDD6D'}>
      <HStack>
        <Box bg={'#fff'} boxSize={{base:'25px',md:'30px',lg:'40px',xl:'50px'}} borderRadius={'25px'} alignItems={'center'} justifyContent={"center"} display={'flex'} >
        <FaCalendarDay color="#F1B900" size={iconSize}/>
        </Box>
      <Box style={{alignItems:'flex-start'}}>
      <Text sx={{ color: "#000",fontSize:{ base: "12px", md: "16px", lg: "16px", xl: "18px" },fontWeight:'semibold'}}>Today</Text>
      <Text sx={{ color: "#000",fontSize:{ base: "8px", md: "12px", lg: "12px", xl: "14px" }}}>{date}</Text>
      </Box>
      </HStack>
        
      <Text sx={{ color: "#000",fontSize:{ base: "12px", md: "18px", lg: "20px", xl: "22px" },fontWeight:'bold',mt:1,mb:2}}>{name}</Text>
      
      <HStack  alignItems={'center'} justifyContent={'center'} mt={1} spacing={{base:5,md:8,lg:10,xl:10}}>
      <Box bg={'#fff'} width={{base:'60px',md:'80px',lg:'100px',xl:'100px'}} height={{base:'40px',md:'50px',lg:'60px',xl:'60px'}} borderRadius={'5px'} alignItems={'center'}justifyContent={'center'} display={'flex'}>
        <VStack>
        <Text sx={{color:'#000',fontSize:{base: "12px", md: "15px", lg: "18px", xl: "18px" }, fontWeight:'semibold'}}>{sets}</Text>
        <Text sx={{color:'#000',fontSize:{base: "12px", md: "14px", lg: "16px", xl: "16px"} }}>Sets</Text>
        </VStack>
      </Box>
      <Box bg={'#fff'} width={{base:'60px',md:'80px',lg:'100px',xl:'100px'}} height={{base:'40px',md:'50px',lg:'60px',xl:'60px'}} borderRadius={'5px'} alignItems={'center'}justifyContent={'center'} display={'flex'} >
        <VStack>
        <Text sx={{color:'#000',fontSize:{base: "12px", md: "15px", lg: "18px", xl: "18px" }, fontWeight:'semibold'}}>{reps}</Text>
        <Text sx={{color:'#000',fontSize:{base: "12px", md: "14px", lg: "16px", xl: "16px"} }}>Reps</Text>
        </VStack>
      </Box>
      </HStack>
      <HStack spacing={{base:5,md:8,lg:10,xl:10}} alignItems={'center'} justifyContent={'center'} mt={{base:3,md:5,lg:5,xl:5}}>
      <Checkbox size={{base:'sm',md:'md',lg:'lg',xl:'lg'}} colorScheme='#fff' iconColor="#F1B900" bg={'#fff'} borderRadius={'2px'} defaultChecked/>
      <Checkbox size={{base:'sm',md:'md',lg:'lg',xl:'lg'}} colorScheme='#fff' iconColor="#F1B900" bg={'#fff'} borderRadius={'2px'} defaultChecked/>
      <Checkbox size={{base:'sm',md:'md',lg:'lg',xl:'lg'}} colorScheme='#fff' iconColor="#F1B900" bg={'#fff'} borderRadius={'2px'} defaultChecked/>
      <Checkbox size={{base:'sm',md:'md',lg:'lg',xl:'lg'}} colorScheme='#fff' iconColor="#F1B900" bg={'#fff'} borderRadius={'2px'} defaultChecked/>
      </HStack>
    </CardBody>
  </Stack>
  <Stack flex={1} >
  <Image src={image}  objectFit={"contain"} height={'100%'} width={'100%'}/>
  </Stack>
</Card>
</Box>
  

  )
}



export default ScheduleCard