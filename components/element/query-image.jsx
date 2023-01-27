import React, { CSSProperties, ReactElement } from 'react'
import styled from 'styled-components'
import Image from 'next/image'





export const ImageWrapper = styled.div`
    & .gatsby-image-wrapper {
        width: ${(props) => props.width || '100%'};
        height: ${(props) => props.height};
    }
`

const QueryImage = ({
    alt,
    className,
    data,
    height,
    loading = 'lazy',
    onClick,
    width,
    ...props
}) => {
    if (data) {
        return (
            <ImageWrapper width={width} height={height} className={className} onClick={onClick}>
                <Image src={data} alt={alt} loading={loading} {...props} />
            </ImageWrapper>
        )
    }
    return null
}

export default QueryImage
