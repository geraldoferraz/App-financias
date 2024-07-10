import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserInfo from '@/userProfile';

export default function UserProfile() {
  return (
    <View style={styles.container}>
      <UserInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
