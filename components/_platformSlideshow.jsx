import React, { useState, useEffect, useMemo, useRef } from 'react'
import styled from 'styled-components'
import { Flex } from '../components/containers'
import QueryImage from '../components/element/query-image'
import device from '../theme/devise'

const ImagePlaceHolder = styled.div`
    width: 690px;

    @media ${device.tablet} {
        width: 100%;
        height: 360px;
    }
`



const StyledImage = styled(QueryImage)`
    opacity: ${({ $is_hidden }) => ($is_hidden ? '0' : '1')};
    display: ${({ $is_hidden }) => ($is_hidden ? 'none' : 'block')};
    animation: fade 1s ease-in-out;

    @media ${device.tabletL} {
        animation: unset;
    }

    .gatsby-image-wrapper {
        div {
            @media ${device.tabletL} {
                transition: none;
            }
        }
    }

    @keyframes fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

const PlatformSlideshow = () => {
    const [active_index, setActiveIndex] = useState(0)
    const [is_row, setIs_row] = useState(true)


    const slide_images = useMemo(() => {
        if (is_row)
            return [
                { key: 'hero1', image: 'https://i.ibb.co/w0Dk8LW/Security-trading-paybito.jpg'},
                { key: 'hero2', image: 'https://i.ibb.co/w0Dk8LW/Security-trading-paybito.jpg'},
                { key: 'hero3', image: 'https://i.ibb.co/w0Dk8LW/Security-trading-paybito.jpg'},
                { key: 'hero4', image: 'https://i.ibb.co/w0Dk8LW/Security-trading-paybito.jpg'},
            ]

      
    },)

    const intervalRef = useRef(null)

    useEffect(() => {
        const setNextImage = () => {
            setActiveIndex((prevIndex) =>
                prevIndex >= slide_images?.length - 1 ? 0 : prevIndex + 1,
            )
        }

        const slideshow_timer = setInterval(() => {
            setNextImage()
        }, 5000)

        intervalRef.current = slideshow_timer

        return () => clearInterval(intervalRef.current)
    }, [slide_images])

    // if (is_region_loading) {
    //     return <ImagePlaceHolder />
    // }

    return (
        <Flex max_width="690px" max_height="626px" tablet={{ max_height: '360px', ai: 'center' }}>
            <Slides images={slide_images} active_index={active_index} />
        </Flex>
    )
}


const Slides = ({ images, active_index }) => {
    return (
        <>
            {images?.map((slide, index) => {
                const { key, image } = slide
                return (
                    <StyledImage
                        key={key}
                        data={image}
                        alt="platform devices"
                        width="100%"
                        loading="eager"
                        $is_hidden={active_index !== index}
                        className="gatsby-image-wrapper"
                    />
                )
            })}
        </>
    )
}

export default PlatformSlideshow
