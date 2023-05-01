# Oxbury Pathfind

Imagine representing a grid-shaped game map as a 2-dimensional array. Each value of this array is
boolean `true` or `false` representing whether that part of the map is passable (a floor) or blocked
(a wall).

Write a function that takes such a 2-dimensional array `A` and 2 vectors `P` and `Q`, with `0,0` being the top left corner of the map and returns the distance of the shortest path between those points, respecting the walls in the map.

eg. Given the map (where `.` is passable - `true`, and `#` is blocked - `false`)

```
. P . . .
. # # # .
. . . . .
. . Q . .
. . . . .
```

then `pathfind(A, P, Q)` should return `6`.

_Please avoid using libraries to implement the algorithmic side of this challenge, other libraries (such as PHPUnit or Jest for testing) are welcome._

## What to do

1. Clone/Fork this repo or create your own
2. Implement the function described above in any mainstream language you wish
3. Provide unit tests for your submission
4. Fill in the section(s) below

## Comments Section

<!---
Please fill in the sections below after you complete the challenge.
--->

### What I'm Pleased With

I am happy that I was able to not only complete the task, but set it up in a way that it was able to run in the fastest way possible. Utilizing checks for nodes we have already visited allowed me to remove many steps to this algorithm , vastly speeding it up. As well as this, I think utilizing checks as well as tests, I feel safe that everything is accounted for, making sure the algorithm runs correctly.

It was a very fun problem to work on, and after refactoring a few times, I am very happy with my end solution.

### What I Would Have Done With More Time

I think it could have been fun to create a front end for this task. While not required, I think it may have been interesting to visualize what is happening while the algorithm is running.

Other than that, I think it may have been interesting to experiment with points in between the start and finish node. For example, we add stop 1, stop 2 etc. With this addition, we would need to find a way to keep track of our journey, with the visited array, but once we got from one point to another, we would need to think of a way to allow ourselves to travel back if needed. I think this could be an interesting addition to the task.# pathfinder
