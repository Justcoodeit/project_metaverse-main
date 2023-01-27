import React from 'react'
import styled from 'styled-components'
<<<<<<< HEAD
import { Carousel } from '../components/containers'
import { Header} from '../components/typograpy'
=======
import { Carousel, CarouselProps, Header } from 'components/elements'
import { Localize } from 'components/localization'
>>>>>>> 633ff8d9e8721fd1d0359f40fcc7eb2e8ce99288

const StyledHeader = styled(Header)`
    height: 36px;
    line-height: 36px;
`


<<<<<<< HEAD
=======

>>>>>>> 633ff8d9e8721fd1d0359f40fcc7eb2e8ce99288
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

<<<<<<< HEAD
const VerticalCarousel = ({ contents }) => {
=======
const VerticalCarousel = ({ contents } ) => {
>>>>>>> 633ff8d9e8721fd1d0359f40fcc7eb2e8ce99288
    return (
        <Carousel has_autoplay autoplay_delay={6000} autoplay_interval={2500} {...settings}>
            {contents.map((content) => (
                <StyledHeader as="h3" type="sub-section-title" color="white" key={content.id}>
<<<<<<< HEAD
            {content.text}
=======
            {content.text} 
>>>>>>> 633ff8d9e8721fd1d0359f40fcc7eb2e8ce99288
                </StyledHeader>
            ))}
        </Carousel>
    )
}

export default VerticalCarousel
