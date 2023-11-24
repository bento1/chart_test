import { ChakraProvider, Menu, MenuButton, MenuItem, MenuList, } from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";

const genMenu = (listOfStep:string[],onClick:any) =>{
    const rows:any[]=[]
    for (const StepName of listOfStep){
        let key_name='step_name_'+StepName+'_trace'
        rows.push(<MenuItem key={key_name} onClick={onClick} className={StepName}>{StepName}</MenuItem>)
    }
    return rows;
}; 

export const StepMenu = (props:{listOfStep:string[],onClick:React.MouseEventHandler<HTMLButtonElement>}) => {
    
    return (
        <ChakraProvider>
            <Menu>
                <MenuButton
                    px={4}
                    py={2}
                    transition='all 0.2s'
                    borderRadius='md'
                    borderWidth='1px'
                    _hover={{ bg: 'gray.400' }}
                    _expanded={{ bg: 'blue.400' }}
                    _focus={{ boxShadow: 'outline' }}
                >
                    Select Step <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                    <MenuItem key="all_step_trace" onClick={props.onClick}>전체 스텝</MenuItem>
                    {genMenu(props.listOfStep,props.onClick)}
                </MenuList>
            </Menu>
            
        </ChakraProvider>
        
    );
}