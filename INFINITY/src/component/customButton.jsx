import { useState, useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CustomizedMenus from './menuButton';
import SimpleDialog from './login/signin.jsx';
import { DataContext } from '../context/dataProvider.jsx';
import { Profile } from './profile.jsx';
export const Buttons = () => {
    const { account, setAccount } = useContext(DataContext);
    const [open, setOpen] = useState(false);
    const openDialog = () => {
        setOpen(true);
    }
    return (
        <>
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
                {
                    account ? <Profile account={account} setAccount={setAccount} /> :
                        <Button variant="outlined" sx={{ color: "white", borderColor: "white" }} onClick={() => openDialog()}>
                            SIGN IN
                        </Button>
                }

            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
                <CustomizedMenus
                    openDialog={openDialog}
                    account={account}
                    setAccount={setAccount}
                />
            </Box>
            <SimpleDialog open={open} setOpen={setOpen} />
        </>
    );
};
