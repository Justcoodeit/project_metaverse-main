import React from 'react'
import styled, { css } from 'styled-components'
import { generateResponsiveStyles } from '../containers/box'
import { Margins, Paddings } from '../themes/function'
import device from '../theme/devise'







const baseStyles = ({
    m,
    mt,
    ml,
    mr,
    mb,
    p,
    pt,
    pl,
    pr,
    pb,
    align,
    lh,
    min_width,
    max_width,
    min_height,
    max_height,
    width,
    height,
}) => css`
    min-width: ${min_width};
    max-width: ${max_width};
    min-height: ${min_height};
    max-height: ${max_height};
    width: ${width};
    height: ${height};
    text-align: ${align};
    line-height: ${lh};
    ${Margins({ m, mt, ml, mr, mb })}
    ${Paddings({ p, pt, pl, pr, pb })}
`

const responsiveStyles = generateResponsiveStyles(baseStyles)

const createElement = React.createElement

export const BaseLink = css` 
    text-decoration: none;
    cursor: pointer;
    font-weight: ${({ weight }) => weight || 'normal'};

    &:hover {
        color: var(--color-red);
        text-decoration: underline;
    }
`

export const BaseElement = css`
    text-align: ${(props) => props.align || 'start'};
    padding: ${(props) => props.padding || ''};
    color: ${({ color }) => (color ? `var(--color-${color})` : 'var(--color-black-3)')};
    line-height: ${(props) => props.lh || '1.5'};
    max-width: ${(props) => props.max_width || ''};
    min-width: ${(props) => props.min_width || ''};
    ${Margins}
    ${Paddings}

    @media ${device.tablet} {
        max-width: ${(props) => props.mobile_max_width || ''};
    }
`

/** @deprecated Use `Header` component instead. */

export const Text = styled.p`
    ${BaseElement}
    font-weight: ${(props) => props.weight || 'normal'};
    font-size: ${(props) => props.size || '1.6rem'};
    width: ${(props) => props.width || 'auto'};

    @media ${device.tabletL} {
        font-size: ${(props) => props.size || '16px'};
    }

    ${responsiveStyles}
`


export const Header = styled(({ as = 'h2', children, ...props }) =>
    createElement(as, props, children),
)`
    ${BaseElement}
    word-break: break-word;
    font-weight: ${(props) => props.weight || 'bold'};
    font-size: ${(props) => {
        if (props.size) return props.size
        if (props === 'main-landing-title') return '8.0rem'
        if (props === 'display-title') return '6.4rem'
        if (props === 'page-title') return '4.8rem'
        if (props === 'section-title') return '3.2rem'
        if (props === 'sub-section-title') return '2.4rem'
        if (props === 'main-paragraph') return '1.6rem'
        if (props === 'sub-paragraph') return '1.4rem'
        // The above is deprecated and should not be used for any new designs on Figma
        if (props === 'hero') return '8.0rem'
        if (props === 'heading-1') return '6.4rem'
        if (props === 'heading-2') return '4.8rem'
        if (props === 'heading-3') return '3.2rem'
        if (props === 'subtitle-1') return '2.4rem'
        if (props === 'subtitle-2') return '2.0rem'
        if (props === 'paragraph-1') return '1.6rem'
        if (props === 'paragraph-2') return '1.4rem'
        if (props === 'small') return '1.2rem'
        if (props === 'extra-small') return '1.0rem'
    }};
    line-height: ${(props) => {
        if (props === 'main-landing-title') return '8rem'
        if (props === 'display-title') return '8rem'
        if (props === 'page-title') return '6rem'
        if (props === 'section-title') return '4rem'
        if (props === 'sub-section-title') return '3rem'
        if (props === 'main-paragraph') return '2.4rem'
        if (props === 'sub-paragraph') return '2rem'
        // The above is deprecated and should not be used for any new designs on Figma
        if (props === 'hero') return '10rem'
        if (props === 'heading-1') return '8rem'
        if (props === 'heading-2') return '6rem'
        if (props === 'heading-3') return '4rem'
        if (props === 'subtitle-1') return '3.6rem'
        if (props === 'subtitle-2') return '3rem'
        if (props === 'paragraph-1') return '2.4rem'
        if (props === 'paragraph-2') return '2rem'
        if (props === 'small') return '1.8rem'
        if (props === 'extra-small') return '1.4 rem'
    }};
    width: ${(props) => props.width || '100%'};

    @media ${device.tabletL} {
        font-size: ${(props) => {
            if (props === 'main-landing-title') return '40px'
            if (props === 'display-title') return '40px'
            if (props === 'page-title') return '32px'
            if (props === 'section-title') return '24px'
            if (props === 'sub-section-title') return '20px'
            if (props === 'main-paragraph') return '16px'
            if (props === 'sub-paragraph') return '14px'
            // The above is deprecated and should not be used for any new designs on Figma
            if (props === 'hero') return '40px'
            if (props === 'heading-1') return '32px'
            if (props === 'heading-2') return '28px'
            if (props === 'heading-3') return '24px'
            if (props === 'subtitle-1') return '18px'
            if (props === 'subtitle-2') return '16px'
            if (props === 'paragraph-1') return '14px'
            if (props === 'paragraph-2') return '12px'
            if (props === 'small') return '10px'
            if (props === 'extra-small') return '8px'
        }};
        line-height: ${(props) => {
            if (props === 'main-landing-title') return '50px'
            if (props === 'display-title') return '50px'
            if (props === 'page-title') return '40px'
            if (props === 'section-title') return '30px'
            if (props === 'sub-section-title') return '25px'
            if (props === 'main-paragraph') return '24px'
            if (props === 'sub-paragraph') return '21px'
            // The above is deprecated and should not be used for any new designs on Figma
            if (props === 'hero') return '50px'
            if (props === 'heading-1') return '40px'
            if (props === 'heading-2') return '34px'
            if (props === 'heading-3') return '30px'
            if (props === 'subtitle-1') return '26px'
            if (props === 'subtitle-2') return '24px'
            if (props === 'paragraph-1') return '20px'
            if (props === 'paragraph-2') return '18px'
            if (props === 'small') return '14px'
            if (props === 'extra-small') return '12px'
        }};
    }

    ${responsiveStyles}
`

export const LinkText = styled(Text).attrs({ as: 'a' })<LinkTextProps>`
    ${BaseLink}
`

export const SpanLinkText = styled(Text).attrs({ as: 'span' })`
    ${BaseLink}
`
