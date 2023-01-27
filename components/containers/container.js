import styled from 'styled-components'
<<<<<<< HEAD
import Box, { generateResponsiveStyles } from '../containers/box'
import { flexStyles } from './flex'
import device from '../../theme/devise'
=======
import Box, { generateResponsiveStyles } from './box'
import { flexStyles } from './flex'
import device from '../../themes/devise'
>>>>>>> 633ff8d9e8721fd1d0359f40fcc7eb2e8ce99288

const responsiveStyles = generateResponsiveStyles(flexStyles)



const Container = styled(Box)`
    margin: 0 auto;
    display: flex;
    align-items: ${(props) => (props.align || props.ai ? props.align || props.ai : 'center')};
    justify-content: ${(props) =>
        props.justify || props.jc ? props.justify || props.jc : 'center'};
    flex-direction: ${(props) =>
        props.direction || props.fd ? props.direction || props.fd : 'row'};
    flex-wrap: ${(props) => (props.wrap || props.fw ? props.wrap || props.fw : '')};
    width: 80%;

    @media ${device.desktop} {
        max-width: 1200px;
    }
    @media ${device.laptopL} {
        width: 84%;
    }
    @media ${device.laptopM} {
        flex-direction: ${(props) => props.laptop_direction};
    }
    @media ${device.desktopL} {
        max-width: 1600px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
        flex-direction: ${(props) => props.tablet_direction};
    }

    ${responsiveStyles}
`

export default Container
