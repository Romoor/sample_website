import styled from 'styled-components';
import './HomeIcon.css'
const bgImage = "src/assets/moon_no_background.png";
const  GlowingIcon = styled.img`
    height: 10%;
    width: auto;
    background-size: 10%;
    border-radius: 50%;
    object-fit: cover;
    border: transparent;
    align-items: center;
    margin: 4%;
    flex-shrink: 0;
    margin-left: clamp(0.25rem, 1.5vw, 1rem);
    background-image: url("${props => props.bgImage}");
    background-repeat: no-repeat;
} *
    home_icon:hover {
    opacity: 0.8;
    height: 90%;
    border-radius: 10px solid rgb(255, 255, 255);
}`;

export default GlowingIcon;