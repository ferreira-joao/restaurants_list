import React, { useState } from 'react';
import { View, Switch } from 'react-native';

function SimpleSwitch() {
    const [isEnabled, setIsEnabled] = useState(false);

    function toogleSwitch() {
        setIsEnabled(!isEnabled);
    }

    return (
        <View>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? '#002B56' : "#f4f3f4"}
                onValueChange={toogleSwitch}
                value={isEnabled}
            />
        </View>
    );
}

export default SimpleSwitch;