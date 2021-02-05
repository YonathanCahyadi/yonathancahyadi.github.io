import styled from "styled-components";
import PropTypes from "prop-types"; 


const StyledButton = styled.button`
    background: ${(props) => props.primary ? props.theme.main : "transparent"};
    border-radius: 5px;
    border: ${(props) => props.primary ? "none" : `2px solid ${props.theme.main}`};
    outline: none;
    color: ${(props) => props.primary ? "white": props.theme.main};
    margin: 2px 5px;
    padding: 5px 15px;

    &:hover {
        background: ${(props) => props.primary ? "transparent": props.theme.main};
        color: ${(props) => props.primary ? props.theme.main : "white"};
    }

`

StyledButton.propTypes = {
    primary: PropTypes.bool
}

StyledButton.defaultProps = {
    theme: {
        main: "palevioletred"
    }
}

export default StyledButton;