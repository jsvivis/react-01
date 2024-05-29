import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

export function Contato() {
  return (
    // <h1>Contato</h1>

    // <h1>{props.nomePagina}</h1>

    <Box>
      <center>
        Formulário de Cadastro
      </center>
      <Flex>
        <Center
          w="100%"
          bg="white"
          top={100}
          borderRadius={5}
          p="2"
          boxShadow={"0 1px 2px #ccc"}
        >
          <FormControl display='flex' flexDir='column'gap='4'>

            <HStack spacing='5'> 
              <Box w='100%'>
                <FormLabel fontSize='15px'>Nome Completo</FormLabel>
                <Input id='nome' placeholder='Nome Completo' />
              </Box>

              <Box w='100%'>
          <FormLabel fontSize='15px'>CPF</FormLabel>
          <Input id='cpf' type='number' placeholder='CPF' />
          </Box>
           </HStack>

            <HStack>
              <Box w='100%'>
                <FormLabel fontSize='15px'>Data Nascimento</FormLabel>
                <Input id='nasc' placeholder='Data de Nascimento' />
              </Box>

          <Box w='100%'>
            <FormLabel fontSize='15px'>Telefone|Celular</FormLabel>
            <Input id='TEL' type="number" placeholder='Telefone|Celular' />
          </Box>
            </HStack>      
            
            <HStack spacing='5'>
              <Box w='100%'>
                <FormLabel fontSize='15px'>Logradouro|Bairro</FormLabel>
                <Input id='endereco' placeholder='Logradouro|Bairro' />
              </Box>

              <Box w='100%'> 
     <FormLabel fontSize='15px'>Cidade|Estado</FormLabel>
   <Input id='end' placeholder='Cidade|Estado' />
   </Box>
      </HStack> 
              <HStack spacing='5'>
            <Box w='100%'> 
   <FormLabel fontSize='15px'>Estado|País</FormLabel>
   <Input id='est' placeholder='Estado|País' />
 </Box>
 <Box w='100%'> 
   <FormLabel fontSize='15px'>CEP</FormLabel>
   <Input id='cep' placeholder='CEP' />
 </Box>
  </HStack>
            <HStack spacing='5'>
              <Box w='100%'>
                
                <RadioGroup >
                <HStack alignItems='flex-start'>
                <FormLabel fontSize='17px'>Sexo</FormLabel>
                  <Radio value="Masculino">Masculino</Radio>
                  <Radio value="Feminino">Feminino</Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>
            <HStack justifyContent='Center'>
              <Button w={200}
              fontWeight={600}
                type='submit'
                bg='black.000'
                fontSize='20px'
                color='purple.500'             >
                Enviar
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}
