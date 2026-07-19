import { AppBar, Box, Toolbar, styled, Button } from '@mui/material';
import { Search } from "./search";
import { Logo } from "./logo";
import { Buttons } from "./customButton";
const StyledHeader = styled(AppBar)({
    background: "rgba(0,0,0,0.5)",
    height: "55px",
    position: 'fixed'
});
export const Header = () => {
    return (
        <StyledHeader>
            <Toolbar sx={{ minHeight: "55px !important", justifyContent: "space-between" }}>
                <Logo />
                <Search />
                <Buttons />
            </Toolbar>
        </StyledHeader>
    );
};
