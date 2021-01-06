import React, { useState } from 'react';
import { View } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import style from './style';

function ControlTab() {
    const [tabValue, setTabValue] = useState(0);

    function handleChange(index) {
        setTabValue(index);
    }

    return (
        <View>
            <SegmentedControlTab
                values={["ALL","$", "$$", "$$$", "$$$$"]}
                selectedIndex={tabValue}
                onTabPress={index => handleChange(index)}
                tabStyle={style.tabStyle}
                tabTextStyle={style.tabTextStyle}
                activeTabStyle={style.activeTabStyle}
            />
        </View>
    );
}

export default ControlTab;