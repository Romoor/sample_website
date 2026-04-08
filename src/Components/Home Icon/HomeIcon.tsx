import GlobalStyle from "./GlobalStyle";
import GlowingIcon from "./GlowingIcon";
import styled from "styled-components";

const HomeIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function HomeIcon() {
    return (
        <HomeIconContainer>
            <GlobalStyle />
            <GlowingIcon alt="Home Icon" />
        </HomeIconContainer>
    )
}
export default HomeIcon;