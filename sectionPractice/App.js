import {Button, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const content = [
  {
    tab: 'Section 1',
    content: "I'm the content of Section 1",
  },
  {
		tab: 'Section 2',
    content: "I'm the content of Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [tab, setTab] = useState(initialTab);

  return {

  }
};

const App = () => {
  <View>
    <TouchableOpacity>
      {content.map(tab => {
        
      })}
    </TouchableOpacity>
  </View>
  // const {} = useTabs(initialTab, allTabs);
};

export default App;