import React, { useState } from 'react'
<<<<<<< HEAD
import styled from 'styled-components'
import VerticalCarousel from '../components/_verical-carousel'
import PlatformSlideshow from '../components/_platformSlideshow'
=======
// import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import VerticalCarousel from './_vertical-carousel'
import PlatformSlideshow from './_platform-slideshow'
// import { contents, contents_ppc, header_items } from './_data'
>>>>>>> 633ff8d9e8721fd1d0359f40fcc7eb2e8ce99288
import device from '../theme/devise'
import { Button } from '../components/form/button'
import { Container, Box, Flex } from '../components/containers'
import { Header } from '../components/typograpy'





const HeroWrapper = styled.section`
    width: 100%;
    padding: calc(7rem + 80px) 0;
    min-height: 915px;
    background: linear-gradient(241.35deg, #122434 12.86%, #060c11 85.61%, #060c11 85.61%);
    position: relative;
    @media ${device.tabletL} {
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: calc(7rem + 40px) 0 46px;
        min-height: 846px;
    }
`
<<<<<<< HEAD
const HeroButton = styled.button`
=======
const HeroButton = styled(Button)`
>>>>>>> 633ff8d9e8721fd1d0359f40fcc7eb2e8ce99288
    padding: 17px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;

    @media ${device.tabletL} {
        width: 100%;
        font-size: 14px;
        padding: 14px 16px;
    }
    @media ${device.mobileS} {
        font-size: 18px;
        padding: 12px 20px;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        margin-right: 8px;
        width: unset;
    }
`

const HeroHeader = ({ text }) => {
    return (
        <StyledHeader type="main-landing-title" color="white">
<<<<<<< HEAD
             {text} 
=======
           <h1>   {text} </h2> 
>>>>>>> 633ff8d9e8721fd1d0359f40fcc7eb2e8ce99288
        </StyledHeader>
    )
}

<<<<<<< HEAD
const Hero = () => {
=======
const Hero = ({ is_ppc }) => {
>>>>>>> 633ff8d9e8721fd1d0359f40fcc7eb2e8ce99288

    const [is_logged_in,setIs_logged_in] = useState(true)

    return (
        <HeroWrapper>
            {/* <BackgroundImage is_unstyled data={data.hero_background} loading="eager"> */}
                <Container fd="column" ai="flex-start">
                    <Flex
                        m="0 auto"
                        tabletL={{
                            fd: 'column',
                            max_width: '100%',
                        }}
                    >
                        <Flex
                            max_width="486px"
                            fd="column"
                            jc="flex-start"
                            bp1060={{ max_height: 'unset' }}
                            tabletL={{
                                width: 'unset',
                                max_width: '100%',
                                mr: 'unset',
                                mb: '40px',
                            }}
                        >
                            <Flex
                                height="unset"
                                mb="16px"
                                direction="column"
                                tabletL={{
                                    fd: 'row',
                                    fw: 'wrap',
                                    jc: 'flex-start',
                                    mb: '8px',
                                    max_width: '100%',
                                }}
                            >
<<<<<<< HEAD
                                {/* {header_items.map((item) => (
                                    <HeroHeader key={item.id} text={item.text} />
                                ))} */}
                                
=======
                                {header_items.map((item) => (
                                    // <HeroHeader key={item.id} text={item.text} />
                                ))}
>>>>>>> 633ff8d9e8721fd1d0359f40fcc7eb2e8ce99288
                            </Flex>
                            <Header
                                as="h2"
                                type="sub-section-title"
                                color="white"
                                min_height="auto"
                                weight="normal"
                            >
<<<<<<< HEAD
                                
                                  TrTradeTradeade forex, stocks & indices, cryptocurrencies, commodities, and derived
                            </Header>
                            {/* <VerticalCarousel contents={ contents} />  */}
=======
                                {/* {is_eu && (
                                    <Localize translate_text="TrTradeTradeade forex, stocks & indices, cryptocurrencies, commodities, and derived." />
                                )}
                                {is_row && (
                                    <Localize translate_text="Trade forex, stocks & indices, cryptocurrencies, commodities, and derived." />
                                )} */}
                            </Header>
                            {/* <VerticalCarousel contents={is_ppc ? contents_ppc : contents} /> */}
>>>>>>> 633ff8d9e8721fd1d0359f40fcc7eb2e8ce99288
                            <Box tabletL={{ mt: '-8px' }}>
                                {is_logged_in ? (
                                    <HeroButton
                                        // onClick={handleGetTrading}
                                        id="dm-hero-signup"
                                        secondary
                                    >
<<<<<<< HEAD
                                       Get Trading
=======
                                        <h1> Get Trading</h1>
>>>>>>> 633ff8d9e8721fd1d0359f40fcc7eb2e8ce99288
                                    </HeroButton>
                                ) : (
                                    <HeroButton
                                        // disabled={is_region_loading}
                                        // onClick={handleSignup}
                                        id="dm-hero-signup"
                                        secondary
                                    >
<<<<<<< HEAD
                                     Create free demo account
=======
                                        <h1> Create free demo account</h1>
>>>>>>> 633ff8d9e8721fd1d0359f40fcc7eb2e8ce99288

                                    </HeroButton>
                                )}
                            </Box>
                        </Flex>
                        {/* <PlatformSlideshow /> */}
                    </Flex>
                </Container>
            {/* </BackgroundImage> */}
        </HeroWrapper>
    )
}

export default Hero
