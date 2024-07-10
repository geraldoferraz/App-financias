// CustomTabBar.js
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const renderIcon = () => {
            const color = isFocused ? "#8f2abd" : "#535353";
            const size = 34;
            if (typeof options.tabBarIcon === 'function') {
              return options.tabBarIcon({ focused: isFocused, color: color, size: size });
            } else if (typeof options.tabBarIcon === 'string') {
              if (options.tabBarIcon === 'linechart') {
                return <AntDesign name="linechart" size={29} color={color} />;
              } else {
                return <MaterialIcons name={options.tabBarIcon} size={size} color={color} />;
              }
            } else {
              return <AntDesign name="linechart" size={29} color={color} />;
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}
            >
              <View style={{ alignItems: 'center', padding: 5 }}>
                <View style={[styles.innerButton, { backgroundColor: isFocused ? "#f8e2fd" : "transparent" }]}>
                  {renderIcon()}
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    borderRadius: 99,
    flexDirection: 'row', 
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.80
  },
  buttonTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerButton: {
    padding: 10, 
    paddingRight: 13,
    paddingLeft: 13,
    borderRadius: 99
  }
});
