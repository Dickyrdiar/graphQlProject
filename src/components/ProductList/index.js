import { Container, VStack, Card, Box, Image, Stack, CardBody,Heading, Text, CardFooter, Button, Link } from "@chakra-ui/react";
import React from "react";
import { Icon } from '@iconify/react';

const ProductList = ({Title, Desc, Vote}) => {
  return (
    <VStack>
      <Container maxW={'auto'} alignItems={'flex-start'}>
        <Box width={'50em'} display={'flex'} justifyContent={'space-between'}>
          <Card
            direction={{ base:'column', sm: 'row' }}
            overflow={'hidden'}
            variant={'outline'}
            padding={'2px'}
            margin={'14px'}
            width={'80%'}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <Box display={'flex'}>
              <Image
                objectFit='cover'
                maxW={{ base: '60%', sm: '110px' }}
                borderRadius={'2xl'}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
              />
              

              <Stack>
                <CardBody textAlign={'left'} mt={'-12px'}>
                  <Link>
                    <Heading size='sm'>{Title}</Heading>
                  </Link>

                  <Text fontSize={'12px'} py='2'>
                    {/* Caffè latte is a coffee beverage of Italian origin made with espresso
                    and steamed milk. */}
                    {Desc}
                  </Text>
                </CardBody>
              </Stack>
            </Box>


            <Box mt={'30px'}>
              {/* <Link> */}
                <Box border={'1px solid  #e6e6e6'}
                  borderRadius={'4px'}
                  padding={'7px'}
                  mt={'-23px'}
                >
                 <Icon icon="ic:baseline-arrow-drop-up" color="#4a4a50" width="45" height="45" />
                 <Box padding="12px">
                   {Vote}
                 </Box>
                </Box>
              {/* </Link> */}
            </Box>
          </Card>
        </Box>
      </Container>
    </VStack>
  )
}

export default ProductList