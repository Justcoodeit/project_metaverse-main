<<<<<<< HEAD
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
=======
import React, { useCallback, useEffect, useMemo } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel-react'
import styled, { css } from 'styled-components'
import Autoplay from 'embla-carousel-autoplay'
import { PlatformContent, ImageTag, PLATFORMS_CAROUSEL_DELAY } from './_utils'
import type { TPlatformDetails } from './_utils'
import { Box, Flex } from '/'
import { Header } from 'components/elements'
import device from 'themes/device'

const SelectedZone = styled(Flex)`
    left: 0;
    right: 0;
    box-shadow: rgba(131, 131, 131, 0.15) 0 16px 20px, rgba(131, 131, 131, 0.15) 0 0 20px;
    top: calc(50% - 152px / 2);
    z-index: 4;
`

const SelectedSlide = ({ selected_slide }) => {
    if (selected_slide) {
        const { title, icon, description, learn_more_link } = selected_slide
        return (
            <SelectedZone position="absolute" height="152px" background="white" p="16px">
                <ImageTag src={icon} alt={title} />
                <Flex fd="column" jc="start" ml="8px">
                    <PlatformContent
                        title={title}
                        description={description}
                        learn_more_link={learn_more_link}
                        is_from_slider
                    />
                </Flex>
            </SelectedZone>
        )
    }

    return <></>
}

const Shadow = styled.div<{ location: 'start' | 'end' }>`
    position: absolute;
    left: 0;
    right: 0;
    height: calc(50% - 152px / 2);
    z-index: 1;
    pointer-events: none;
    ${({ location }) => {
        if (location === 'start') {
            return css`
                top: -0.5px;
                background: linear-gradient(
                    to top,
                    rgba(249, 251, 255, 0) 0%,
                    rgba(249, 251, 255, 1) 100%
                );
            `
        } else {
            return css`
                bottom: -0.5px;
                background: linear-gradient(rgba(249, 251, 255, 0) 0%, rgba(249, 251, 255, 1) 100%);
            `
        }
    }}
`

const Scene = styled.div`
    min-width: 100%;
    height: 100%;
    overflow: hidden;
`

const Viewport = styled(Flex)`
    user-select: none;
`

const WheelContainer = styled.div`
    height: 100px;
    width: 96%;
    perspective: 1000px;
    perspective-origin: 150%;
`

const Slide = styled(Flex)<{ distance_center: number }>`
    text-align: center;
    align-items: center;
    cursor: pointer;
    backface-visibility: hidden;
    margin-bottom: 40px;
`

const StyledFlex = styled(Flex)`
    width: 600px;

    @media ${device.desktop} {
        width: 384px;
    }
`



const carouselOptions = {
    startIndex: 0,
    loop: false,
    axis: 'y',
    skipSnaps: false,
    draggable: false,
}

const PlatformSlider = ({ slide_index, onSelectSlide, platform_details }) => {
    const { is_eu } = useRegion()
    const auto_play = useMemo(() => {
        return Autoplay({
            delay: PLATFORMS_CAROUSEL_DELAY,
            playOnInit: !is_eu,
        })
    }, [is_eu])

    const [viewportRef, embla] = useEmblaCarousel(carouselOptions, [auto_play])

    useEffect(() => {
        if (embla) {
            embla.on('select', () => {
                onSelectSlide(embla.selectedScrollSnap())
            })
        }
    }, [embla, onSelectSlide])

    // Since the platform_details is changing based on useRegion hook data, we have to reInit the carousel
    // to make it aware of the change.
    useEffect(() => {
        if (embla) {
            embla.reInit(carouselOptions, [auto_play])
        }
    }, [embla, platform_details, auto_play])

    const scrollHandler = useCallback(
        (index) => {
            if (embla) {
                embla.scrollTo(index)
            }
        },
        [embla],
    )

    const clickHandler = (index) => {
        scrollHandler(index)
        onSelectSlide(index)
    }

    if (platform_details) {
        return (
            <Box
                width="fit-content"
                height="640px"
                background="rgba(249, 251, 255, 1)"
                p="0 20px 8px"
                m="0 auto"
            >
                <StyledFlex position="relative" m="0 auto" jc="unset">
                    <Shadow location="start" />
                    <Shadow location="end" />
                    <SelectedSlide
                        selected_slide={platform_details[slide_index] || platform_details[0]}
                    />
                    <Flex ai="center" jc="unset">
                        <Scene>
                            <Viewport position="relative" ai="center" ref={viewportRef}>
                                <WheelContainer>
                                    {platform_details.map(
                                        ({ title, icon, learn_more_link }, index) => {
                                            return (
                                                <Slide
                                                    distance_center={index - slide_index}
                                                    key={learn_more_link}
                                                    onClick={() => clickHandler(index)}
                                                >
                                                    <ImageTag src={icon} />
                                                    <Header type="subtitle-1">{title}</Header>
                                                </Slide>
                                            )
                                        },
                                    )}
                                </WheelContainer>
                            </Viewport>
                        </Scene>
                    </Flex>
                </StyledFlex>
            </Box>
        )
    }
    return <></>
}

export default PlatformSlider
>>>>>>> 633ff8d9e8721fd1d0359f40fcc7eb2e8ce99288
