import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function FilmDetail({ slideAnim, onClose }) {
  const spin = slideAnim.interpolate({
    inputRange: [0, width],
    outputRange: ['0deg', '0deg'],
  });

  return (
    <Animated.View
      style={[styles.panel, { transform: [{ translateX: slideAnim }] }]}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.backButton} onPress={onClose}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.episodeLabel}>Episode IV</Text>
        <Text style={styles.title}>A New Hope</Text>
        <Text style={styles.releaseDate}>Released: May 25, 1977</Text>
        <Text style={styles.director}>Directed by: George Lucas</Text>

        <View style={styles.divider} />

        <Text style={styles.sectionHeader}>Description</Text>
        <Text style={styles.body}>
          Star Wars: Episode IV – A New Hope is a 1977 space opera film written
          and directed by George Lucas. It is the first film in the Star Wars
          franchise and the beginning of the original trilogy. The film stars
          Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing, and Alec
          Guinness, and introduces one of cinema's most iconic villains, Darth
          Vader.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionHeader}>Synopsis</Text>
        <Text style={styles.body}>
          In a galaxy far, far away, the evil Galactic Empire has constructed a
          planet-destroying superweapon known as the Death Star. Princess Leia
          of Alderaan, a member of the Rebel Alliance, intercepts its technical
          plans and hides them inside the droid R2-D2 before being captured by
          the Empire's enforcer, Darth Vader.{'\n\n'}
          R2-D2 and his companion C-3PO escape to the desert planet Tatooine,
          where they are purchased by a young moisture farmer named Luke
          Skywalker. Luke discovers a message inside R2-D2 from Princess Leia
          pleading for help from Jedi Master Obi-Wan Kenobi. He seeks out
          Obi-Wan, a hermit living on the outskirts of Tatooine, who reveals
          the existence of the Force and begins training Luke in its ways.{'\n\n'}
          After Imperial stormtroopers murder his aunt and uncle, Luke joins
          Obi-Wan on a mission to deliver the Death Star plans to the Rebel
          Alliance. They hire roguish smuggler Han Solo and his co-pilot
          Chewbacca to transport them aboard the Millennium Falcon. The group
          is pulled aboard the Death Star, where they rescue Princess Leia.
          Obi-Wan sacrifices himself in a duel with Vader to allow the others
          to escape.{'\n\n'}
          With the plans delivered to the Rebels, Luke joins the assault on the
          Death Star, guided by the voice of Obi-Wan and the power of the
          Force. He fires a precise shot into the station's exhaust port,
          triggering a chain reaction that destroys the Death Star and delivers
          a decisive victory to the Rebel Alliance.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionHeader}>Details</Text>
        <Text style={styles.detailRow}>🎬  Runtime: 121 minutes</Text>
        <Text style={styles.detailRow}>🌍  Filming: Tunisia, England</Text>
        <Text style={styles.detailRow}>🏆  Academy Awards: 6 wins</Text>
        <Text style={styles.detailRow}>💰  Box Office: $775.4 million</Text>
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  panel: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0d0d1a',
    zIndex: 10,
  },
  scroll: {
    padding: 24,
    paddingBottom: 48,
  },
  backButton: {
    marginBottom: 20,
  },
  backText: {
    color: '#FFE81F',
    fontSize: 16,
    fontWeight: '600',
  },
  episodeLabel: {
    color: '#888',
    fontSize: 14,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  title: {
    color: '#FFE81F',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 8,
  },
  releaseDate: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 4,
  },
  director: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#FFE81F33',
    marginVertical: 20,
  },
  sectionHeader: {
    color: '#FFE81F',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    letterSpacing: 1,
  },
  body: {
    color: '#ddd',
    fontSize: 15,
    lineHeight: 24,
  },
  detailRow: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 22,
  },
});
