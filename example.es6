import React from 'react';
import SampleText from './sampletext';
import Tabs from 'react-simpletabs';

const fonts = [
  [ 'sans', '', 'Halifax Regular' ],
  [ 'sans', 'bold', 'Halifax Bold' ],
  [ 'sans', 'light', 'Halifax Light' ],
  [ 'serif', 'italic', 'FF Milo Serif Pro Med Italic' ],
  [ 'serif', '', 'FF Milo Serif Pro' ],
  [ 'serif', 'medium', 'FF Milo Serif Pro Med' ],
];
const eachSample = fonts.map((fontFamily) => {
  const [ kind, modifier, family ] = fontFamily;
  const classes = [
    `example__${ kind }-text`,
    modifier && `example__${ kind }-text--${ modifier }`
  ].join(' ');
  const style = { fontFamily: family };
  return (
    <Tabs.Panel title={family} key={`typography-${fontFamily.join('x')}`}>
      <h2>Sample for font-family: {fontFamily.join(' ')}</h2>
      <div
        className={classes}
        style={style}
        data-font={family.toLowerCase().replace(/ /g, '-')}
      ><SampleText /></div>
      <hr/>
    </Tabs.Panel>
  );
});

export default (
  <Tabs className="library--example-tabs">
    {eachSample}
  </Tabs>
);
