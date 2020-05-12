/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { CLContainer, CLAppBar, CLScrollEffect } from 'kubric';

const appBarBehaviours = [
  // Collapse to zero height
  {
    scrollEffect: CLScrollEffect.FADE_OUT, // will fade to alpha 0 and scroll out as well
    maxHeight: 44
  },
  // // Collapse to a minimum height
  {
    scrollEffect: CLScrollEffect.COLLAPSE,
    maxHeight: 150,
    minHeight: 44
  },

]

var renderAppBar = (props) => {
  return (
    <CLAppBar
      {...props}
      style={[props.style, { backgroundColor: Colors.lighter }]}
    />
  );
};

var _renderTopBarContent = (index, offset) => {
  if (index === 0) {
    // Simple content that just scrolls out of screen and fades
    return (
      <View style={{
        flex: 1,
        backgroundColor: Colors.lighter,
        padding: 8
      }}>
        <Text style={styles.sectionTitle}>
          Fade & Scroll me out
      </Text>

      </View>
    );
  } else {
    // Example of how animation progress can be used to animate content
    const paddingLeft = offset.interpolate({
      inputRange: [0, 0.5, 0.75],
      outputRange: [80, 25, 8],
      extrapolate: 'clamp'
    });
    const fontSize =  offset.interpolate({
      inputRange: [0, 0.5, 0.75],
      outputRange: [48, 36, 17],
      extrapolate: 'clamp'
    });
    return (
      <Animated.View style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.lighter,
        padding: 8,
        paddingLeft
      }}>
        <Animated.Text style={[styles.sectionTitle, {fontSize}]}>
          Collapse Me
      </Animated.Text>

      </Animated.View>
    );
  }
}

var _renderContent = (props) => {
  return (
    <ScrollView
      {...props}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      {global.HermesInternal == null ? null : (
        <View style={styles.engine}>
          <Text style={styles.footer}>Engine: Hermes</Text>
        </View>
      )}
      <Header />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Step One</Text>
          <Text style={styles.sectionDescription}>
            Edit <Text style={styles.highlight}>App.js</Text> to change this
                    screen and then come back to see your edits.
                  </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>See Your Changes</Text>
          <Text style={styles.sectionDescription}>
            <ReloadInstructions />
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Debug</Text>
          <Text style={styles.sectionDescription}>
            <DebugInstructions />
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Learn More</Text>
          <Text style={styles.sectionDescription}>
            Read the docs to discover what to do next:
                  </Text>
        </View>
        <LearnMoreLinks />
      </View>
    </ScrollView>
  )
}


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <CLContainer
        appBarScrollBehaviours={appBarBehaviours}
        appBarContentRenderer={_renderTopBarContent}
        safeAreaInsets={{ top: 34 }}
        renderAppBar={renderAppBar}
        renderScrollComponent={_renderContent}
        style={{ backgroundColor: "#050505", flex: 1 }}
        useNativeDriver={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
