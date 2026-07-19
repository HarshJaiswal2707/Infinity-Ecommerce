import { useState } from 'react';
import { Box, Typography, Menu, MenuItem } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
export const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false);
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const LogoutUser = () => {
        localStorage.removeItem("account");
        setAccount('');
    }
    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{ marginTop: 2, cursor: 'pointer' }}>{account}</Typography>
            </Box>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleClose(); LogoutUser(); }}>
                    <PowerSettingsNewIcon color='primary' />
                    <Typography>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}