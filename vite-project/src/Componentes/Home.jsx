import { Card, CardHader, CardBody, CardFooter, Image, Heading, Text, Button, Stack} from '@chakra-ui/react'
export function Home(props) {
  return (
    <h1>{props.nomePagina}</h1>
  )
}


<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagniaxmieKH5fZ5D3cmRGmnaj6LghzzWy_g&s'
    alt='Por do Sol'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>