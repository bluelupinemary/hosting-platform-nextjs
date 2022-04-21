import styled from "@emotion/styled";
import {Box,Container} from "@mui/material";

const Wrapper = styled(Box)`
  background-color: #047aed;
  font-family: 'Lato',sans-serif;
  color: #fff;
  line-height: 1.6;
  height:70px;
`
const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`

const ListItem = styled.a`
  text-decoration: none;
  color:white;
  padding:10px;
  margin:0 5px;
  :hover{
    border-bottom: 2px solid white;;
  }
`
const Logo = styled.h1`
   font-weight: 300;
   line-height: 1.2;
   margin: 10px 0;
`

function Navbar(props) {
    return (
            <Wrapper>
                <Container sx={{display:'flex',justifyContent:'space-between'}}>
                    <Logo>Flex Hosting.</Logo>
                    <nav>
                        <List>
                            <li><ListItem href="index.html">Home</ListItem></li>
                            <li><ListItem href="features.html">Features</ListItem></li>
                            <li><ListItem href="docs.html">Docs</ListItem></li>
                        </List>
                    </nav>
                </Container>
            </Wrapper>
    );
}

export default Navbar;