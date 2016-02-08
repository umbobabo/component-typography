import React from 'react';
import SampleText from './sampletext';
import Tabs from 'react-simpletabs';

const fonts = [
  [ 'sans', '300', '', 'EcoSans' ],
  [ 'sans', '', '', 'EcoSans' ],
  [ 'sans', '700', '', 'EcoSans' ],
  [ 'sans', '', 'italic', 'EcoSans' ],
  [ 'serif', '', '', 'EcoSerif' ],
  [ 'serif', '500', '', 'EcoSerif' ],
  [ 'serif', '', 'italic', 'EcoSerif' ],
];
const eachSample = fonts.map((fontFamily) => {
  const [ kind, modifier, fontStyle, family ] = fontFamily;
  const classes = [
    `example__${ kind }-text`,
    modifier && `example__${ kind }-text--${ modifier }`
  ].join(' ');
  const style = { fontFamily: family };
  style.fontWeight = modifier;
  style.fontStyle = fontStyle;
  return (
    <Tabs.Panel title={`${family} ${modifier} ${fontStyle}`} key={`typography-${fontFamily.join('x')}`}>
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
