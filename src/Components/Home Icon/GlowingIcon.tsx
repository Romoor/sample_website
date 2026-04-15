import styled from 'styled-components';
import './HomeIcon.css'
export const  GlowingIcon = styled.img<{ src: string, alt?: any }>`
    width: auto;
    height: 7vw;
    background-position: center;
    background-size: 5%;
    border-radius: 50%;
    border: transparent;
    background-fit: cover;
    align-items: center;
    margin: 4%;
    flex-shrink: 0 2 inherit;
    margin-left: clamp(0.25rem, 1.5vw, 1rem);
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    display: inline-flex;
} *
    home_icon:hover {
    opacity: 0.8;
    height: 90%;
    border-radius: 10px solid rgb(255, 255, 255);
}`;
