import React from 'react';
import SampleText from './sampletext.es6';

const fonts = [
  'Halifax Regular',
  'Halifax Bold',
  'Halifax Light',
  'FF Milo Serif Pro Med Italic',
  'FF Milo Serif Pro',
];
const eachSample = fonts.map((fontFamily) => {
  const style = { fontFamily };
  return (
    <div>
      <h2>Sample for font-family: {fontFamily}</h2>
      <div
        style={style}
        data-font={fontFamily.toLowerCase().replace(/ /g, '-')}
      ><SampleText /></div>
      <hr/>
    </div>
  );
});
export default (
  <div className="samples">
    <h1>component-typography examples</h1>
    <h2>serif and sans-serif font variables</h2>
    <p>By using <code>var(--fontfamily-sans-serif)</code>
    and
    <code>var(--fontfamily-serif)</code>, respectively, you will get a serif
    (<span className="milo-example">Milo</span>), or a sans-serif font
    (<span className="halifax-example">Halifax</span>), and their respective
    fallback fonts. By standardizing this we enable future changes to the
    main sans-serif and serif fonts of the website to be much simpler to
    perform, besides making it easier to provide font fallbacks.</p>
    {eachSample}
  </div>
);
