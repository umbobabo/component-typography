import React from 'react'
import SampleText from './sampletext.es6'

let fonts = [
    'Halifax Regular',
    'Halifax Bold',
    'Halifax Light',
    'FF Milo Serif Pro Med Italic',
    'FF Milo Serif Pro',
]

let eachSample = fonts.map((fontFamily) => {
    let style = { fontFamily }

    return (
        <div>
            <h1>Sample for font-family: { fontFamily }</h1>
            <div style={style} data-font={fontFamily.toLowerCase().replace(/ /g, '-')}> <SampleText></SampleText> </div>
            <hr/>
        </div>
    )
})

export default (
    <div className="samples">
        { eachSample }
    </div>
);
