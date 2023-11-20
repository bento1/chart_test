import MenuList from '@mui/material/MenuList';
import { MenuGroup,MenuItem,MenuDivider,Menu } from '@chakra-ui/react';

export default function IconMenu() {
    return (
    <Menu>
        <MenuList>
            <MenuGroup title='Profile'>
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Help'>
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
            </MenuGroup>
        </MenuList>
    </Menu>
    );
}