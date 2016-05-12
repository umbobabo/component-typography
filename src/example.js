import React from 'react';
import SampleText from './sampletext';
import ReactTabs from 'react-tabs';

const Tab = ReactTabs.Tab;
const Tabs = ReactTabs.Tabs;
const TabList = ReactTabs.TabList;
const TabPanel = ReactTabs.TabPanel;
const fonts = [
  [ 'sans', '300', '', 'EconSans' ],
  [ 'sans', '', '', 'EconSans' ],
  [ 'sans', '700', '', 'EconSans' ],
  [ 'sans', '', 'italic', 'EconSans' ],
  [ 'serif', '', '', 'MiloSerifPro' ],
  [ 'serif', '500', '', 'MiloSerifPro' ],
  [ 'serif', '', 'italic', 'MiloSerifPro' ],
];
const panels = fonts.map((fontFamily) => {
  const [ kind, modifier, fontStyle, family ] = fontFamily;
  const classes = [
    `example__${ kind }-text`,
    modifier && `example__${ kind }-text--${ modifier }`,
  ].join(' ');
  const style = { fontFamily: family };
  if (modifier !== '') {
    style.fontWeight = modifier;
  }
  if (fontStyle !== '') {
    style.fontStyle = fontStyle;
  }
  return (
    <TabPanel key={`panel-typography-${ fontFamily.join('x') }`}>
      <h2>Sample for font-family: {fontFamily.join(' ')}</h2>
      <div
        className={classes}
        style={style}
        data-font={family.toLowerCase().replace(/ /g, '-')}
      ><SampleText /></div>
      <hr />
    </TabPanel>
  );
});

const tabs = fonts.map((fontFamily) => {
  const [ modifier, fontStyle, family ] = fontFamily;
  return (
    <Tab key={`tab-typography-${ fontFamily.join('x') }`}>
      <span>{family} {modifier} {fontStyle}</span>
    </Tab>
  );
});
export default (
  <Tabs
    className="library--example-tabs"
    selectedIndex={0}
  >
    <TabList>
      {tabs}
    </TabList>
    {panels}
  </Tabs>
);
