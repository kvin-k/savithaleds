import React from 'react'
import { Helmet } from 'react-helmet'
import favicon from '../svg/favicon.ico'

const Head = () =>{
    return(
        <Helmet title={`Savitha LEDS`}>
            <link rel="icon" href={favicon} />
        </Helmet>
    )
}

export default Head;