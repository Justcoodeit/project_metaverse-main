import React from 'react'
import styled from 'styled-components'
import { Carousel } from '../components/containers'
import { Header} from '../components/typograpy'

const StyledHeader = styled(Header)`
    height: 36px;
    line-height: 36px;
`


const settings = {
    options: {
        loop: true,
        axis: 'y',
        draggable: false,
        speed: 7,
    },
    container_style: {
        maxInlineSize: 'auto',
        marginBlockStart: '24px',
        marginBlockEnd: '32px',
        marginInline: '0',
    },
    slide_style: {
        position: 'relative',
        height: '36px',
    },
    vertical_container: {
        flexDirection: 'column',
        height: '36px',
    },
}

const VerticalCarousel = ({ contents }) => {
    return (
        <Carousel has_autoplay autoplay_delay={6000} autoplay_interval={2500} {...settings}>
            {contents.map((content) => (
                <StyledHeader as="h3" type="sub-section-title" color="white" key={content.id}>
            {content.text}
                </StyledHeader>
            ))}
        </Carousel>
    )
}

export default VerticalCarousel
