import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import HeroGlowingIcon from "./HeroGlowingIcon";

const HomeIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    size: 10vh;
`;

function HomeIcon() {
    return (
        <HomeIconContainer className="home_icon d-inline-flex">
            <GlobalStyle />
            <HeroGlowingIcon/>
        </HomeIconContainer>
    )
}
export default HomeIcon;