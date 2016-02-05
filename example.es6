import React from 'react';
import SampleText from './sampletext';
import Tabs from 'react-simpletabs';

const fonts = [
  [ 'sans', '', 'EconSans' ],
  [ 'sans', 'bold', 'EconSans' ],
  [ 'sans', 'light', 'EconSans' ],
  [ 'serif', 'italic', 'EconSerif' ],
  [ 'serif', '', 'EconSerif' ],
  [ 'serif', 'medium', 'EconSerif' ],
];
const eachSample = fonts.map((fontFamily) => {
  const [ kind, modifier, family ] = fontFamily;
  const classes = [
    `example__${ kind }-text`,
    modifier && `example__${ kind }-text--${ modifier }`
  ].join(' ');
  const style = { fontFamily: family, fontWeight: modifier };
  return (
    <Tabs.Panel title={`${family} ${modifier}`} key={`typography-${fontFamily.join('x')}`}>
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
