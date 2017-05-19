The Game of Shells involves a flat surface, a row of three small containers and a ball small enough to fit underneath each of them. On each turn of the game the player is shown the ball being placed under one of the containers before the order of the containers is repeatedly shuffled at random. The player has to guess correctly which container the ball is under in order to win; otherwise they lose.

System Requirements
====================

yarn 0.24.4 (or npm v3+ switch yarn for npm below)
node v6+

Installation
=============

```
  yarn
```

Unit Tests
==========

```
  yarn test
```

Playing
=======

```
  yarn start
```
 Open browser on port shown to you

How it works
============

GameContainer contains the logic for the game. Each shell is given an index between 0 and 2 initially. The <Shuffler> component then after 2 seconds shuffles this array of indexes, and repositions the shells on screen using absolute positioning. 

Todo
====

* The game only shuffles the Shells once. If you happen to shuffle the shells and the random output hasn't changed, it's a pretty boring game. I'd need to introduce stages of shuffling into the Shuffle component, but I didn't get time. 
* One bad part that I haven't had a chance to refactor is the fact that the number of shells isn't centralised to one place. The Shuffler component can work on 'n' shells, but the rest of the code can't. The Shells could enter the dom via some kind of loop etc. 
* I don't think the Shuffler component should care about WIDTH_OF_SHELL. 
* What does this do on mobile, hard coding absolutely positioned elements probably isn't the best. 
* Tests on Shuffler component. 
* I'm not sure if Shuffler component needs to maintain state to determine if it's animation has run. (I'm not very good with CSS animations, I reckon there's a better way given more time)


