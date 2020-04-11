import React from 'react';
import {Appbar, Headline, useTheme} from 'react-native-paper';
import {useActiveTheme} from 'rnfui';
import {StyleSheet, Alert} from 'react-native';

function AppHeaderMain({scene,navigation}: any) {
  // console.log('scene', scene);
  console.log('scene', scene);
  const headerTitle = scene.descriptor.options.title;
  const Theme = useActiveTheme();

  const styles = StyleSheet.create({
    titleStyle: {
      color: Theme.color.white,
    },
  });

  return (
    <Appbar.Header>
      <Appbar.Action icon={'menu'} onPress={() =>navigation.openDrawer()}></Appbar.Action>
      <Appbar.Content
        title={
          <Headline style={styles.titleStyle}>{headerTitle}</Headline>
        }></Appbar.Content>
    </Appbar.Header>
  );
}

export default AppHeaderMain;
