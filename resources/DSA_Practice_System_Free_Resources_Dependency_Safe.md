# DSA Practice System in Python
## Dependency-Safe, Free, Beginner-Friendly Practice Companion

**Last updated:** 2026-09-18

**Companion to:** `DSA_for_Data_Science_ML_Master_Roadmap.md`  
**Primary language:** Python 3  
**Goal:** Learn -> think -> trace -> implement -> apply -> explain -> retain.  
**Resource rule:** The core resources listed here can be used without paying. Some sites also have optional paid/Pro/Premium items; skip locked items.  
**Resource verification date:** 2026-09-18.

---

# 1. The central rule: do not practice future concepts accidentally

A problem is **dependency-safe** only when its intended solution can be built from:

1. the topic you are currently studying, and
2. concepts already unlocked in earlier stages.

Example:

```text
Learned:
Python basics -> complexity -> arrays

Not learned yet:
hashing -> two pointers -> sliding window
```

At that point, a problem tagged `Array + Hash Table` is not a good primary exercise. It may look easy, but the expected solution can introduce a future idea too early.

## 1.1 The tag rule

Before solving a platform problem, inspect every visible tag.

Use it when:

```text
all central tags are in your unlocked set
```

Skip it when:

```text
one central tag is a future topic
```

For the early stages, use the manual safe problem lists in this document instead of browsing randomly.

## 1.2 The editorial rule

If you solve a problem with your current knowledge and the editorial uses a future technique:

- keep your current solution,
- record its time/space complexity,
- write `REVISIT AFTER <future topic>`,
- do not force the future method into your head yet.

Later, revisit the same problem and compare approaches. This is one of the best ways to understand why a new data structure or pattern exists.

---

# 2. The nine-mode practice cycle

For every micro-topic, practice through several modes.

| Mode | What you do | Typical time | Why it matters |
|---|---|---:|---|
| Think | Answer conceptual questions without code | 3-8 min | Builds reasoning before syntax |
| Paper | Trace state by hand | 5-15 min | Makes hidden state visible |
| Implement | Code the primitive/algorithm from scratch | 10-30 min | Converts knowledge into skill |
| Apply | Solve 1-3 dependency-safe problems | 15-60 min | Builds recognition |
| Debug | Fix a deliberately broken solution | 5-20 min | Builds real engineering ability |
| Visualize | Draw or animate state transitions | 5-15 min | Builds mental models |
| Teach | Explain it to a person/rubber duck/AI | 3-10 min | Exposes fuzzy understanding |
| Publish | Make a tiny learning-in-public artifact | 5-15 min | Forces compression and recall |
| Apply to a system | Use it in a tiny real-world/ML design | 10-45 min | Connects DSA to engineering |

You do not need all nine every day. Complete all nine at least once for every major topic, and 4-6 modes for smaller chunks.

---

# 3. Practice intensity options

## 3.1 Busy workday: 20-30 minutes

```text
5 min   recall/think
5 min   paper trace
10 min  implement
10 min  one tiny problem OR one debugging exercise
```

## 3.2 Normal session: 45-60 minutes

```text
5 min   recall
10 min  paper + visualization
15 min  implementation
20 min  one problem
5 min   invariant + complexity aloud
5 min   save one note/flashcard
```

## 3.3 Weekend deep session: 90 minutes

```text
10 min  blank-page recall
15 min  paper exercises
20 min  from-scratch implementation
30 min  2-3 problems
10 min  debugging / edge cases
5 min   teach or make a post
```

---

# 4. Chunk completion gate

Score every row 0, 1, or 2.

```text
0 = cannot do it
1 = can do it with notes/hints
2 = can do it independently
```

| Skill | Target |
|---|---:|
| Define the concept in simple words | 2 |
| Draw/trace one example | 2 |
| Implement the core operation | 2 |
| State time and extra-space complexity | 2 |
| Name one common bug/edge case | 2 |
| Solve one unseen easy problem | 2 |
| Explain why the tool is useful | 2 |
| Compare it with one alternative | 1-2 |

**Unlock rule:** move on around **13/16**, with no zero in the first six rows.

---

# 5. Universal paper worksheet

Use one sheet/page per new algorithm.

```text
TOPIC:
DATE:

1. What problem does this solve?
2. Input:
3. Output:
4. What is n?
5. Data structure/state used:
6. Initial state:
7. Invariant:
8. One hand-traced example:
9. Edge cases:
10. Time complexity:
11. Extra space:
12. One bug I made:
13. One real-world/ML connection:
14. One-sentence beginner explanation:
```

For iterative algorithms:

```text
step | i/left | j/right | important state | output/decision
-----|--------|---------|-----------------|----------------
0    |        |         |                 |
1    |        |         |                 |
2    |        |         |                 |
```

For recursion:

```text
call | arguments | base case? | child call(s) | return value
```

For BFS/queues:

```text
step | queue before | popped | newly visited | queue after
```

For dynamic programming:

```text
state meaning | base case | transition | evaluation order | answer location
```

---

# 6. Free resource map

Use different resources for different jobs. Do not try to use all of them every day.

## 6.1 CodingBat - baby Python practice

**URL:** https://codingbat.com/python

Useful narrow categories:

- `Warmup-1`: basic expressions/conditionals, no loops
- `Warmup-2`: simple strings/lists + loops
- `String-1`: basic string operations, no loops
- `String-2`: strings + one loop
- `List-1`: basic list indexing, no loops
- `List-2`: list traversal with one loop
- `Logic-1` / `Logic-2`: boolean and conditional reasoning

**Best stages:** 0-3.  
**Strength:** very low cognitive load and few hidden DSA dependencies.

## 6.2 Exercism Python Track - Python fluency

- Main: https://exercism.org/tracks/python
- Exercises: https://exercism.org/tracks/python/exercises
- Concepts: https://exercism.org/tracks/python/concepts

The Python track is free and includes concept material plus many coding exercises.

**Best for:** lists, dicts, loops, conditionals, tests, idiomatic Python.  
**Dependency warning:** check exercise prerequisites before starting.

## 6.3 Python Tutor - execution visualization

**URL:** https://pythontutor.com/

Use it for:

- aliasing/mutation,
- references,
- loops,
- linked-list nodes,
- recursive calls,
- small tree traversals,
- debugging.

**Rule:** predict the next state before clicking forward.

## 6.4 VisuAlgo - DSA animation + training

- Main: https://visualgo.net/en
- Training: https://visualgo.net/training

Modules include arrays, sorting, linked lists, stack/queue/deque, heaps, hash tables, BST, graph representations, DFS/BFS, DSU, MST, shortest paths, recursion, Fenwick tree, segment tree, and more.

**Best use:** watch one operation, pause, predict, then run it.

## 6.5 OpenDSA - interactive textbook and exercises

**URL:** https://opendsa.org/

Free/open-source materials with visualizations, knowledge questions, proficiency exercises, and small code-writing tasks.

**Best for:** complexity, lists, sorting, hashing, trees, heaps, graphs, recursion.

## 6.6 HackerRank - direct implementation-style practice

- Data Structures: https://www.hackerrank.com/domains/data-structures
- Algorithms: https://www.hackerrank.com/domains/algorithms

Useful subdomains include Arrays, Linked Lists, Trees, Stacks, Queues, Heap, Disjoint Set, Trie.

**Best stages:** 2 onward.  
**Rule:** choose Easy first and only the unlocked subdomain.

## 6.7 GeeksforGeeks Practice - large topic-filtered bank

**URL:** https://www.geeksforgeeks.org/practice-problems

Useful topic filters include Arrays, Matrix, Strings, Searching, Sorting, Hashing, Two Pointers, Sliding Window, Prefix Sum, Linked List, Stack, Queue, Deque, Tree, BST, Heap, Graph, Greedy, Backtracking, DP, Trie, Segment Tree.

**Warning:** `Easy` does not guarantee dependency safety. Inspect tags/expected method.

## 6.8 LeetCode - interview-style practice

Study plans:

- LeetCode 75: https://leetcode.com/studyplan/leetcode-75/
- Binary Search: https://leetcode.com/studyplan/binary-search/
- Dynamic Programming: https://leetcode.com/studyplan/dynamic-programming/

Tags:

- Array: https://leetcode.com/tag/array/
- String: https://leetcode.com/tag/string/
- Hash Table: https://leetcode.com/tag/hash-table/
- Two Pointers: https://leetcode.com/tag/two-pointers/
- Sliding Window: https://leetcode.com/tag/sliding-window/
- Prefix Sum: https://leetcode.com/tag/prefix-sum/
- Binary Search: https://leetcode.com/tag/binary-search/
- Stack: https://leetcode.com/tag/stack/
- Queue: https://leetcode.com/tag/queue/
- Linked List: https://leetcode.com/tag/linked-list/
- Tree: https://leetcode.com/tag/tree/
- Heap/Priority Queue: https://leetcode.com/tag/heap-priority-queue/
- Backtracking: https://leetcode.com/tag/backtracking/
- Graph: https://leetcode.com/tag/graph/
- Greedy: https://leetcode.com/tag/greedy/
- Dynamic Programming: https://leetcode.com/tag/dynamic-programming/
- Trie: https://leetcode.com/tag/trie/

**Free rule:** solve unlocked/free problems and skip Premium-lock items.

## 6.9 NeetCode - structured index and video solutions

- Roadmap: https://neetcode.io/roadmap
- NeetCode 250: https://neetcode.io/practice/practice/neetcode250

Use it only after a topic is introduced in your roadmap. Some items/features are Pro; use free items and skip locked ones.

## 6.10 Striver A2Z / Take U Forward - large structured sheet

**URL:** https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z

Good for revision and extra problems after each matching stage. Do not jump ahead in the sheet.

## 6.11 CodeChef - numeric difficulty + topics

**URL:** https://www.codechef.com/practice

Start with low ratings and one known topic. Skip Pro items.

## 6.12 Codeforces - ratings + tags

**URL:** https://codeforces.com/problemset

Useful tags: `implementation`, `data structures`, `two pointers`, `binary search`, `sortings`, `greedy`, `dfs and similar`, `graphs`, `trees`, `dp`, `dsu`.

**Beginner rule:** start around rating 800, then 900/1000. Choose problems whose full tag set is already unlocked.

## 6.13 CSES - canonical algorithmic problems

**URL:** https://cses.fi/problemset

Major categories: Introductory Problems, Sorting and Searching, Dynamic Programming, Graph Algorithms, Range Queries, Tree Algorithms.

**Best stages:** 5 onward.  
**Warning:** often expects efficient solutions; do not enter a section before learning its technique.

## 6.14 HackerEarth - tutorial + practice by topic

**URL:** https://www.hackerearth.com/practice/

Useful tracks include:

- Basic Programming: Complexity Analysis, Implementation, Recursion
- Data Structures: Arrays, Stacks, Queues, Hash Tables, Linked Lists, Trees, Heaps, Trie, DSU
- Algorithms: Searching, Sorting, Greedy, Graphs, String Algorithms, Dynamic Programming

## 6.15 MIT 6.006 - rigorous paper/analysis work

- Course: https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/
- Problem sets: https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/problem-sets/
- Assignments + solutions: https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/assignments/

Use as a second pass for written reasoning, asymptotics, correctness arguments, and deeper algorithm design.

## 6.16 UC Berkeley CS61B - labs/projects/discussions

- Course: https://sp25.datastructur.es/
- Projects: https://sp25.datastructur.es/projects/
- Labs: https://sp25.datastructur.es/labs/
- Conceptual resources: https://sp25.datastructur.es/resources/conceptual/

Public material includes references, linked lists, arrays, asymptotics, DSU, maps/BST, hashing, heaps, graph traversal, shortest paths, MST, DAG, tries, sorting.

**Caution:** Java-oriented. Use for concepts, worksheets, and project ideas; translate only after the Python concept is known.

## 6.17 Princeton Algorithms - broader reference/exercises

**URL:** https://algs4.cs.princeton.edu/home/

Online excerpts, videos, exercises, programming assignments, and code for sorting, searching, symbol tables, trees, hashing, graphs, strings.

**Caution:** Java-oriented.

## 6.18 CP-Algorithms - later reference

**Main:** https://cp-algorithms.com/

Useful pages:

- BFS: https://cp-algorithms.com/graph/breadth-first-search.html
- DFS: https://cp-algorithms.com/graph/depth-first-search.html
- Topological sort: https://cp-algorithms.com/graph/topological-sort.html
- DSU: https://cp-algorithms.com/data_structures/disjoint_set_union.html
- Fenwick tree: https://cp-algorithms.com/data_structures/fenwick.html
- 0-1 BFS: https://cp-algorithms.com/graph/01_bfs.html

Use after the beginner explanation, not before.

## 6.19 USACO Guide - curated advanced problem learning

**URL:** https://usaco.guide/

Free explanations, curated resources, problem sets, solutions, and progress tracking. Best once you are comfortable with core DSA, especially graphs and DP.

## 6.20 Excalidraw - paper/teaching diagrams

**URL:** https://excalidraw.com/

Use for memory diagrams, linked-list arrows, recursion trees, BFS layers, heap array/tree views, and system sketches.

## 6.21 Mermaid - diagram-as-code

- Open source: https://mermaid.ai/open-source
- Live editor: https://mermaid.ai/live/

Use for flowcharts, dependency DAGs, state diagrams, and README/blog illustrations.

## 6.22 Anki - spaced recall

**URL:** https://apps.ankiweb.net/

Desktop versions are free; AnkiWeb sync is free. Store small recall cards, not complete solutions.

Good card:

```text
Front: When does BFS find an unweighted shortest path?
Back: When path cost is number of equal-weight/unweighted edges.
```

Bad card:

```text
Front: Solve this entire 40-line graph problem.
```

## 6.23 freeCodeCamp - long Python DSA video

**URL:** https://www.youtube.com/watch?v=pkYVOmU3MgA

Covers binary search, linked lists, complexity, BST/traversals, hash tables, sorting/divide-and-conquer, recursion/DP, BFS/DFS/shortest paths.

**Rule:** watch only the chapter matching your current stage.

## 6.24 NumPy practice for DS/ML

- Quickstart: https://numpy.org/doc/stable/user/quickstart
- 100 NumPy exercises: https://github.com/rougier/numpy-100

The exercise repository includes exercise-only, hint, and solution versions.

## 6.25 SciPy sparse structures

**URL:** https://docs.scipy.org/doc/scipy/tutorial/sparse.html

Use when sparse matrices are unlocked. Practice COO/CSR/CSC, dense-vs-sparse memory, and graph/sparse computation.

## 6.26 System design after DSA foundations

- System Design Primer: https://github.com/donnemartin/system-design-primer
- ByteByteGo System Design 101: https://github.com/ByteByteGoHq/system-design-101
- Build Your Own X: https://github.com/codecrafters-io/build-your-own-x

Do not begin full distributed-system design during array basics. Start with micro-design questions that practice choosing data structures.

---

# 7. Platform order by maturity

```text
Stage 0-3:
CodingBat -> Exercism -> Python Tutor -> OpenDSA

Stage 2-8:
HackerRank / HackerEarth / GFG -> selected LeetCode

Stage 5+:
CSES -> CodeChef low rating -> Codeforces 800-1000

After topic understanding:
NeetCode / Striver A2Z for revision

For deeper theory:
MIT 6.006 / Princeton / CS61B

For advanced reference:
CP-Algorithms / USACO Guide
```

---

# 8. Dependency unlock matrix

| Stage | New concepts | Safe tags/categories | Avoid intentionally |
|---|---|---|---|
| 0 | Python variables, conditions, loops, functions, references | implementation, basic Python | DSA patterns |
| 1 | Big-O, time/space, loop counting, amortized intuition | complexity analysis | future optimizations |
| 2 | arrays/lists, matrix, NumPy basics | array, matrix, implementation | hashing, two pointers, window, binary search |
| 3 | strings | string, array | hashing, two pointers, window, trie |
| 4 | hash map/set | hash table, frequency, set | prefix/window/search if not learned |
| 5 | prefix sum, two pointers, sliding window | prefix sum, two pointers, sliding window | binary-search-on-answer, stack, recursion |
| 6 | linear/binary search, bounds | binary search | heaps/graphs |
| 7 | sorting, merge/quick/counting, Python sort | sorting, divide-and-conquer where introduced | stack/queue/linked list |
| 8 | stack, queue, deque, monotonic structures | stack, queue, deque | linked-list/tree/graph concepts |
| 9 | linked list, fast/slow pointers | linked list, cycle finding | tree/graph recursion |
| 10 | recursion, divide-and-conquer | recursion, divide and conquer | backtracking/tree/DP |
| 11 | backtracking | backtracking | tree-specific methods unless taught |
| 12 | trees, BST, traversals | tree, BST, tree DFS/BFS | heap/graph/DP if not unlocked |
| 13 | heap, priority queue, top-K | heap, priority queue | graph algorithms until Stage 14 |
| 14 | graph, BFS/DFS, DAG, Dijkstra, DSU, MST | graph/shortest path/DSU | greedy/DP before their stages |
| 15 | greedy | greedy, intervals | DP as shortcut before Stage 16 |
| 16 | dynamic programming | DP | advanced string/range structures |
| 17 | trie, KMP, rolling hash | trie, string matching | Fenwick/segment tree unless needed |
| 18 | NumPy memory, sparse, streaming, DS/ML apps | array/sparse/top-K/graph apps | specialized structures unless needed |

---

# 9. Safe problem-selection algorithm

Before clicking Solve:

```text
1. Read title + statement.
2. Read all topic tags.
3. Ignore only generic tags such as "implementation".
4. Compare remaining tags with your unlocked set.
5. If a future tag is central, skip.
6. Write the approach you are allowed to use.
7. Set a time box.
```

Time boxes:

```text
Baby exercise:        5-10 min
Easy direct DSA:      15-25 min
Easy recognition:     25-35 min
Medium after mastery: 35-50 min
```

When stuck, ask for one hint before reading a full solution.

---
# 10. Stage 0 - Python foundations practice

## 10.1 Variable, value, name, object, reference

### Think

1. After `b = a`, did Python copy the object or bind another name to it?
2. Why can `b.append(...)` change what you observe through `a`?
3. What is the difference between equality and identity?
4. Why can two equal lists have different identities?

### Paper

Trace this without running it:

```python
a = [1, 2]
b = a
c = a.copy()
b.append(3)
c.append(4)
```

Draw name boxes and object boxes with arrows.

### Implement

Write a tiny script that demonstrates:

- aliasing,
- shallow copying,
- rebinding,
- `==` vs `is`.

### Visualize

Use Python Tutor: https://pythontutor.com/

### Safe external practice

- CodingBat Warmup-1: https://codingbat.com/python/Warmup-1
- Exercism concepts: https://exercism.org/tracks/python/concepts

### Teach

Explain this analogy:

> A variable name is like a sticky note pointing to an object box.

Then explain where the analogy is imperfect.

### AI practice prompt

```text
I have learned only Python variables, assignment, list literals, object references,
mutation, rebinding, ==, is, and shallow list copying.
I have NOT learned algorithms, hashing, recursion, classes, or DSA patterns.
Generate 8 short prediction questions where I must draw which variable points to
which object after each line. Do not show answers until I answer one question.
Use only lists, integers, strings, assignment, append, and copy().
```

### Exit gate

You can predict aliasing/mutation correctly before running the code.

---

## 10.2 Mutable vs immutable

### Paper

Predict outcomes for:

- integer reassignment,
- string concatenation,
- list append,
- tuple containing a list,
- passing a list to a function that mutates it.

### Debug

Ask AI to create a function that unexpectedly mutates its caller's list. Diagnose the shared reference.

### Safe resources

- Python Tutor
- Python tutorial data structures: https://docs.python.org/3/tutorial/datastructures.html
- Exercism lists concept: https://exercism.org/tracks/python/concepts/lists

### Publish challenge

From memory, make one diagram titled:

> `a = b` is not the same as making a deep copy.

Use one example and four sentences.

---

## 10.3 Conditionals and boolean reasoning

### Practice resources

- CodingBat Logic-1: https://codingbat.com/python/Logic-1
- CodingBat Logic-2: https://codingbat.com/python/Logic-2
- Exercism conditionals: https://exercism.org/tracks/python/concepts/conditionals

### Paper

Create truth tables for:

```text
A and B
A or B
not A
(A and B) or C
```

### Implement

Write functions for:

- grade bucket,
- leap-year check,
- hostel meal availability from day/time flags,
- minimum of three numbers without `min()`.

### Dependency guard

No hashing, sorting, recursion, or DSA pattern is needed.

---

## 10.4 Loops and `range`

### Safe resources

- CodingBat Warmup-2: https://codingbat.com/python/Warmup-2
- Exercism loops: https://exercism.org/tracks/python/concepts/loops

### Paper trace

Write exact values generated by:

```python
range(5)
range(2, 7)
range(5, 0, -1)
range(6, -1, -2)
```

Then trace nested loops and count body executions.

### Implement

Without comprehensions first:

- sum `1..n`,
- count evens,
- count vowels,
- multiplication table,
- maximum from a sequence of inputs.

### AI prompt

```text
Generate 10 Python loop-tracing questions for a beginner.
Allowed: integers, strings, lists, for, while, range, if, break, continue.
Forbidden: dict, set, recursion, sorting, binary search, comprehensions.
For every question ask me for (a) printed output and (b) number of loop-body executions.
One question at a time; no answer until I respond.
```

---

## 10.5 Functions

### Practice targets

- parameters vs arguments,
- `return` vs `print`,
- local variables,
- multiple return values,
- input mutation.

### Debug tasks

Find/fix bugs caused by:

- missing `return`,
- returning from inside a loop too early,
- unexpected mutation,
- wrong parameter order,
- shadowing a useful built-in name such as `list` or `sum`.

### Teach test

Explain without code:

> Defining a function is not the same as calling a function.

---

## 10.6 List basics

### Safe practice

- CodingBat List-1: https://codingbat.com/python/List-1
- CodingBat List-2: https://codingbat.com/python/List-2
- Exercism lists: https://exercism.org/tracks/python/concepts/lists

### Implement using only loops/indexing

- sum list,
- count a target,
- manual shallow copy,
- reverse into a new list,
- first target index,
- filter positives into a new list.

### Do not use yet

- dict/set optimization,
- two-pointer pattern,
- sorting as a shortcut.

---

# 11. Stage 1 - Complexity and algorithmic thinking

## 11.1 Identify the input-size variables

For each scenario, define the input size precisely:

- list of numbers,
- string,
- `m x n` matrix,
- graph,
- tree,
- ML table with rows and features.

### AI prompt

```text
Give me 12 short problem descriptions. My only task is to define the input-size
variables correctly (n, m, V, E, rows, columns, etc.).
Do not ask me to solve the algorithm.
After each answer, tell me whether my size variable is precise and why.
```

---

## 11.2 Count operations before simplifying to Big-O

### Paper exercises

Analyze exact/approximate repetition counts for:

```python
for i in range(n):
    x += 1
```

Then:

- two consecutive loops,
- full nested loops,
- triangular loop `for j in range(i)`,
- halving loop,
- fixed inner loop of 100 iterations.

### Resources

- HackerEarth practice (Complexity Analysis): https://www.hackerearth.com/practice/
- OpenDSA: https://opendsa.org/
- MIT 6.006 second pass: https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/

---

## 11.3 Big-O recognition

### Paper drill

Classify snippets into:

```text
O(1)
O(log n)
O(n)
O(n log n)
O(n^2)
O(2^n)
```

### Rule

Never memorize `two loops = n^2`. Count how each loop bound changes.

### AI prompt

```text
Act as my asymptotic-analysis coach.
I know Python loops/functions/lists but no advanced DSA.
Generate one short Python snippet at a time and ask for time and extra-space complexity.
Start with direct loops, then consecutive loops, triangular loops, halving/doubling,
and loops over 2D arrays. Do not use recursion yet.
Require me to explain WHY before revealing the result.
```

---

## 11.4 Time vs extra space

Classify examples that:

- mutate input in place,
- build a result list,
- create a slice,
- create a 2D output matrix,
- use only scalar counters.

Write answers in this format:

```text
Input storage: ...
Output storage: ...
Auxiliary/extra space: ...
```

---

## 11.5 Amortized thinking

Simulate a conceptual dynamic array that doubles capacity.

Use a table:

```text
append # | size before | capacity before | resize? | copied items | capacity after
```

Do 16 appends. Explain why an occasional expensive resize can coexist with amortized O(1) append.

---

# 12. Stage 2 - Arrays, Python lists, matrices, NumPy

## 12.1 Indexing and traversal

### Safe practice

- CodingBat List-1: https://codingbat.com/python/List-1
- CodingBat List-2: https://codingbat.com/python/List-2
- HackerRank Data Structures -> Arrays: https://www.hackerrank.com/domains/data-structures

### LeetCode safe starter allowlist

1. Concatenation of Array: https://leetcode.com/problems/concatenation-of-array/
2. Shuffle the Array: https://leetcode.com/problems/shuffle-the-array/
3. Kids With the Greatest Number of Candies: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
4. Richest Customer Wealth: https://leetcode.com/problems/richest-customer-wealth/
5. Find Numbers with Even Number of Digits: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
6. Max Consecutive Ones: https://leetcode.com/problems/max-consecutive-ones/

### Paper

Given `[5, 1, 8, 2]`, trace:

- sum,
- maximum-so-far,
- count `> 3`,
- first target position.

### Implement from scratch

- traversal,
- sum,
- min/max,
- count,
- linear search,
- copy,
- reverse into a new list.

### Do not optimize using

- set/dict,
- two-pointer compaction,
- prefix sum,
- binary search.

---

## 12.2 Insertion/deletion and shifting

### Physical exercise

Write values on small paper cards in a row. Insert at index 1 and physically shift cards right. Delete index 2 and shift left.

### Implement

Create an educational fixed-capacity array using a Python list of `None` plus a `size` variable. Implement:

- insert at index,
- delete at index,
- append when capacity permits.

Then explain why middle/front operations can cost O(n).

---

## 12.3 Dynamic-array growth

Build a tiny educational `DynamicArray` class with:

- `_capacity`,
- `_size`,
- backing list,
- `append`,
- `get`,
- resize-by-doubling.

### Design question

Why would an implementation allocate more capacity than the current number of elements?

---

## 12.4 Two-dimensional arrays

### Safe practice

- HackerRank `2D Array - DS` via Data Structures -> Arrays.
- LeetCode Richest Customer Wealth.

### Paper

Draw row/column indexes for a 3x4 matrix and trace nested-loop order.

### Implement

- row sums,
- column sums,
- diagonal sum,
- transpose into a new matrix,
- maximum value with coordinates.

### Dependency guard

Do not use BFS/DFS yet. A matrix becomes a graph model only after graphs are unlocked.

---

## 12.5 NumPy shape, dtype, itemsize, nbytes

### Resources

- NumPy quickstart: https://numpy.org/doc/stable/user/quickstart
- 100 NumPy exercises: https://github.com/rougier/numpy-100

### Practice

For each created array, predict before running:

```text
shape
ndim
size
dtype
itemsize
nbytes
```

### Paper

Calculate expected bytes manually:

```text
number of elements x bytes per element
```

### DS/ML mini-task

Compare memory for 1,000,000 values as `float64` and `float32`.

---

## 12.6 Views vs copies

Create and test:

- basic slice,
- `.copy()`,
- reshape,
- transpose.

Before mutation, write:

> I predict source WILL / WILL NOT change because ...

Then verify.

### Teach/share artifact

Draw one diagram titled:

> A NumPy slice can be another window onto the same underlying data.

---

## 12.7 Broadcasting

### Paper

Predict compatibility/output shape:

```text
(3, 4) + (4,)
(5, 1) + (1, 7)
(2, 3, 4) + (4,)
(2, 3) + (2,)
```

### Practice

Use NumPy quickstart plus beginner `numpy-100` questions involving shapes, reshape, and broadcasting.

### System/ML connection

Estimate memory of an intermediate tensor from output shape and dtype before allocating it.

---

# 13. Stage 3 - Strings

## 13.1 Indexing, slicing, immutability

### Safe practice

- CodingBat String-1: https://codingbat.com/python/String-1
- CodingBat String-2: https://codingbat.com/python/String-2

### LeetCode safe list

1. Defanging an IP Address: https://leetcode.com/problems/defanging-an-ip-address/
2. Goal Parser Interpretation: https://leetcode.com/problems/goal-parser-interpretation/
3. Truncate Sentence: https://leetcode.com/problems/truncate-sentence/
4. Length of Last Word: https://leetcode.com/problems/length-of-last-word/
5. To Lower Case: https://leetcode.com/problems/to-lower-case/

### Paper

Write positive and negative indexes above a string. Compute several slices by hand.

### Implement

Without later patterns:

- count one character,
- first occurrence,
- build transformed copy,
- remove spaces,
- manual word splitting as an exercise.

### Do not use yet

- frequency dictionaries,
- two pointers,
- sliding windows,
- trie,
- KMP.

---

## 13.2 String construction

Create two versions of a string builder:

- repeated concatenation,
- append pieces to list then `''.join(...)`.

Explain the allocation idea. Benchmark only as an experiment, not as proof of universal performance.

---

## 13.3 Lexicographic comparison

Paper practice:

- compare character-by-character,
- find first differing position,
- handle prefix case such as `app` vs `apple`.

### AI prompt

```text
Generate 8 beginner string questions using only indexing, slicing, len, loops,
conditionals, concatenation, split/join, and comparison.
Forbidden: dict, set, Counter, two pointers, sliding window, sorting, recursion.
One question at a time. Do not give the solution before my attempt.
```

---

# 14. Stage 4 - Hash maps and sets

## 14.1 Dictionary lookup and frequency tables

### Resources

- Exercism dictionaries: https://exercism.org/tracks/python/concepts/dicts
- HackerEarth Hash Tables via practice track: https://www.hackerearth.com/practice/
- GFG Hashing filter: https://www.geeksforgeeks.org/practice-problems

### LeetCode allowlist

1. Contains Duplicate: https://leetcode.com/problems/contains-duplicate/
2. Two Sum: https://leetcode.com/problems/two-sum/
3. Valid Anagram: https://leetcode.com/problems/valid-anagram/
4. Ransom Note: https://leetcode.com/problems/ransom-note/
5. Isomorphic Strings: https://leetcode.com/problems/isomorphic-strings/

### Paper

For the word `mississippi`, build a frequency dictionary one character at a time.

Table:

```text
step | char | dict before | dict after
```

### Implement

Without `Counter` first:

- frequency map,
- unique count using set,
- first repeated value,
- group words by first letter,
- build value -> index map.

Then repeat some tasks using `Counter`/`defaultdict` and compare readability.

---

## 14.2 Hashability

Classify which can be dict/set keys:

- `int`,
- `str`,
- tuple of ints,
- list,
- set,
- `frozenset`,
- tuple containing a list.

Explain why stable hashing and equality matter.

---

## 14.3 Seen-set pattern

### Paper

Trace duplicate detection:

```text
[4, 7, 2, 4]
```

At each step write the `seen` set.

### Mini system-design task

You receive a stream of request IDs and want to ignore duplicates seen during the current run. Which structure do you choose and why?

### Teach test

Explain why a set can beat repeated `x in list` scans for large repeated membership checks.

---

## 14.4 Frequency/grouping pattern

Mini DS/ML tasks:

- category frequency,
- label -> integer ID mapping,
- token counts,
- deduplicating IDs,
- grouping events by user.

### Social post prompt

Create one post from memory:

```text
Problem: detect duplicates.
Naive approach: repeated list scan.
Hashing idea: remember what was seen.
Complexity difference:
One caveat/trade-off: extra memory.
```

---

# 15. Stage 5 — Prefix Sums, Two Pointers, and Sliding Windows [P0]

**Prerequisites unlocked before this stage:** Python basics, complexity, arrays/lists, strings, dictionaries/sets.

**Do not use yet unless the individual problem explicitly needs only earlier material:** linked lists, recursion, trees, heaps, graphs, greedy proofs, dynamic programming.

This stage is where problem solving starts to feel less like “write a loop” and more like “recognize a reusable pattern.” Learn the three patterns separately first. Do not solve mixed-pattern questions until you can identify each one independently.

---

## 15.1 Prefix sums — first chunk

### Mental model

Instead of repeatedly recomputing a sum for every range, precompute cumulative information once.

For:

```text
arr = [3, 1, 4, 2]
```

use an exclusive prefix convention:

```text
prefix = [0, 3, 4, 8, 10]
```

Then the sum of `arr[l:r]` is:

```text
prefix[r] - prefix[l]
```

### Thinking practice

Answer without writing code:

1. Why is `prefix` usually length `n + 1` in this convention?
2. What does `prefix[i]` mean exactly?
3. How many array values are included in `prefix[3]`?
4. Why does subtraction remove the values before `l`?
5. When is preprocessing worthwhile compared with summing a range directly?

### Paper practice

For:

```text
[5, -2, 7, 1, -3, 4]
```

write:

```text
index:
value:
prefix:
```

Then answer the sums of:

- `[0:3]`
- `[2:5]`
- `[1:6]`
- an empty range
- the entire array

Do all arithmetic by hand first.

### Implementation practice

Implement these in order:

1. `build_prefix(arr)`
2. `range_sum(prefix, l, r)` using half-open `[l, r)`
3. a class `RangeSum` that preprocesses once and answers many queries
4. prefix counts: number of even values up to each position
5. prefix sums over a binary list

### Debugging practice

Ask yourself which of these is wrong and why:

```python
prefix = [0] * len(arr)
for i, x in enumerate(arr):
    prefix[i] = prefix[i - 1] + x
```

Look specifically for:

- negative-index behavior at `i == 0`,
- off-by-one errors,
- inclusive vs exclusive range confusion.

### Safe public problems

Use these only after you can build the prefix array yourself:

- LeetCode 1480 — **Running Sum of 1d Array**
- LeetCode 724 — **Find Pivot Index**
- LeetCode 303 — **Range Sum Query — Immutable**

**Search/tag terms:** `prefix sum`, `cumulative sum`, `range sum`.

Free places to search:

- GeeksforGeeks Practice → tag/topic **Prefix Sum**
- HackerEarth Practice → Arrays / prefix-sum-style problems
- CSES → begin with simpler Sorting and Searching problems only when their other prerequisites are already unlocked

### Tiny DS/ML connection

Given daily model inference counts:

```text
[120, 130, 95, 160, 170, 140, 200]
```

preprocess once so you can answer many “how many requests occurred between day `l` and day `r`?” queries.

### Teach test

Explain to a beginner:

> “A prefix sum is like keeping the running total on every page of a bank statement so you can calculate the spending between two dates using subtraction instead of rereading every transaction.”

Then draw one example.

---

## 15.2 Prefix sum + hash map — only after both are comfortable

This is the first deliberate combination of two already-unlocked ideas.

### Core question

If the current prefix sum is `p` and you want a subarray whose sum is `k`, what earlier prefix value would you need?

Answer:

```text
p - k
```

### Paper exercise

For:

```text
arr = [1, 2, 3, -2, 2]
k = 3
```

make a table:

```text
i | value | prefix | needed=prefix-k | seen-prefix-counts | answer
```

Do not code until the table makes sense.

### Safe problem

- LeetCode 560 — **Subarray Sum Equals K**

Do this only after ordinary prefix sums and dictionary frequency counting are both mastered.

### Dependency warning

Do **not** mistake every subarray problem for sliding window. Sliding window does not automatically work when arbitrary negative numbers can invalidate monotonic window behavior. Prefix sums + hashing is often the correct tool there.

---

## 15.3 Two pointers — opposite-direction chunk

### Mental model

Two indices move according to structure in the data rather than trying every pair.

Typical shape:

```text
left →  [ ... sorted / constrained data ... ]  ← right
```

### Paper practice

Trace a pair-sum search on:

```text
[1, 3, 4, 6, 8, 11]
target = 10
```

Table:

```text
left | right | a[left] | a[right] | sum | movement | reason
```

### Implementation practice

1. palindrome check
2. reverse an array in place
3. pair sum in sorted array
4. compare two strings from the ends

### Safe problems

- LeetCode 125 — **Valid Palindrome**
- LeetCode 167 — **Two Sum II — Input Array Is Sorted**
- LeetCode 344 — **Reverse String**

**Tags/search:** `two pointers`, `two pointer`, `sorted pair`.

### What not to use yet

Do not use binary search merely because the input is sorted unless you have reached Stage 6. Solve these with the intended pointer movement first.

---

## 15.4 Two pointers — same-direction / read-write chunk

Mental model:

```text
read  → scans input
write → points to where the next kept result belongs
```

### Paper practice

Trace duplicate removal on:

```text
[1, 1, 2, 2, 2, 4, 5, 5]
```

Write:

```text
read | write | value read | array after action | invariant
```

### Safe problems

- LeetCode 283 — **Move Zeroes**
- LeetCode 26 — **Remove Duplicates from Sorted Array**
- LeetCode 27 — **Remove Element**

### Teach test

Explain the invariant:

> Everything before `write` is already in its final valid form.

If you cannot state the invariant, trace another example before moving on.

---

## 15.5 Fixed-size sliding window

### Recognition signal

Look for:

- “contiguous”
- “subarray/substring”
- fixed length `k`
- aggregate that can be updated when one item enters and one leaves

### Paper practice

For:

```text
[2, 1, 5, 1, 3, 2]
k = 3
```

find every window sum without recomputing all three values each time.

Table:

```text
left | right | outgoing | incoming | previous sum | new sum
```

### Implementation

- maximum sum of `k` consecutive elements
- average of each window of size `k`
- count vowels in every string window of length `k`

### Safe problems

- LeetCode 643 — **Maximum Average Subarray I**
- LeetCode 1456 — **Maximum Number of Vowels in a Substring of Given Length**

**Tags/search:** `sliding window`, `fixed window`.

---

## 15.6 Variable-size sliding window

### Recognition signal

The window grows until a rule becomes invalid, then the left side moves until validity is restored.

Generic skeleton:

```python
left = 0
for right in range(len(data)):
    add(data[right])

    while window_is_invalid():
        remove(data[left])
        left += 1

    record_answer()
```

Do not memorize this without being able to name what `add`, `remove`, `invalid`, and `answer` mean for the actual problem.

### Paper practice

For the string:

```text
"abcabcbb"
```

trace the longest window with no repeated character.

Write:

```text
right | char | frequency/set | left before | left after | current window | best
```

### Safe problems

- LeetCode 3 — **Longest Substring Without Repeating Characters**
- LeetCode 209 — **Minimum Size Subarray Sum** (for positive integers)
- LeetCode 567 — **Permutation in String**
- LeetCode 438 — **Find All Anagrams in a String**

### Beginner ordering

Do them in this order:

```text
643 → 1456 → 3 → 209 → 567 → 438
```

---

## 15.7 Stage 5 resource map

| Need | Free resource | What to search/open |
|---|---|---|
| Beginner visualization | VisuAlgo | Array / Prefix Sum when available; otherwise trace manually |
| Easy direct practice | GeeksforGeeks Practice | Prefix Sum, Two Pointers, Sliding Window |
| Interview practice | LeetCode | tags: Prefix Sum, Two Pointers, Sliding Window |
| Curated progression | NeetCode Roadmap / NeetCode 250 | Arrays & Hashing → Two Pointers → Sliding Window |
| Larger sheet | Striver A2Z | Arrays + two-pointer/sliding-window sections |
| Deeper later | USACO Guide | prefix sums / two pointers only after basics |

### Stage 5 AI generator prompt

```text
I have learned ONLY:
- Python basics
- Big-O basics
- arrays/lists
- strings
- dict/set hashing
- prefix sums
- two pointers
- sliding windows

Current chunk: {PREFIX SUM / TWO POINTERS / FIXED WINDOW / VARIABLE WINDOW}

Generate 8 exercises in increasing difficulty.
Rules:
1. Do not use linked lists, recursion, stacks, queues, trees, heaps, graphs, greedy, dynamic programming, tries, or any concept not listed above.
2. First 2 questions: thinking only.
3. Next 2: paper tracing.
4. Next 2: short implementation.
5. Last 2: application problems.
6. Do not reveal solutions until I answer.
7. If I get stuck, give only one hint at a time.
8. For every answer I submit, check my invariant and complexity.
```

### Stage 5 exit gate

You are ready for searching when you can independently decide among:

```text
plain scan
hashing
prefix sum
two pointers
sliding window
```

for a fresh array/string problem and explain why the rejected patterns do not fit.

---

# 16. Stage 6 — Searching and Binary Search [P0]

**Prerequisites:** Stages 0–5.

**Main rule:** learn ordinary binary search completely before “binary search on answer.”

---

## 16.1 Linear search refresher

Implement a function that returns:

- first matching index,
- last matching index,
- all matching indices,
- `-1` when absent.

### Paper exercise

How many comparisons are made when the target is:

- first,
- middle,
- last,
- absent?

Explain best/worst-case complexity.

### Free practice

- HackerEarth → **Algorithms → Searching → Linear Search**
- HackerRank → simple arrays/search tasks

---

## 16.2 Binary search — exact target

### Required invariant

Choose one convention and write it above your code.

Example:

> If the target exists, it is inside the inclusive interval `[lo, hi]`.

### Paper trace

For:

```text
[2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
target = 23
```

write:

```text
iteration | lo | hi | mid | a[mid] | comparison | new interval
```

Repeat for an absent target.

### Implementation variants

1. iterative exact search
2. recursive exact search **only later when recursion itself is unlocked**; for now skip it
3. ascending order
4. descending order

### Safe problems

- LeetCode 704 — **Binary Search**
- LeetCode 35 — **Search Insert Position**
- LeetCode 374 — **Guess Number Higher or Lower**
- LeetCode 69 — **Sqrt(x)** after you understand monotonic numerical search

### Free structured resource

- LeetCode **Binary Search Study Plan** — use only the free problems appropriate to your current subtopic.
- HackerEarth → Searching
- GeeksforGeeks Practice → Searching / Binary Search

---

## 16.3 Lower bound / upper bound

Learn these questions separately:

- first index with value `>= x`
- first index with value `> x`
- last index with value `<= x`
- first occurrence of duplicate target
- last occurrence

Then learn Python:

```python
import bisect
bisect.bisect_left(...)
bisect.bisect_right(...)
```

Do not use `bisect` until you can explain its returned position on paper.

### Safe problems

- LeetCode 34 — **Find First and Last Position of Element in Sorted Array**
- LeetCode 744 — **Find Smallest Letter Greater Than Target**

---

## 16.4 Binary search on answer

Unlock this only after exact/lower-bound search is comfortable.

### Key mental model

You are searching a **monotonic answer space**, not necessarily an array.

Example predicate:

```text
candidate too small?  False False False True True True
```

The goal may be to find the first `True`.

### Paper work

For every problem, write before coding:

```text
Search space:
lo:
hi:
Predicate feasible(x):
Why predicate is monotonic:
Want first True or last True?
```

### Safe problems

- LeetCode 278 — **First Bad Version**
- LeetCode 875 — **Koko Eating Bananas**
- LeetCode 1011 — **Capacity To Ship Packages Within D Days**

Order:

```text
278 → 875 → 1011
```

### Design mini-exercise

A service must choose the **smallest batch size** that allows all jobs to finish before a fixed deadline. You have a function that can simulate whether a proposed size succeeds. Describe how binary search on the answer could reduce the number of simulations.

Do not implement distributed systems. This is only search-space thinking.

---

## 16.5 Rotated sorted arrays [P1]

Only after normal binary search.

Safe problems:

- LeetCode 153 — **Find Minimum in Rotated Sorted Array**
- LeetCode 33 — **Search in Rotated Sorted Array**

For each iteration, state which half is guaranteed sorted before deciding where to move.

---

## 16.6 Stage 6 debugging drill

Ask AI to produce a binary-search function with exactly one bug selected from:

- `lo < hi` vs `lo <= hi`
- `hi = mid` vs `mid - 1`
- incorrect midpoint
- losing a candidate answer
- infinite loop
- wrong duplicate handling

Debug by tracing, not guessing.

### AI prompt

```text
Create one intentionally buggy iterative binary-search implementation.
I know arrays, hashing, prefix sums, two pointers, sliding window, and binary search only.
Insert exactly one boundary/invariant bug.
Do NOT tell me the bug.
Give me 3 test cases, including one that exposes it.
After I explain the bug, grade my explanation of the loop invariant and fix.
```

---

# 17. Stage 7 — Sorting and Ordering [P0/P1]

**Prerequisites:** arrays/lists, complexity, searching.

The objective is not to memorize ten sorting algorithms. The objective is to understand ordering, stability, comparison cost, divide-and-conquer intuition, and when sorting creates structure that makes a later scan easy.

---

## 17.1 Sort vocabulary paper sheet

Define in your own words:

- ascending/descending
- stable
- in-place
- comparison sort
- key function
- adaptive sorting
- partial sorting

For each algorithm below, maintain a small table:

```text
Algorithm | core idea | best | average | worst | extra space | stable? | why learn it?
```

---

## 17.2 Bubble sort [P2 — implement once]

### Practice

Trace:

```text
[5, 1, 4, 2, 8]
```

After every full pass, mark the region already guaranteed to be final.

### Implementation

- plain version
- early-stop version

Then stop. Do not spend a week on Bubble Sort.

### Visualization

- VisuAlgo → **Sorting** → Bubble Sort
- OpenDSA → sorting visualizations

---

## 17.3 Selection sort [P2 — implement once]

Trace the sorted/unsorted boundary.

Question:

> Why can Selection Sort make fewer swaps than Bubble Sort but still require O(n²) comparisons?

Visualize once and implement once.

---

## 17.4 Insertion sort [P1]

This is worth understanding more carefully.

Invariant:

> The prefix before the current position is sorted.

Practice:

- insert one card into an already sorted hand,
- trace a nearly sorted list,
- compare work on sorted vs reverse-sorted input.

Implement without using `sort`.

---

## 17.5 Merge operation before Merge Sort

Do **not** start by memorizing recursive Merge Sort.

First implement:

```text
merge([1,4,7], [2,3,9])
```

Trace:

```text
i | j | chosen value | output
```

Once merging two sorted lists is easy, learn the divide-and-conquer structure later with recursion in Stage 10. At this stage, understand the conceptual split/merge process even if the recursive implementation is postponed.

---

## 17.6 Quicksort partition idea

Understand:

- pivot,
- partition,
- values placed on correct side,
- why pivot choice matters.

Do one iterative/manual partition exercise now. Full recursive implementation can be revisited after recursion is unlocked.

---

## 17.7 Python's real sorting tools [P0]

Practice:

```python
sorted(data)
data.sort()
sorted(records, key=...)
```

Create records:

```python
students = [
    {"name": "A", "score": 82},
    {"name": "B", "score": 95},
    {"name": "C", "score": 82},
]
```

Tasks:

- score ascending,
- score descending,
- score descending then name ascending,
- demonstrate stability using equal scores.

### Safe direct problems

- LeetCode 88 — **Merge Sorted Array**
- LeetCode 977 — **Squares of a Sorted Array**
- LeetCode 75 — **Sort Colors** after basic partitioning
- LeetCode 912 — **Sort an Array** as a place to implement Merge Sort/Quick Sort once recursion becomes available

### Practice platform tags

- HackerEarth → **Algorithms → Sorting**
- GeeksforGeeks → **Sorting**
- VisuAlgo → **Sorting**
- Princeton Algorithms → Sorting chapter/exercises (Java examples; use for ideas)

---

## 17.8 Sorting thinking exercises

For each scenario decide whether you need:

```text
no sort
full sort
only min/max
partial top-k (heap later)
counting/frequency table
```

Scenarios:

1. find minimum sensor value
2. output all values in ascending order
3. detect duplicates
4. group equal categories
5. retrieve only the 10 largest values from 10 million values

For #5, write “heap/top-K — future stage” rather than trying to implement it now.

This is how dependency-safe learning should work: recognize that a better future tool exists without using it before it is taught.

---

# 18. Stage 8 — Stacks, Queues, Deques, and Monotonic Structures [P0/P1]

**Prerequisites:** Stages 0–7.

---

## 18.1 Stack fundamentals

### Paper model

Draw vertically:

```text
TOP
[30]
[20]
[10]
```

For each operation show the stack before/after:

- push 40
- peek
- pop
- pop
- push 50

### Implement

1. stack with Python list
2. `push`, `pop`, `peek`, `is_empty`
3. fixed-capacity teaching version that raises overflow yourself

### Safe problems

- LeetCode 20 — **Valid Parentheses**
- LeetCode 155 — **Min Stack**
- LeetCode 1047 — **Remove All Adjacent Duplicates In String**

### Tags

- HackerRank Data Structures → **Stacks**
- HackerEarth Data Structures → **Stacks**
- GeeksforGeeks → **Stack**
- NeetCode → **Stack**

---

## 18.2 Queue fundamentals

Use `collections.deque` in real Python queue code.

### Paper model

```text
front → [A][B][C] ← rear
```

Trace:

- enqueue D
- dequeue
- enqueue E
- front
- rear

### Implement

1. queue using list only as an educational comparison
2. observe why removing index 0 is costly
3. queue using `deque`

### Safe problems

- LeetCode 933 — **Number of Recent Calls**
- LeetCode 232 — **Implement Queue using Stacks** only after both stack and queue concepts are learned
- LeetCode 225 — **Implement Stack using Queues**

### Small design exercise

Design an in-memory print-job queue with these operations:

```text
submit(job)
next_job()
pending_count()
```

State:

- ordering guarantee,
- data structure,
- time complexity,
- what happens when empty.

No networking/database design is needed yet.

---

## 18.3 Deque

Practice all four ends:

```python
append
appendleft
pop
popleft
```

### Paper game

Take cards numbered 1–8. Perform operations given by a friend/AI and maintain the deque manually.

### Real uses

- queue
- double-ended worklist
- moving window
- later: monotonic queue and 0-1 BFS

---

## 18.4 Monotonic stack [P1]

Unlock only after ordinary stack operations are automatic.

### Core mental model

Maintain a stack whose values/indices are kept monotonic so useless candidates are removed immediately.

### Paper practice

For:

```text
[2, 1, 2, 4, 3]
```

find the next greater value to the right.

Write:

```text
i | value | stack before | pops | answer written | stack after
```

### Safe problems

- LeetCode 496 — **Next Greater Element I**
- LeetCode 739 — **Daily Temperatures**
- LeetCode 901 — **Online Stock Span** [P1]

Do **Largest Rectangle in Histogram** only after the simpler ones.

---

## 18.5 Monotonic deque [P1]

Learn only after fixed sliding windows + deques are known.

### Problem

- LeetCode 239 — **Sliding Window Maximum**

First solve the obvious O(nk) version. Then ask:

> Which old values can never become the maximum again?

The deque should store only candidates that still have a chance.

---

## 18.6 Debug drills

Ask AI for:

- one bracket-matching bug,
- one queue-front bug,
- one `pop(0)` performance problem,
- one monotonic-stack bug where indices and values are confused.

Trace each on paper.

---

# 19. Stage 9 — Linked Lists [P1]

**Prerequisites:** references/mutation are mandatory. Stack/queue knowledge helps but is not required for the core list itself.

Spend most of your time on the singly linked list + fast/slow pointer patterns. Circular variants are lower priority.

---

## 19.1 Node and reference foundations

Draw a node as:

```text
┌────────┬──────────┐
│ value  │ next     │
└────────┴──────────┘
```

Then draw actual named references:

```text
head ──► [10|•] ──► [20|•] ──► [30|None]
```

### Paper rule

Every time you execute something like:

```python
current = current.next
```

draw where `current` points now. Do not mentally treat variables as boxes containing copies of nodes.

### Visualization

- Python Tutor — excellent for object references
- VisuAlgo → Linked List
- OpenDSA → list visualizations

---

## 19.2 Singly linked list build/traverse

Implement:

```python
class Node:
    ...

class SinglyLinkedList:
    ...
```

In this order:

1. `prepend`
2. traverse/print
3. `length`
4. `find(value)`
5. `append`
6. insert after a known node
7. delete first matching value

For each method, write complexity and identify whether traversal is required.

---

## 19.3 Reverse linked list [P0 pattern]

Do this slowly.

Use three names:

```text
prev
current
next_node
```

Paper table:

```text
step | prev points to | current points to | saved next | pointer changed
```

### Safe problem

- LeetCode 206 — **Reverse Linked List**

Do iterative first. Recursive reversal belongs after recursion is comfortable.

---

## 19.4 Fast and slow pointers [P0 pattern]

Practice:

- middle node
- cycle detection

### Safe problems

- LeetCode 876 — **Middle of the Linked List**
- LeetCode 141 — **Linked List Cycle**

Only after these:

- LeetCode 142 — **Linked List Cycle II** [P1]
- LeetCode 19 — **Remove Nth Node From End of List** [P1]

### Paper visualization

For cycle detection, draw numbered nodes and write both pointers after every move. Do not rely on animation alone.

---

## 19.5 Merging sorted lists

Safe problem:

- LeetCode 21 — **Merge Two Sorted Lists**

This combines earlier sorted/two-pointer reasoning with node references.

Paper invariant:

> Everything before the tail of the output is already the correctly merged prefix.

---

## 19.6 Doubly linked list [P1]

Node fields:

```text
prev | value | next
```

Implement:

- prepend
- append with tail
- remove known node
- forward traversal
- backward traversal

The purpose is to understand local O(1) unlinking when the node reference is already known.

---

## 19.7 Circular linked lists [P2/P3]

For the first pass:

- understand the termination condition,
- implement traversal once,
- add/delete one node,
- explain where infinite loops come from.

Do not spend equal time on full CRUD for circular singly and circular doubly linked lists unless your course assessment explicitly requires it.

---

## 19.8 Stage 9 free practice resources

- HackerRank Data Structures → **Linked Lists**
- HackerEarth Data Structures → **Linked Lists**
- GeeksforGeeks Practice → **Linked List**
- VisuAlgo → **Linked List**
- Python Tutor → reference tracing
- NeetCode → Linked List section

### AI prompt

```text
Teach me linked-list pointer reasoning through diagrams.
Known concepts: Python references, arrays, hashing, two pointers, searching, sorting, stack/queue, singly linked lists.
Current chunk: {insert / delete / reverse / fast-slow}.

Generate one linked-list state with at most 6 nodes.
Ask me to draw every named reference after each operation.
Do not introduce recursion, trees, heaps, or graphs.
If I make a pointer mistake, tell me the FIRST operation where the invariant breaks, not the final answer.
```

---

# 20. Stage 10 — Recursion and Divide & Conquer [P0]

**Prerequisites:** functions, stack concept, complexity, arrays/strings, sorting concepts, linked-list basics.

The stack chapter should make recursion easier because each recursive call conceptually creates another call frame.

---

## 20.1 Base case and progress

Before writing any recursive function, fill:

```text
Function contract:
Smallest valid input:
Base-case answer:
How input gets smaller:
Why base case must eventually be reached:
```

### Very small exercises

- countdown from `n` to 1
- sum `1..n`
- factorial
- sum a list using index recursion
- reverse a string conceptually

### Paper call-stack trace

For factorial(4):

```text
call depth | n | waiting expression | return value
```

Use Python Tutor to verify after you do it yourself.

---

## 20.2 Recursive tree vs call stack

Draw both for Fibonacci(5):

1. recursion tree — shows repeated subproblems
2. active call stack at one chosen moment — shows memory depth

Explain why these are different pictures.

### Safe problem

- LeetCode 509 — **Fibonacci Number**

Use it here to study recursion, not as an endorsement of naive Fibonacci as an efficient implementation. Revisit it in DP later.

---

## 20.3 Divide and conquer

Now revisit algorithms postponed earlier:

### Binary search recursively

Implement after the iterative version is already understood.

### Merge Sort

Implement in this order:

1. base case `len <= 1`
2. split
3. recursive left
4. recursive right
5. merge

Trace one 8-element input as a recursion tree.

### Quick Sort

Understand:

1. partition
2. recursively solve left partition
3. recursively solve right partition

Compare recursion depth on balanced vs extremely unbalanced partitions.

---

## 20.4 Fast exponentiation

Safe problem:

- LeetCode 50 — **Pow(x, n)** [P1]

First derive:

```text
x^n = (x^(n/2))²           if n even
x^n = x * x^(n-1)          simple version
```

Then improve the odd case carefully.

---

## 20.5 Recursion debugging

Generate examples of:

- missing base case
- base case unreachable
- wrong shrinking step
- state mutated before recursive call and never restored
- exponential repeated work
- recursion-depth danger

The fourth item becomes especially important in backtracking.

---

## 20.6 Free resources

- freeCodeCamp Python DSA full course — use recursion portions as a second explanation
- VisuAlgo → **Recursion Tree / Recursion**
- Python Tutor → call-stack visualization
- HackerEarth → **Basic Programming → Recursion**
- MIT 6.006 → divide-and-conquer/algorithm reasoning when you want a more rigorous layer

### Stage 10 exit gate

For a recursive solution, you can identify:

- base case,
- recurrence/subproblem,
- progress measure,
- maximum recursion depth,
- total number of calls at a high level,
- extra call-stack space.

Do not move to backtracking if recursive state still feels mysterious.


# 21. Stage 11 — Backtracking [P1]

**Prerequisites:** recursion must be comfortable. Arrays/strings, sets/dicts, and stack thinking are already available.

Backtracking is not “magic recursion.” It is systematic exploration of a decision tree while maintaining and undoing state.

---

## 21.1 The backtracking skeleton

Write this on paper before solving problems:

```text
STATE:
CHOICES:
VALID(choice):
APPLY(choice):
GO DEEPER:
UNDO(choice):
GOAL/BASE CASE:
```

Generic code shape:

```python
def backtrack(state):
    if goal(state):
        record(state)
        return

    for choice in choices(state):
        if valid(choice):
            apply(choice)
            backtrack(state)
            undo(choice)
```

### The most important beginner question

After a recursive child returns:

> Is my state exactly what it was before I made that choice?

If not, sibling branches can become corrupted.

---

## 21.2 Include/exclude decisions

Start with a list:

```text
[1, 2, 3]
```

At each element:

```text
include it
or
exclude it
```

Draw the complete binary decision tree and write the partial subset at every node.

### Safe problem

- LeetCode 78 — **Subsets**

First solve with include/exclude recursion. Then compare with a loop-over-next-choice version.

---

## 21.3 Permutations

Paper exercise with:

```text
[A, B, C]
```

At each level write:

```text
chosen path
available choices
used set/boolean array
```

### Safe problem

- LeetCode 46 — **Permutations**

### Debug trap

Why is this dangerous?

```python
answers.append(path)
```

when `path` will later be mutated?

You should understand when to use:

```python
answers.append(path.copy())
```

---

## 21.4 Combinations

Safe problems:

- LeetCode 77 — **Combinations**
- LeetCode 39 — **Combination Sum**
- LeetCode 17 — **Letter Combinations of a Phone Number**
- LeetCode 22 — **Generate Parentheses**

Recommended order:

```text
78 Subsets
→ 77 Combinations
→ 46 Permutations
→ 17 Letter Combinations
→ 39 Combination Sum
→ 22 Generate Parentheses
```

---

## 21.5 Pruning

Pruning means stopping a branch because it cannot lead to a valid/useful solution.

### Paper task

For Combination Sum, write one branch where the running sum exceeds the target. Explain why continuing below that node is unnecessary under the specific assumptions of the problem.

### Rule

Never write a pruning condition because you saw it in a template. Write a sentence proving why every descendant below that state is useless.

---

## 21.6 Constraint-placement problems [P1]

After subsets/permutations are comfortable:

- LeetCode 51 — **N-Queens**
- maze path generation with obstacles
- Sudoku solver [P2]

### N-Queens paper practice

Before code, use a 4x4 board and track:

```text
occupied columns
occupied main diagonals
occupied anti-diagonals
```

Place one queen at a time.

---

## 21.7 Fun physical practice

Use three coins/cards/objects.

- Physically build every subset.
- Physically arrange every permutation.
- Record the decision tree.

This is surprisingly effective for building a concrete backtracking mental model.

---

## 21.8 Free resources

- NeetCode → Backtracking
- GeeksforGeeks Practice → Backtracking
- Striver A2Z → Recursion / Backtracking
- USACO Guide → backtracking when you want deeper problem sets
- VisuAlgo/Python Tutor → use recursion visualization to inspect state, even if the exact problem is not built in

### AI coach prompt

```text
Act as a backtracking coach.
I know recursion, arrays, strings, hashing, sorting, stacks/queues, linked lists, and the earlier patterns.
I do NOT yet know trees, heaps, graphs, greedy, or DP.

Give me one backtracking problem using at most 6 input items.
Before I code, force me to answer:
1. What is the state?
2. What are the choices?
3. What is the base case?
4. What mutation is applied?
5. What must be undone?
6. What can be pruned and why?

Do not show code unless I have answered those questions.
```

---

# 22. Stage 12 — Trees and Binary Search Trees [P0/P1]

**Prerequisites:** recursion, stack, queue/deque, references.

Do not jump directly into advanced BST problems. First become completely comfortable with tree vocabulary and traversal order.

---

## 22.1 Tree vocabulary worksheet

Given a drawn tree, identify:

- root
- parent
- child
- sibling
- leaf
- ancestor
- descendant
- subtree
- depth
- height
- path

### Paper drill

Draw this yourself:

```text
        A
       / \
      B   C
     / \   \
    D   E   F
```

Then answer:

- depth of E
- height of B
- leaves
- ancestors of E
- descendants of A
- subtree rooted at C

Do not continue until depth vs height is clear.

---

## 22.2 Binary-tree node representation

Implement:

```python
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

Manually construct a 5–7 node tree before writing any insertion logic.

Use Python Tutor if references are confusing.

---

## 22.3 Recursive DFS traversals

### Preorder

```text
root → left → right
```

### Inorder

```text
left → root → right
```

### Postorder

```text
left → right → root
```

### Paper practice

For one fixed tree, predict all three traversal outputs.

Then execute the recursive code by hand with a call-stack table.

### Safe problems

- LeetCode 144 — **Binary Tree Preorder Traversal**
- LeetCode 94 — **Binary Tree Inorder Traversal**
- LeetCode 145 — **Binary Tree Postorder Traversal**

First recursive. Then iterative using a stack.

---

## 22.4 Level-order traversal / BFS

Use a queue.

### Safe problem

- LeetCode 102 — **Binary Tree Level Order Traversal**

Paper table:

```text
queue before | node popped | children added | level | queue after
```

### Key comparison

Explain:

```text
DFS → stack/recursion
BFS → queue
```

and why they visit the same tree in different orders.

---

## 22.5 Foundational tree problems

Recommended order:

1. LeetCode 104 — **Maximum Depth of Binary Tree**
2. LeetCode 100 — **Same Tree**
3. LeetCode 226 — **Invert Binary Tree**
4. LeetCode 101 — **Symmetric Tree**
5. LeetCode 112 — **Path Sum**
6. LeetCode 543 — **Diameter of Binary Tree** [P1]

### Postorder-thinking drill

For maximum depth, write:

```text
answer(node) = 1 + max(answer(left), answer(right))
```

Ask:

> Why must the children's answers be known before the parent's answer?

This prepares you for tree DP later.

---

## 22.6 Binary Search Tree

Invariant for a basic BST with unique keys:

```text
all keys left < node key < all keys right
```

### Implement in order

1. search
2. insert
3. minimum
4. maximum
5. inorder traversal
6. delete leaf
7. delete node with one child
8. delete node with two children

### Safe problems

- LeetCode 700 — **Search in a Binary Search Tree**
- LeetCode 701 — **Insert into a Binary Search Tree**
- LeetCode 98 — **Validate Binary Search Tree**
- LeetCode 230 — **Kth Smallest Element in a BST** [P1]

### Important reasoning question

Why does inorder traversal of a valid BST produce sorted keys?

---

## 22.7 Lowest common ancestor [P1]

Do BST LCA first if desired, then general binary-tree LCA.

- LeetCode 235 — BST LCA
- LeetCode 236 — Binary Tree LCA

Draw paths from root to both target nodes before coding.

---

## 22.8 N-ary trees

Build a node with:

```python
children = []
```

Practice:

- preorder
- postorder
- level-order

Mini real-world model:

```text
company
└── department
    ├── team
    └── team
```

or a folder hierarchy.

---

## 22.9 Mini system-design exercise: folder hierarchy

Design an **in-memory folder tree**.

Operations:

```text
add_child(folder, child)
list_children(folder)
find_by_name(start, name)
count_descendants(folder)
```

Specify:

- node fields,
- traversal used for `find_by_name`,
- complexity,
- what happens if names are not globally unique.

Do not add databases, permissions, distributed storage, or networking. Keep it at data-structure level.

---

## 22.10 Free resources

- VisuAlgo → BST
- OpenDSA → Trees/BST
- HackerRank → Trees / Balanced Trees (skip balanced-tree problems until ready)
- HackerEarth → Trees
- GeeksforGeeks Practice → Tree / BST
- NeetCode → Trees
- Striver A2Z → Binary Trees / BST
- Princeton Algorithms → BST chapter for deeper reading

### Stage 12 social-post exercise

Create a diagram in Excalidraw and explain:

```text
Preorder: parent first
Inorder: between children
Postorder: parent last
Level order: breadth first
```

Use one tree and show all four outputs. Keep the post focused on one idea rather than posting a huge tree tutorial.

---

# 23. Stage 13 — Heaps and Priority Queues [P0]

**Prerequisites:** arrays, complexity, sorting, trees conceptually.

A heap is the missing tool between “scan everything” and “fully sort everything.” It is especially valuable for top-K and repeated access to the current best item.

---

## 23.1 Binary heap as an array

For zero-based index `i`:

```text
left  = 2*i + 1
right = 2*i + 2
parent = (i - 1) // 2
```

### Paper practice

Given:

```text
[2, 5, 4, 9, 7, 8]
```

Draw the corresponding complete binary tree.

Then label each node's array index.

### Thinking question

Why can a complete binary tree be stored compactly without explicit child pointers?

---

## 23.2 Min-heap invariant

For every node:

```text
parent <= children
```

This does **not** imply the array is globally sorted.

### Quiz

Given several arrays, decide which satisfy the min-heap property without performing any operation.

---

## 23.3 Push / bubble-up

Paper trace inserting into a min-heap.

Table:

```text
array before | appended value | parent index | comparison | swap? | array after
```

Then implement your own educational heap push.

Afterward use `heapq.heappush`.

---

## 23.4 Pop / bubble-down

Understand why the root is replaced and heap order restored.

Implement once, then compare with:

```python
heapq.heappop
```

### Complexity reasoning

Tree height is O(log n), so bubble-up/down traverse at most logarithmic levels.

---

## 23.5 Heapify

Learn:

```python
heapq.heapify(data)
```

Important fact to remember and later justify:

> Bottom-up heap construction is O(n), not O(n log n).

You do not need the full proof on day one. Draw nodes by height and notice that most nodes are near the leaves and move very little.

---

## 23.6 Top-K pattern [P0]

If you need the largest `k` values from a huge stream:

- keep a min-heap of size `k`,
- compare new values to the smallest currently kept candidate.

### Paper practice

Stream:

```text
5, 1, 9, 3, 14, 7, 10
k = 3
```

Write heap state after each value.

### Safe problems

- LeetCode 703 — **Kth Largest Element in a Stream**
- LeetCode 1046 — **Last Stone Weight**
- LeetCode 215 — **Kth Largest Element in an Array**
- LeetCode 347 — **Top K Frequent Elements**
- LeetCode 973 — **K Closest Points to Origin**
- LeetCode 23 — **Merge k Sorted Lists** [P1; linked lists already known]
- LeetCode 295 — **Find Median from Data Stream** [P1]

Recommended order:

```text
1046 → 703 → 215 → 347 → 973 → 23 → 295
```

---

## 23.7 Priority queue vs queue

Explain the difference:

```text
Queue: oldest/arrival order determines next item.
Priority queue: priority determines next item.
```

### Mini design exercise

Design an in-memory job scheduler where each job has:

```text
priority
created_at
job_id
```

Choose a tuple ordering for `heapq` and explain how you break ties.

Do not add distributed workers yet.

---

## 23.8 Free resources

- Python `heapq` documentation
- VisuAlgo → Heap
- HackerRank → Heap
- HackerEarth → Heaps / Priority Queues
- GeeksforGeeks → Heap
- NeetCode → Heap / Priority Queue
- OpenDSA → heap visualization/exercises

### AI prompt

```text
I know arrays, hashing, sorting, linked lists, recursion, backtracking, and trees. I just learned min-heaps.
Generate 6 heap exercises:
- 2 paper heap-property/array-tree mapping questions
- 1 push/pop tracing question
- 1 implementation question
- 2 top-k/application questions
Do not use graphs or dynamic programming.
Do not reveal answers until I respond.
```

---

# 24. Stage 14 — Graphs [P0/P1]

**Prerequisites:** arrays/lists, dict/set, stack, queue, recursion, trees, heap for weighted shortest paths.

Study graph concepts in layers. Do not start with Dijkstra before adjacency lists and BFS/DFS are natural.

---

## 24.1 Graph vocabulary

Know:

- vertex/node
- edge
- directed/undirected
- weighted/unweighted
- self-loop
- degree
- indegree/outdegree
- path
- cycle
- connected component
- sparse/dense
- DAG

### Paper task

Draw one graph with 6 nodes and answer all vocabulary questions from your own drawing.

---

## 24.2 Edge list → adjacency list

Given:

```text
(0,1)
(0,2)
(1,3)
(2,3)
(3,4)
```

build the adjacency list manually for:

1. directed graph
2. undirected graph

Then implement both using:

```python
from collections import defaultdict
```

### Representation comparison

Write a table:

```text
representation | memory | edge lookup | iterate neighbors | best for sparse/dense
```

Compare:

- edge list
- adjacency list
- adjacency matrix

---

## 24.3 DFS

### Paper practice

Choose a deterministic neighbor order and trace:

```text
stack/call | node | visited before | neighbors considered | visited after
```

### Implement

1. recursive DFS
2. iterative DFS with explicit stack
3. DFS over every component in a disconnected graph

### Safe problems

- LeetCode 733 — **Flood Fill**
- LeetCode 200 — **Number of Islands**
- LeetCode 695 — **Max Area of Island**

### Free reference

- CP-Algorithms → DFS
- VisuAlgo → DFS/BFS
- HackerEarth → Graph Traversal

---

## 24.4 BFS

### Paper practice

Trace queue state layer by layer.

### Implement

1. ordinary BFS traversal
2. distance from source in unweighted graph
3. parent map to reconstruct a shortest path
4. grid BFS

### Safe problems

- LeetCode 994 — **Rotting Oranges**
- LeetCode 1091 — **Shortest Path in Binary Matrix**
- CSES — **Message Route**
- CSES — **Counting Rooms** (DFS or BFS)

### Core invariant

When ordinary BFS explores an unweighted graph, nodes are discovered in nondecreasing edge distance from the source.

---

## 24.5 Multi-source BFS [P1]

Start the queue with multiple sources at distance 0.

Use for:

- spread from many initial points,
- distance to nearest source,
- simultaneous processes.

Revisit Rotting Oranges from this perspective.

---

## 24.6 Cycle detection

Learn separately:

### Undirected graph

DFS/BFS with parent awareness.

### Directed graph

Recursion-state/color approach or later topological-sort failure.

Do not merge these algorithms mentally. The meaning of revisiting a node differs.

---

## 24.7 DAG and topological sorting [P0/P1]

### Kahn's algorithm

Requires:

- indegree array/map
- queue of zero-indegree nodes

### Paper trace

For a dependency graph, write:

```text
indegrees
zero-indegree queue
node removed
indegrees updated
output order
```

### Safe problems

- LeetCode 207 — **Course Schedule**
- LeetCode 210 — **Course Schedule II**
- CSES — **Course Schedule**

### Mini DS/ML system-design exercise

Represent this pipeline as a DAG:

```text
ingest
  ↓
clean
  ↓
features
 ↙    ↘
train  report
  ↓
evaluate
  ↓
deploy
```

Add dependencies, calculate indegrees, and produce one valid execution order.

No cloud orchestration knowledge is required.

---

## 24.8 Dijkstra [P1]

Unlock only after:

- weighted graph representation,
- min-heap,
- BFS distance idea.

### Before coding, write

```text
dist[source] = 0
all others = infinity
priority queue contains (distance, node)
```

Understand **relaxation**:

```text
if dist[u] + weight(u,v) < dist[v]:
    improve dist[v]
```

### Paper trace

Use a 5-node positive-weight graph. At every step write:

```text
heap before | popped pair | current dist | edge relaxed | heap additions
```

### Safe problems

- LeetCode 743 — **Network Delay Time**
- CSES — **Shortest Routes I**

### Important restriction

Ordinary Dijkstra assumes non-negative edge weights. Do not use it blindly on negative-edge graphs.

### Free reference

- CP-Algorithms shortest path articles
- VisuAlgo → SSSP

---

## 24.9 Disjoint Set Union / Union-Find [P1]

Operations:

```text
find(x)
union(a, b)
```

Learn in this sequence:

1. naive parent array
2. path compression
3. union by size/rank

### Paper practice

Start with:

```text
0 1 2 3 4 5
```

Perform unions and draw the parent forest after each operation.

### Safe problems

- LeetCode 684 — **Redundant Connection**
- LeetCode 547 — **Number of Provinces** (compare DFS/BFS and DSU)
- LeetCode 721 — **Accounts Merge** [P1]

### Free reference

- CP-Algorithms → Disjoint Set Union
- VisuAlgo → UFDS

---

## 24.10 MST [P2]

Only after heaps + DSU.

### Kruskal

```text
sort edges by weight
add cheapest edge that does not form a cycle
DSU checks connectivity/cycle
```

### Prim

```text
grow from visited region
heap stores cheapest crossing edges
```

### Safe practice

- CSES — **Road Reparation**
- LeetCode 1584 — **Min Cost to Connect All Points**

Compare when edge list vs adjacency list makes each method natural.

---

## 24.11 Bellman–Ford, Floyd–Warshall, 0-1 BFS [P2]

Learn these **after** BFS and Dijkstra.

### Bellman–Ford

Use when negative edge weights may matter and negative-cycle detection is required.

### Floyd–Warshall

All-pairs shortest paths; O(V³).

### 0-1 BFS

Use when every edge weight is only 0 or 1; maintain a deque.

Free reference:

- CP-Algorithms → 0-1 BFS

Do not put these into the first graph week.

---

## 24.12 Graph platform progression

| Level | Resource | Use |
|---|---|---|
| First visualization | VisuAlgo | adjacency, DFS/BFS, SSSP, MST, UFDS |
| Direct topic practice | HackerEarth / GFG | graph basics and traversals |
| Interview set | NeetCode / LeetCode | curated graph patterns |
| Structured contest practice | CSES Graph Algorithms | once BFS/DFS/DAG are secure |
| Deeper theory/reference | CP-Algorithms | exact algorithms/variants |
| Broad curriculum | USACO Guide | larger graph progression |

### Stage 14 dependency-safe AI prompt

```text
Known graph concepts: {LIST THEM EXACTLY}.
Not yet learned: {LIST FUTURE GRAPH ALGORITHMS}.

Generate 5 graph exercises that can be solved ONLY with the known concepts.
For every exercise, state:
- graph type: directed/undirected
- weighted/unweighted
- expected representation
- which known traversal/algorithm family is relevant

Do not include a problem whose natural solution requires any concept in my not-yet-learned list.
Do not reveal the algorithm name in the problem statement itself; let me identify it.
```

---

# 25. Stage 15 — Greedy Algorithms [P1]

**Prerequisites:** sorting, heaps, arrays, common patterns. Graph Dijkstra has already exposed one greedy-style algorithm, but this stage focuses on recognizing and justifying local choices.

---

## 25.1 Greedy is about proof, not code

Before coding write:

```text
Candidate choices:
Greedy rule:
Why this local choice seems safe:
What future options remain:
Potential counterexample:
Exchange argument / invariant:
```

### Paper exercise

Interval scheduling:

```text
[1,4], [2,3], [3,5], [0,7], [5,7], [5,9], [8,9]
```

Try different greedy rules:

- earliest start
- shortest duration
- earliest finish

Find a counterexample for unsafe rules and explain why earliest-finish scheduling works for the classic maximum-number-of-nonoverlapping-intervals formulation.

---

## 25.2 Safe problems

Recommended order:

- LeetCode 55 — **Jump Game**
- LeetCode 56 — **Merge Intervals** (sorting + scan; often categorized intervals more than pure greedy)
- LeetCode 435 — **Non-overlapping Intervals**
- LeetCode 452 — **Minimum Number of Arrows to Burst Balloons**
- LeetCode 134 — **Gas Station** [P1]
- LeetCode 45 — **Jump Game II** [P1]

### Tags/resources

- HackerEarth → Greedy
- GeeksforGeeks → Greedy
- NeetCode → Greedy / Intervals
- CSES → selected greedy/sorting problems once prerequisites are clear
- USACO Guide → greedy modules later

---

## 25.3 Greedy debugging game

Ask AI to present three plausible local-choice rules for the same problem. Exactly one should always work. Your job:

1. find counterexamples to two rules,
2. justify the surviving rule.

This is more valuable than memorizing a greedy template.

### AI prompt

```text
Give me one small greedy problem with at most 8 items.
Propose 3 natural greedy rules; exactly one must be correct.
Do not tell me which one.
Ask me to construct counterexamples for the incorrect rules and give a short exchange/invariant argument for the correct one.
Use only arrays, sorting, hashing, heaps, and previously learned concepts. No dynamic programming yet.
```

---

# 26. Stage 16 — Dynamic Programming [P0/P1]

**Prerequisites:** recursion, complexity, arrays, hashing. Greedy understanding is useful for contrast.

Do not begin by memorizing 50 DP templates. Learn to define state precisely.

---

## 26.1 The five-line DP worksheet

Before any DP code, fill:

```text
1. State: dp[...] means ____________________
2. Transition: dp[state] comes from ____________________
3. Base case(s): ____________________
4. Evaluation order: ____________________
5. Final answer is stored at: ____________________
```

If line 1 is vague, stop. The rest of the solution will usually be vague too.

---

## 26.2 Memoization from repeated recursion

Revisit Fibonacci.

Paper steps:

1. draw naive recursion tree,
2. circle repeated states,
3. cache each state once,
4. estimate number of unique states.

Then write top-down memoized code.

This is the conceptual bridge:

```text
recursion + overlapping subproblems + cache = memoization
```

---

## 26.3 Tabulation

Turn the dependency relation into an evaluation order.

For Fibonacci:

```text
dp[0]
dp[1]
dp[2]
...
```

Then ask whether the whole table is necessary.

---

## 26.4 1D DP progression

Recommended problems:

1. LeetCode 70 — **Climbing Stairs**
2. LeetCode 746 — **Min Cost Climbing Stairs**
3. LeetCode 198 — **House Robber**
4. LeetCode 213 — **House Robber II** [P1]
5. LeetCode 322 — **Coin Change**
6. LeetCode 300 — **Longest Increasing Subsequence** [P1]

For each, do:

```text
brute recursive idea
→ identify repeated states
→ memoization
→ tabulation
→ space optimization when possible
```

Do not jump directly to the final optimized version.

---

## 26.5 2D/grid DP

Safe progression:

- LeetCode 62 — **Unique Paths**
- LeetCode 64 — **Minimum Path Sum**
- LeetCode 120 — **Triangle** [P1]

Paper grid:

Write each cell's dependency arrows before numbers.

Ask:

> Does `dp[r][c]` mean number of ways, minimum cost, maximum score, or possibility?

The meaning must be exact.

---

## 26.6 Knapsack family [P1]

Learn 0/1 choices after 1D/2D basics.

Start with a tiny table on paper:

```text
items: (weight,value)
capacity: small integer
```

Then practice:

- 0/1 knapsack conceptual problem
- LeetCode 416 — **Partition Equal Subset Sum**
- target-sum/coin variants later

Pay attention to loop direction when compressing dimensions.

---

## 26.7 String DP [P1]

Recommended order:

- LeetCode 1143 — **Longest Common Subsequence**
- LeetCode 516 — **Longest Palindromic Subsequence** [P1]
- LeetCode 72 — **Edit Distance** [P1]

### Paper rule

Define what `dp[i][j]` means in words before drawing the table.

Example:

> `dp[i][j]` is the LCS length using the first `i` characters of A and first `j` characters of B.

Without this sentence, table filling becomes memorization.

---

## 26.8 Tree/DAG DP [P2]

Only after ordinary DP.

Examples:

- subtree size/sum,
- diameter-style child aggregation,
- path counts in DAG,
- longest path in DAG.

Link the ideas:

```text
postorder tree traversal = dependencies ready before parent

topological DAG order = dependencies ready before dependent state
```

---

## 26.9 Free DP resources

- LeetCode Dynamic Programming Study Plan — use free accessible problems
- NeetCode → 1-D DP, 2-D DP
- Striver A2Z → DP section
- CSES → Dynamic Programming after introductory problems
- USACO Guide → DP modules
- MIT 6.006 → DP lectures/problem sets for deeper reasoning
- CP-Algorithms → DP introductions/advanced reference as needed

### DP AI Socratic prompt

```text
Do not solve the DP problem for me.
I know recursion and basic DP, and I want to derive the state myself.

For the problem I give you:
1. Ask me what the smallest subproblem is.
2. Ask what information uniquely identifies a subproblem.
3. Ask what choices are available.
4. Ask which smaller states each choice depends on.
5. Ask for base cases.
6. Ask for the evaluation order.
7. Only after I answer all six, critique my proposed state/transition.
Never reveal final code unless I explicitly ask after deriving the recurrence.
```

---

# 27. Stage 17 — Tries and Advanced String Search [P1/P2]

**Prerequisites:** strings, hashing, trees, recursion; rolling-hash arithmetic as needed.

---

## 27.1 Trie foundations [P1]

A trie organizes strings by prefixes.

### Physical/paper activity

Insert:

```text
cat
car
care
dog
```

Draw one node per prefix transition.

Mark terminal/end-of-word flags.

### Implement

1. insert
2. exact search
3. starts-with/prefix search
4. optional prefix count

### Safe problems

- LeetCode 208 — **Implement Trie (Prefix Tree)**
- LeetCode 211 — **Design Add and Search Words Data Structure** [P1]
- LeetCode 648 — **Replace Words** [P1]
- LeetCode 677 — **Map Sum Pairs** [P1]

### Mini design task

Design a tiny autocomplete dictionary with:

```text
insert(word)
contains(word)
words_with_prefix(prefix)
```

For the first version, returning every matching word by DFS is fine.

---

## 27.2 KMP / prefix function [P2]

Only after ordinary substring scanning is trivial.

Question KMP answers:

> After a mismatch, how much of the already matched pattern can still be reused?

### Paper first

For a pattern such as:

```text
ababaca
```

compute the longest proper prefix that is also a suffix for each prefix of the string.

Do not memorize the final code until this table makes sense.

### Practice

- LeetCode 28 — **Find the Index of the First Occurrence in a String**; implement KMP only after solving with a simple method first.
- CP-Algorithms string algorithms can be used as deeper reference.

---

## 27.3 Rolling hash / Rabin–Karp [P2]

Understand:

- hash of a window,
- update when moving one position,
- collision possibility,
- why matching hash values may require verification depending on implementation.

Generate small numeric examples on paper rather than beginning with huge modular constants.

---

## 27.4 Advanced string topics [P3]

Study only when needed:

- Z algorithm
- Aho–Corasick
- suffix array
- suffix tree/automaton

These are not required for the first DS/ML/interview core.

---

# 28. Stage 18 — DS/ML-Specific Practice Extensions

This stage converts DSA knowledge into data/ML engineering intuition.

---

## 28.1 NumPy array mechanics [P0]

Use the official NumPy quickstart and the free **NumPy 100 Exercises** repository.

Practice these chunks separately:

1. `shape`, `ndim`, `size`
2. `dtype`, `itemsize`, `nbytes`
3. indexing/slicing
4. boolean masks
5. reshape
6. transpose
7. views vs copies
8. broadcasting
9. vectorization
10. reductions along axes

### Paper practice

Given shapes:

```text
(100, 20)
(20,)
```

predict the broadcast output shape.

Then try:

```text
(100, 20)
(100,)
```

Decide whether broadcasting works and why.

### Memory arithmetic

For an array with shape `(1_000_000, 128)` and `float32`, estimate raw data bytes:

```text
number_of_elements × bytes_per_element
```

Convert to MB/GB.

Do this on paper before allocating huge arrays.

---

## 28.2 Views vs copies

Experiment:

```python
x = np.arange(10)
y = x[2:7]
z = x[2:7].copy()
```

Modify `y`, then `z`.

Explain what happens to `x`.

### Debugging exercise

Ask AI for three short NumPy snippets where accidental shared views cause surprising mutations. Predict outcome before running.

---

## 28.3 Sparse matrices [P0/P1]

Use the free SciPy sparse tutorial.

Learn:

- dense matrix
- COO
- CSR
- CSC

### Paper encoding

Take:

```text
0 0 5 0
0 2 0 0
0 0 0 0
7 0 1 0
```

Write a COO representation:

```text
row indices
column indices
values
```

Then inspect a SciPy CSR conversion.

### Mini project

Create a tiny document-term matrix for 5 documents.

Compare:

- dense NumPy representation,
- sparse SciPy representation,
- approximate memory sizes.

---

## 28.4 Streaming metrics [P1]

Pretend records arrive one at a time and cannot all be retained.

Build incrementally:

- count
- sum
- running mean
- min/max
- top-K with heap
- fixed-window average with deque
- fixed-window maximum with monotonic deque

### Important design question

For each metric write:

```text
State retained:
Update cost per item:
Memory usage:
Exact or approximate?
```

---

## 28.5 Reservoir sampling [P1]

Goal:

> Keep a uniform sample of `k` elements from a stream whose final length is unknown.

Practice with `k=2` and a six-item stream using dice/random-number thought experiments.

Ask AI to quiz you on the probability that each item remains in the final reservoir.

---

## 28.6 Approximate streaming structures [P2]

Learn conceptually after exact hashing is comfortable:

- Bloom filter
- Count-Min Sketch
- HyperLogLog concept

For each structure make a card:

```text
Question answered:
Memory advantage:
What error is allowed?
False positive/negative behavior:
One real use case:
```

Do not overinvest in implementation unless your work needs them.

---

## 28.7 Top-K ranking mini project

Generate synthetic `(item_id, score)` pairs.

Implement and benchmark:

1. full sort
2. size-k heap
3. NumPy partial selection (`argpartition`) after reading the API

Compare as `n` increases and `k` stays small.

Write down when each approach is appropriate.

---

## 28.8 Graph ML toy project

Model a transaction network:

```text
nodes = accounts
edges = transfers
```

Compute:

- number of nodes/edges
- degree of each node
- connected components
- BFS distance from one suspicious account
- simple cycle observations

Do not jump to GNN libraries. The goal is graph modeling fluency.

---

## 28.9 ML pipeline DAG project

Create nodes:

```text
ingest
validate
clean
feature_build
train
evaluate
package
deploy
```

Add dependencies.

Then:

- detect a cycle,
- produce a topological execution order,
- determine which tasks can theoretically run in parallel once prerequisites finish.

This is a direct bridge from DSA graphs to workflow/system-design thinking.

---

## 28.10 Nearest-neighbor search [P1 conceptual]

Learn the progression:

```text
brute-force distance scan
→ indexing structures such as KD-tree/Ball Tree in suitable dimensions
→ approximate nearest-neighbor systems for large/high-dimensional workloads
```

First build a brute-force nearest-neighbor search using NumPy.

Then inspect scikit-learn/Scipy APIs only after you can state the brute-force time and memory costs.

Do not make ANN infrastructure a prerequisite for basic DSA.

---

## 28.11 Free DS/ML practice resources

| Topic | Free resource |
|---|---|
| NumPy fundamentals | Official NumPy quickstart/user guide |
| NumPy drills | `rougier/numpy-100` on GitHub |
| Sparse arrays | Official SciPy sparse tutorial/reference |
| Visualization/arrays | Python Tutor for Python-level behavior; manual NumPy shape tables for array semantics |
| Graph algorithms | VisuAlgo, CP-Algorithms, CSES |
| Mini-project inspiration | Build Your Own X for later engineering projects; adapt ideas to your current stage |

### DS/ML AI exercise prompt

```text
I am learning DSA specifically for data science / ML engineering.
Known concepts: {KNOWN_CONCEPTS}.
Current DSA chunk: {CURRENT_CHUNK}.

Generate one tiny realistic data/ML exercise that can be solved only with my known concepts.
Constraints:
- dataset must fit in a short Python literal or be generated with <= 20 lines
- no pandas unless I explicitly say it is unlocked
- no scikit-learn unless I explicitly say it is unlocked
- no future data structure or algorithm
- first ask me to estimate time and memory
- then ask me to implement
- finally ask me how the approach changes if data becomes 1000x larger
Do not give the solution before I attempt it.
```


# 29. The Paper-and-Pencil Practice Library

Coding can hide weak reasoning because the interpreter immediately tells you that something failed. Paper practice forces you to predict state before receiving feedback.

Use one or two of these formats for every chunk.

---

## 29.1 State-trace table

Universal template:

```text
step | important variables before | operation | important variables after | invariant still true?
```

Examples:

### Two pointers

```text
step | left | right | values | decision | new left/right
```

### Stack

```text
input token | stack before | action | stack after
```

### BFS

```text
step | queue before | popped | newly visited | queue after | distance
```

### Dijkstra

```text
step | heap before | popped | relaxation | dist changes | heap after
```

### DP

```text
state | meaning | dependencies | transition result
```

---

## 29.2 Memory/reference drawing

Use boxes and arrows for:

- Python list aliases,
- shallow copies,
- linked lists,
- trees,
- graphs,
- mutable backtracking state.

Never write only:

```text
a = b
```

Draw whether both names now point to the same object.

---

## 29.3 Invariant sentence

Before each loop write exactly one sentence beginning:

> “Before each iteration, …”

Examples:

```text
Before each binary-search iteration, if the target exists it is inside [lo, hi].

Before each insertion-sort iteration, a[:i] is already sorted.

After the sliding-window shrink loop, the current window satisfies the validity condition.
```

This turns implementation into reasoning.

---

## 29.4 Complexity worksheet

For any solution:

```text
What is n?
What is m/k/V/E if present?
What operation dominates time?
How many times can that operation execute in TOTAL?
Input memory:
Extra memory:
Output memory:
Best/worst/amortized distinction if relevant:
```

### Important anti-pattern

Do not automatically multiply because you see nested loops.

Example: in many sliding-window algorithms, both pointers move forward at most `n` times total, so a nested-looking `while` can still produce O(n) total work.

---

## 29.5 Counterexample construction

Especially useful for:

- greedy algorithms,
- binary-search predicates,
- optimization ideas,
- suspicious heuristics.

Template:

```text
Claim:
Smallest input on which it might fail:
What does the claimed algorithm choose?
What is the better answer?
Why does this disprove the claim?
```

Practice inventing counterexamples rather than only solving known questions.

---

## 29.6 Predict-before-run rule

Whenever you have code shorter than ~30 lines:

1. write predicted output/state,
2. run it,
3. compare prediction,
4. explain any difference.

Python Tutor is particularly useful after the prediction, not before it.

---

# 30. The Debugging Practice System

Debugging is a separate skill from writing a correct solution the first time.

For every major stage, intentionally debug incorrect code.

---

## 30.1 The five bug classes

Classify each bug before fixing:

1. **Syntax/API bug** — invalid operation or wrong library usage
2. **State bug** — variable/reference contains the wrong state
3. **Boundary bug** — index/range/base-case error
4. **Invariant bug** — algorithm stops maintaining the property that makes it correct
5. **Complexity bug** — output is correct but implementation is too slow/memory-heavy

---

## 30.2 Debugging worksheet

```text
Expected behavior:
Smallest failing input:
Actual behavior:
First line/iteration where expected and actual state diverge:
Bug class:
Invariant violated:
Minimal fix:
New tests added:
```

The key phrase is **first divergence**. Do not only inspect the final wrong answer.

---

## 30.3 Bug drills by stage

### Python foundations
- aliasing accidentally mutates original
- default mutable argument
- shallow-copy confusion

### Arrays
- index off by one
- mutating list while iterating
- incorrect slice endpoint

### Strings
- forgetting immutability
- case/whitespace assumption

### Hashing
- missing-key handling
- overwriting instead of incrementing
- using unhashable key

### Sliding window
- not decrementing/removing outgoing state
- shrinking too early/late

### Binary search
- infinite loop
- candidate answer discarded
- wrong interval convention

### Linked list
- losing rest of list before rewiring pointer
- forgetting head/tail edge case

### Recursion/backtracking
- missing base case
- state not undone
- storing mutable reference instead of copy

### Trees/graphs
- forgetting visited state
- marking visited too late
- mixing node value with node identity

### Heap
- assuming heap array is sorted
- mixing min/max convention

### DP
- wrong state meaning
- base-case index
- wrong iteration order after space optimization

---

## 30.4 AI debugging generator prompt

```text
You are my DSA debugging trainer.

Known concepts: {KNOWN_CONCEPTS}
Current chunk: {CURRENT_CHUNK}
Forbidden/future concepts: {FORBIDDEN_CONCEPTS}
Language: Python 3

Create one short implementation (10–30 lines) that is intended to solve a problem using CURRENT_CHUNK.
Insert exactly ONE non-syntax bug.
The bug may be a boundary, state, invariant, or complexity bug.

Give me:
1. the problem statement,
2. the buggy code,
3. three tests, at least one of which fails,
4. NO explanation of the bug.

When I answer, do not immediately provide the fix. Ask me:
- What is the first incorrect state?
- Which invariant is violated?
- What is the smallest failing case?
Then grade my diagnosis.
```

---

# 31. Teaching Practice — The Feynman Layer

You understand a topic much better when you can explain it without hiding behind jargon.

You do not need a real student every time. Teach:

- a friend,
- a colleague,
- a rubber duck,
- your phone camera,
- an AI acting as a beginner.

---

## 31.1 The 60-second explanation

Explain only:

```text
What is it?
Why does it exist?
One tiny example.
One important complexity/trade-off.
```

Example for a hash set:

```text
A set remembers unique values and supports fast average membership checks.
If I need to know whether I've already seen an ID, I can put each ID into a set.
Repeated list scans can cost linear time per check; set membership is typically constant average time.
The trade-off is extra memory and no positional indexing like a list.
```

---

## 31.2 The 3-minute whiteboard explanation

Use this format:

```text
1. Draw structure/state.
2. Show one operation.
3. State invariant.
4. State time/space complexity.
5. Name one use case.
```

Good topics:

- dynamic array
- stack vs queue
- linked-list reversal
- binary search
- heap
- DFS vs BFS
- DP memoization

---

## 31.3 “Teach a skeptical beginner” AI prompt

```text
Pretend you are a curious beginner who knows only: {KNOWN_CONCEPTS}.
I will teach you {CURRENT_CHUNK}.

Do not teach me first.
Listen to my explanation and interrupt with realistic beginner questions such as:
- Why?
- What does that variable represent?
- Why is this faster?
- What happens on empty input?
- Why can't I use {AN_EARLIER_TOOL} instead?

Never ask about a concept that is not in KNOWN_CONCEPTS or CURRENT_CHUNK.
At the end, score my explanation on:
- correctness
- clarity
- missing prerequisite assumptions
- complexity explanation
- example quality
Then give me only the 3 highest-value improvements.
```

---

## 31.4 “Explain three ways” drill

Explain the same concept to:

1. a 10-year-old,
2. a junior Python developer,
3. an ML engineer.

Example for queue:

- child → people waiting in a line
- developer → FIFO + deque
- ML engineer → batches/jobs waiting for processing

This helps separate the core abstraction from a single memorized analogy.

---

# 32. Learning in Public / Social-Media Practice

Posting is optional. Its purpose here is **retrieval practice and explanation**, not building an audience at all costs.

Never let writing a post consume more time than learning the underlying concept.

---

## 32.1 The smallest useful post

Template:

```text
Today I learned: {CONCEPT}

The problem it solves:
{1–2 sentences}

My mental model:
{simple analogy or diagram}

Key invariant/idea:
{one sentence}

Complexity:
{time / space}

One mistake I made:
{real mistake}

Tiny example:
{small input/output}
```

This format works for LinkedIn, X threads, GitHub notes, dev.to, Medium, or a personal blog.

---

## 32.2 “One diagram, one idea” post

Use Excalidraw or Mermaid.

Examples:

- array vs linked-list memory
- stack vs queue
- binary-search interval shrinking
- recursion call stack
- heap array ↔ tree mapping
- BFS layers
- DP dependency arrows

Rule:

> One post should teach one main mental model.

Do not make a 20-slide carousel for every tiny learning chunk.

---

## 32.3 Problem-solution post without leaking copied solutions

After solving a public coding problem, write from memory:

```text
Problem type:
Brute-force thought:
Why it is too costly:
Pattern I recognized:
Invariant:
Complexity:
Edge case that surprised me:
```

You can link to the original problem instead of pasting its entire text.

Avoid presenting copied editorial code as your own learning.

---

## 32.4 Weekly learning recap

Template:

```text
DSA Week {N}

Learned:
- ...
- ...

Most useful mental model:
...

Problem I initially got wrong:
...

Why I got it wrong:
...

One thing I can now implement without notes:
...

Next dependency-safe topic:
...
```

This is excellent evidence of real progression because it includes mistakes and corrections rather than only solved counts.

---

## 32.5 AI social-post reviewer

```text
Review this learning post for technical correctness.
My audience is beginner-to-intermediate Python/DS/ML learners.

Check only:
1. Is the DSA explanation correct?
2. Is the stated complexity correct?
3. Did I accidentally imply a stronger guarantee than is true?
4. Is the example understandable without future concepts?
5. Can any sentence be simplified?

Do not rewrite the post completely unless I ask. Preserve my voice and point out specific corrections.
```

---

# 33. Micro System-Design Practice by DSA Stage

You do **not** need to wait until you are a senior engineer to practice design. But early design should remain at the abstraction/data-structure level, not jump immediately into Kafka, Kubernetes, sharding, and distributed consensus.

The goal is:

> Given operations and constraints, choose a data structure and justify it.

---

## 33.1 Stage 2 — Array/list design

Design an in-memory collection for the last 100 temperature readings.

Questions:

- Do you need random access?
- What happens when reading #101 arrives?
- Is shifting acceptable?
- Which future structure might improve repeated removal from the front? Write “deque — future stage” if not learned yet.

---

## 33.2 Stage 4 — Hashing design

Design a session lookup table:

```text
session_id -> user_id
```

Operations:

- add session
- lookup session
- delete session

Explain average complexity and memory trade-off.

Second exercise: duplicate request-ID filter for one process lifetime.

---

## 33.3 Stage 5 — Window design

You receive one latency measurement each second.

Need:

> average latency over the most recent 60 measurements.

Design state and update operations using only unlocked concepts.

After deque is learned, revisit and improve the implementation if appropriate.

---

## 33.4 Stage 8 — Queue design

Design an in-memory job queue.

Questions:

- FIFO guarantee?
- enqueue complexity?
- dequeue complexity?
- empty behavior?
- bounded or unbounded queue?

Do not add workers/networking yet.

---

## 33.5 Stage 9 — LRU cache [P1]

Only after **hash map + doubly linked list** are known.

Design operations:

```text
get(key)
put(key, value)
```

Goal:

```text
O(1) average get
O(1) average put
```

Reason about why neither a dictionary alone nor a linked list alone provides both lookup and recency-order updates efficiently.

Then attempt:

- LeetCode 146 — **LRU Cache** [P1]

This is an excellent small data-structure design exercise.

---

## 33.6 Stage 12 — hierarchy design

Design:

- folder tree,
- organization tree,
- threaded comment tree.

State what each node stores and what traversal supports each query.

---

## 33.7 Stage 13 — streaming top-K design

A recommendation model emits millions of `(item, score)` pairs but UI needs only top 20.

Compare:

```text
store all + sort
vs
size-20 heap
```

Estimate memory and asymptotic work.

---

## 33.8 Stage 14 — dependency scheduler

Represent tasks as DAG nodes and dependencies as edges.

Operations:

- add dependency
- detect impossible cycle
- produce valid order

Use topological sorting.

---

## 33.9 Stage 16 — resource-allocation DP design

You have a small integer budget and several mutually exclusive choices.

Model:

- state,
- transition,
- cost dimension,
- objective.

The point is not architecture; it is recognizing optimization state.

---

## 33.10 After the full core — broader free system-design resources

Use these only when the DSA-level design exercises feel natural:

- **System Design Primer** — GitHub: `donnemartin/system-design-primer`
- **System Design 101** — GitHub: `ByteByteGoHq/system-design-101`
- **Build Your Own X** — GitHub: `codecrafters-io/build-your-own-x`

These resources can introduce many technologies that are outside the DSA dependency chain. Treat them as a separate engineering track rather than letting them derail foundational DSA study.

---

# 34. Master AI Prompt Library

These prompts are intended for times when no public problem set isolates the exact tiny chunk you just learned.

Replace the placeholders every time.

---

## 34.1 Dependency-safe exercise generator

```text
You are my dependency-safe DSA practice generator.

Language: Python 3
Current chunk: {CURRENT_CHUNK}
Known concepts:
{KNOWN_CONCEPTS}

Not learned / forbidden concepts:
{FORBIDDEN_CONCEPTS}

Create a practice pack containing:
1. 3 conceptual thinking questions
2. 2 paper-and-pencil tracing questions
3. 2 tiny implementation questions
4. 1 debugging question
5. 1 real-world/data-science mini application
6. 1 teach-back question

Rules:
- Every task must be solvable using ONLY KNOWN_CONCEPTS plus CURRENT_CHUNK.
- Do not secretly require a future pattern even if that would be the optimal solution.
- Use tiny inputs so I can trace them by hand.
- Do not show solutions initially.
- State the intended prerequisite concepts for every task.
- If a task accidentally needs a forbidden concept, replace it before showing me the pack.
- When I answer, give one hint at a time rather than the full solution.
```

---

## 34.2 Paper-tracing generator

```text
Generate 5 paper-tracing exercises for {CURRENT_CHUNK}.
I know only {KNOWN_CONCEPTS}.

For each exercise provide:
- a tiny input,
- a blank trace-table template with meaningful columns,
- the invariant I should try to observe, phrased as a question rather than an answer.

Do not provide the completed table until I submit mine.
Do not use future concepts: {FORBIDDEN_CONCEPTS}.
```

---

## 34.3 “Choose the pattern” classifier

```text
I know these patterns only:
{KNOWN_PATTERNS}

Create 12 short problem descriptions.
For each one, exactly one of my known patterns should be a natural primary approach, OR the answer should be "plain scan/brute force".

Do not include any problem whose natural solution depends on a pattern I have not learned.
Do not label the problems with tags.
I will classify each problem and explain the clue that led me there.
After I answer, grade both the classification and reasoning.
```

---

## 34.4 One-hint-at-a-time coach

```text
I am solving this DSA problem:
{PROBLEM}

Known concepts: {KNOWN_CONCEPTS}
Forbidden future concepts: {FORBIDDEN_CONCEPTS}

Do not solve it for me.
First ask me:
1. What is the brute-force approach?
2. What is its time/space complexity?
3. What property of the input might help?

If I get stuck, give exactly ONE conceptual hint at a time.
Never give code unless I explicitly say: "show code".
If the best solution requires a forbidden future concept, tell me this problem is not dependency-safe for me yet instead of teaching that future concept.
```

---

## 34.5 Implementation-from-spec generator

```text
Current structure/algorithm: {CURRENT_CHUNK}
Known concepts: {KNOWN_CONCEPTS}

Give me a tiny API specification, not an algorithm.
Example style:
class X:
    add(...)
    remove(...)
    query(...)

Provide behavior, edge cases, and 6 black-box tests.
Do not tell me how to implement it.
The API must be implementable using only my known concepts.
When I submit code, review correctness, invariants, complexity, and edge cases.
```

---

## 34.6 Complexity quiz generator

```text
Generate 10 short Python snippets using only {KNOWN_CONCEPTS}.
Ask me for time and auxiliary-space complexity.
Include:
- single loops
- nested loops
- loops whose total movement is still linear
- dictionary/set operations with average-case assumptions stated
- one amortized-operation question if dynamic arrays are known
- recursion only if recursion is in KNOWN_CONCEPTS

Do not reveal answers until I submit all 10.
For every correction, explain what n means and count the dominant operation.
```

---

## 34.7 Oral interview / viva prompt

```text
Act as an interviewer for a beginner learning {CURRENT_CHUNK}.
Use only {KNOWN_CONCEPTS}.
Ask one question at a time.
Mix:
- definition
- why/when to use
- complexity
- trace a tiny example
- choose between two data structures
- identify an edge case

Do not ask trick questions requiring topics I have not learned.
After 10 questions, provide a scorecard and the 3 concepts I should revisit.
```

---

## 34.8 Social-post generator that protects learning

Do not ask AI to write the whole post before you attempt it.

Use:

```text
I learned {CURRENT_CHUNK} today.
Ask me 6 questions that collect the raw material for a short learning post:
- what problem it solves
- mental model
- invariant
- complexity
- example
- mistake I made

After I answer, organize MY answers into a concise post.
Do not add technical claims that I did not provide without flagging them for verification.
```

---

## 34.9 Mini-system-design generator

```text
Known data structures/algorithms: {KNOWN_CONCEPTS}
Current chunk: {CURRENT_CHUNK}

Create one tiny in-memory design exercise.
Requirements:
- 3 to 5 operations
- one clear performance constraint
- no databases, distributed systems, cloud services, concurrency, networking, or future DSA unless listed as known
- small enough to design in 15 minutes

Ask me to choose the structure and give complexity for each operation.
Then challenge one design assumption with a changed requirement.
```

---

## 34.10 Weekly mixed-review generator

```text
Here is my unlocked DSA knowledge:
{KNOWN_CONCEPTS}

Generate a 60-minute weekly review:
- 10 min: recall quiz
- 10 min: paper tracing
- 20 min: one implementation/problem
- 10 min: debugging
- 10 min: teaching/application

Weight the newest 2 topics more heavily, but include older topics for spaced retrieval.
Absolutely do not use any concept outside KNOWN_CONCEPTS.
Do not show solutions until I finish each section.
```

---

# 35. Spaced Repetition and Flashcards

DSA is not pure memorization, so flashcards should support reasoning rather than replace implementation.

Anki desktop and AnkiWeb can be used as free study tools; use any equivalent flashcard method if you prefer.

---

## 35.1 Good DSA flashcard types

### Definition card

```text
Q: What is the invariant of a min-heap?
A: Every parent key is <= its children's keys.
```

### Recognition card

```text
Q: Problem asks for shortest number of edges in an unweighted graph. First algorithm to consider?
A: BFS.
```

### Complexity card

```text
Q: Python list append typical amortized complexity?
A: O(1) amortized.
```

### Contrast card

```text
Q: Stack vs queue removal order?
A: LIFO vs FIFO.
```

### Failure-condition card

```text
Q: Why shouldn't ordinary Dijkstra be used with negative edge weights?
A: Its greedy finalized-distance reasoning is not valid when later negative edges can improve a distance.
```

### Invariant card

```text
Q: Binary search inclusive [lo,hi] invariant?
A: If target exists, it remains within the interval.
```

---

## 35.2 Bad flashcards

Avoid huge cards such as:

```text
Q: Write the complete implementation of red-black tree deletion.
```

Also avoid memorizing entire LeetCode solutions line-by-line.

Instead retrieve:

- the state,
- invariant,
- transition,
- complexity,
- edge-case logic.

---

## 35.3 Card-generation AI prompt

```text
From my notes on {CURRENT_CHUNK}, generate at most 12 flashcards.
Use only concepts I have learned: {KNOWN_CONCEPTS}.
Prefer:
- invariants
- recognition clues
- complexity
- contrasts
- common failure modes
- small one-step traces
Avoid cards that merely ask me to reproduce long code.
Output as Front | Back.
```

---

# 36. A Work-Friendly Practice Schedule

The system should fit around a full-time job. Consistency matters more than heroic weekend sessions followed by burnout.

---

## 36.1 Minimum viable week — about 2 hours

```text
Session A — 30 min
5  recall
10 concept/paper
15 implementation

Session B — 30 min
10 paper trace
20 one easy direct problem

Session C — 30 min
15 debugging
10 teach-back
5 flashcards

Weekend — 30 min
mixed review + one short public note or diagram if desired
```

If you are overloaded at work, this is enough to keep the chain alive.

---

## 36.2 Standard week — 4 to 5 hours

```text
Mon 45m  learn + paper trace
Tue 45m  implement from scratch
Wed 30m  review/flashcards or rest
Thu 60m  1–2 dependency-safe problems
Sat 60m  mixed problem/debug session
Sun 30m  teach/post/project connection
```

---

## 36.3 Deep week — 7 to 8 hours

Use only when you genuinely have time.

Add:

- a medium problem,
- one mini-project/design exercise,
- MIT/Princeton/USACO deeper reading,
- one reimplementation without notes.

Do not turn every week into a deep week.

---

## 36.4 The 3-day rule

If you study a new pattern today, touch it again within roughly three days:

```text
Day 0: learn + trace
Day 1/2: implement
Day 3: solve/retrieve without notes
Day 7+: mixed review
```

The exact intervals need not be perfect. The point is to avoid one-and-done exposure.

---

# 37. Progress Tracker Template

Copy this section for every chunk.

```markdown
## Chunk: ______________________
Date started:
Date passed:

### Prerequisites
- [ ] prerequisite 1
- [ ] prerequisite 2

### Understanding
- [ ] I can define it without notes.
- [ ] I can say why it exists.
- [ ] I can state its invariant.
- [ ] I can state operation complexities.

### Paper
- [ ] I traced at least 2 examples.
- [ ] I handled one edge case.

### Implementation
- [ ] I implemented the core idea without copying.
- [ ] I tested empty/small/edge cases.

### Apply
- [ ] Easy/direct problem 1:
- [ ] Easy/direct problem 2:
- [ ] One slightly unfamiliar application:

### Debug
- [ ] I fixed one intentionally broken implementation.

### Teach
- [ ] I explained it in 60 seconds.
- [ ] I explained one example on paper/whiteboard.

### Connect
- [ ] I identified one Python/DS/ML/engineering use case.

### Review
- [ ] 24–72h retrieval
- [ ] one-week mixed review

### Mistakes worth remembering
1.
2.
3.

### Current confidence (not a grade)
Recognition: /5
Implementation: /5
Explanation: /5
```

---

# 38. What to Do When You Are Stuck

Being stuck is part of the training. The goal is to prevent “stuck for 90 minutes with no learning” and also prevent “ask AI after 90 seconds.”

---

## 38.1 The stuck ladder

Use in order:

### Level 1 — restate

Write input/output in your own words.

### Level 2 — tiny example

Shrink to the smallest nontrivial input and solve it manually.

### Level 3 — brute force

Write the slow obvious method.

### Level 4 — identify repeated work/structure

Ask:

- sorted?
- frequency?
- contiguous?
- monotonic?
- hierarchy?
- graph relationships?
- repeated state?

but consider only patterns you have already unlocked.

### Level 5 — inspect constraints

What time complexity would be plausible?

### Level 6 — one AI hint

Use the one-hint prompt.

### Level 7 — read editorial/video

If still blocked, study a solution actively:

1. pause before each key step,
2. predict what comes next,
3. close the source,
4. reimplement from memory,
5. explain the invariant,
6. solve a similar problem later.

Looking at a solution is not failure. Copying it without reconstruction is low-value practice.

---

## 38.2 When a problem is simply too early

A problem may be badly matched to your current stage.

Warning signs:

- editorial uses multiple concepts you have never seen,
- you cannot even understand the required state representation,
- every hint introduces a future structure,
- platform difficulty/tag was misleading.

Mark it:

```text
PARKED — REQUIRES: {future concepts}
```

Then return when those dependencies are unlocked.

This is better than damaging confidence on an incorrectly sequenced problem.

---

# 39. How to Choose Free Problems Without Accidentally Mixing Concepts

Public platform tags are useful but imperfect. A problem tagged “array” may also require hashing, greedy, binary search, or DP.

Use this process.

---

## 39.1 Problem eligibility test

Before solving, inspect only:

- title,
- statement,
- constraints,
- non-spoiler tags if the platform shows them.

Then ask:

```text
Do I know every prerequisite suggested by the tags?
```

If no, skip/park it.

---

## 39.2 Tags can reveal future dependencies

Examples:

```text
Arrays + Hash Table
```

Safe only after hashing.

```text
Tree + DFS
```

Safe after recursion/tree traversal.

```text
Graph + Heap + Shortest Path
```

Do not attempt before heap + graph + shortest-path stage.

```text
String + DP
```

Not a Stage 3 string problem if DP is not learned.

---

## 39.3 Platform-specific usage rules

### CodingBat
Best for early Python, strings, lists, logic. Use heavily before interview-style sites.

### Exercism
Use for Python fluency and small exercises. Select exercises matching already-known concepts.

### HackerRank
Use domain/subdomain filters. Good for direct structure exercises.

### HackerEarth
Use its topic hierarchy for basic programming, data structures, and algorithms.

### GeeksforGeeks Practice
Use topic filters, but inspect each problem for mixed concepts.

### LeetCode
Use named topic tags/study plans and a curated allowlist. Do not randomly press “medium.”

### NeetCode
Use its roadmap ordering and videos after you attempt a problem. Some site material may be marked Pro; ignore anything locked and use the freely accessible roadmap/problems/videos.

### Striver A2Z
Useful as a large checklist; do not treat “complete the sheet” as the learning goal.

### CSES
Excellent once foundational patterns are comfortable. Problems often expect more independence than beginner tutorial platforms.

### CodeChef
Use Practice filters and easy difficulty. Skip any problem/page marked as paid/Pro.

### Codeforces
Use later. Start around low ratings such as 800/900 and verify tags are already unlocked. Contest problems can combine ideas unexpectedly.

### USACO Guide
Use as a structured deeper curriculum after the basics. It is especially useful when you want more than interview-style practice.

---

# 40. Free Resource Directory — Quick Links and Exact Search Terms

Use this as the bookmarks section.

## 40.1 Beginner coding

### CodingBat Python
https://codingbat.com/python

Sections to use early:

```text
Warmup-1
Warmup-2
String-1
String-2
List-1
List-2
Logic-1
Logic-2
```

### Exercism Python
https://exercism.org/tracks/python

Use concept/exercise search around:

```text
conditionals
loops
lists
dictionaries
strings
```

---

## 40.2 Visualizers

### Python Tutor
https://pythontutor.com/

Best for:

```text
references
mutation
function calls
recursion
linked-list nodes
trees built as Python objects
```

### VisuAlgo
https://visualgo.net/en

Look for:

```text
Array
Sorting
Linked List
Stack / Queue where available
Hash Table
Heap
BST
Graph Data Structures
DFS/BFS
Union-Find / UFDS
Minimum Spanning Tree
Single-Source Shortest Paths
Recursion
```

### VisuAlgo training
https://visualgo.net/training

Use after watching the visualization.

### OpenDSA
https://opendsa.org/

Use for free interactive visualizations/exercises across algorithms and data structures.

---

## 40.3 Topic-filtered practice sites

### HackerRank — Data Structures
https://www.hackerrank.com/domains/data-structures

Subdomains include areas such as:

```text
Arrays
Linked Lists
Trees
Balanced Trees
Stacks
Queues
Heap
Disjoint Set
Trie
```

### HackerEarth Practice
https://www.hackerearth.com/practice/

Navigate:

```text
Basic Programming
Data Structures
Algorithms
```

Then choose the exact current topic.

### GeeksforGeeks Practice
https://www.geeksforgeeks.org/practice-problems

Useful topic filters include:

```text
Arrays
Matrix
Strings
Searching
Sorting
Hashing
Two Pointers
Sliding Window
Prefix Sum
Linked List
Stack
Queue
Deque
Tree
BST
Heap
Graph
Greedy
Backtracking
Dynamic Programming
Trie
Segment Tree
```

### CodeChef Practice
https://www.codechef.com/practice

Use easy difficulty plus current topic filters. Ignore paid/Pro items.

### Codeforces Problemset
https://codeforces.com/problemset

Later use:

```text
rating: 800–1000 initially
and tags already unlocked
```

---

## 40.4 Curated roadmaps/sheets

### LeetCode 75
https://leetcode.com/studyplan/leetcode-75/

Use only problems whose dependencies are already unlocked.

### LeetCode Binary Search Study Plan
https://leetcode.com/studyplan/binary-search/

### LeetCode Dynamic Programming Study Plan
https://leetcode.com/studyplan/dynamic-programming/

### NeetCode Roadmap
https://neetcode.io/roadmap

### NeetCode 250
https://neetcode.io/practice/practice/neetcode250

### Striver A2Z
https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z

### CSES Problem Set
https://cses.fi/problemset

Useful later categories:

```text
Sorting and Searching
Dynamic Programming
Graph Algorithms
Range Queries
Tree Algorithms
```

### USACO Guide
https://usaco.guide/

Use when you want a deeper structured progression and more problem-solving breadth.

---

## 40.5 Rigorous/reference resources

### MIT 6.006 Introduction to Algorithms
https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/

Problem sets:
https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/problem-sets/

Assignments:
https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/assignments/

Use after an intuitive first pass when you want proofs, stronger complexity reasoning, or harder paper problems.

### Princeton Algorithms
https://algs4.cs.princeton.edu/home/

The examples are primarily Java-oriented; use the explanations/exercises/visual thinking and implement in Python.

### CP-Algorithms
https://cp-algorithms.com/

Especially useful later for:

```text
DFS
BFS
Topological Sort
DSU
0-1 BFS
Fenwick Tree
shortest paths
MST
string algorithms
```

This is a reference, not the first resource for a brand-new beginner.

---

## 40.6 Video

### freeCodeCamp — Data Structures and Algorithms in Python
https://www.youtube.com/watch?v=pkYVOmU3MgA

Use selected timestamps/chapters as an alternate explanation rather than watching 12+ hours passively from start to finish.

Rule:

```text
watch 10–20 minutes
→ close video
→ draw/implement from memory
→ solve one small task
```

---

## 40.7 Python official tools

### Python Tutorial — Data Structures
https://docs.python.org/3/tutorial/datastructures.html

### collections
https://docs.python.org/3/library/collections.html

### heapq
https://docs.python.org/3/library/heapq.html

### bisect
https://docs.python.org/3/library/bisect.html

### Sorting HOWTO
https://docs.python.org/3/howto/sorting.html

Official documentation should be the final authority for Python API behavior.

---

## 40.8 NumPy/SciPy

### NumPy quickstart
https://numpy.org/doc/stable/user/quickstart.html

### NumPy user basics
https://numpy.org/doc/stable/user/basics.html

### NumPy ndarray
https://numpy.org/doc/stable/reference/arrays.ndarray.html

### NumPy 100 exercises
https://github.com/rougier/numpy-100

### SciPy sparse tutorial
https://docs.scipy.org/doc/scipy/tutorial/sparse.html

### SciPy sparse reference
https://docs.scipy.org/doc/scipy/reference/sparse.html

---

## 40.9 Diagram/teaching tools

### Excalidraw
https://excalidraw.com/

Use for freehand:

- memory diagrams,
- pointer diagrams,
- trees/graphs,
- call stacks.

### Mermaid
https://mermaid.ai/open-source/

Live editor:
https://mermaid.ai/live/

Use for reproducible text-based diagrams such as dependency DAGs and flowcharts.

---

## 40.10 Later system-design/build resources

### System Design Primer
https://github.com/donnemartin/system-design-primer

### System Design 101
https://github.com/ByteByteGoHq/system-design-101

### Build Your Own X
https://github.com/codecrafters-io/build-your-own-x

Use after the DSA-level micro-design exercises, not instead of them.

---

# 41. A Recommended “One Chunk Finished” Ritual

When you complete a tiny subtopic, do this rather than immediately rushing to the next chapter.

Example: **binary search exact target**.

```text
1. THINK
Explain why sorted/monotonic structure matters.

2. PAPER
Trace target present + target absent.

3. IMPLEMENT
Write iterative search from memory.

4. APPLY
Solve LeetCode 704 or an equivalent direct problem.

5. DEBUG
Fix one boundary bug.

6. TEACH
Explain interval invariant in 60 seconds.

7. CONNECT
Name a real lookup/search-space application.

8. RECORD
Write one mistake/invariant flashcard.

9. REVIEW
Repeat without notes 2–7 days later.
```

This is what “finished” should mean in this practice system.

---

# 42. Beginner-Friendly Fun Modes

Not every practice session needs to look like an interview.

---

## 42.1 Human algorithm

Ask a friend to act as the computer.

Give them instructions for:

- binary search in numbered cards,
- stack of books,
- queue of people,
- BFS across a drawn maze.

If your instructions are ambiguous, your algorithm is ambiguous.

---

## 42.2 Card sorting

Use playing cards or numbered paper slips for:

- insertion sort,
- merge,
- quicksort partition,
- heap tree mapping.

Physically moving objects makes state transitions memorable.

---

## 42.3 Maze/grid practice

Draw a 5x5 maze.

Later, after graphs:

- DFS color exploration order,
- BFS write distances in each square,
- add weighted cells and compare why BFS is no longer enough.

---

## 42.4 Beat-your-old-solution challenge

Do not race other people first.

For one problem record:

```text
Attempt 1: brute force complexity
Attempt 2: improved complexity after pattern learned
```

Your competition is your old algorithm.

---

## 42.5 Explain the wrong answer

Take an incorrect solution and make a 2-minute “why this fails” explanation.

This often creates stronger understanding than posting only the final correct code.

---

# 43. What Not to Do

Avoid these traps.

## 43.1 Random problem roulette

Do not open random LeetCode mediums before building patterns.

## 43.2 Problem-count obsession

`300 solved` is less useful than being able to derive and explain 80 representative problems.

## 43.3 Watching without retrieval

A 12-hour video watched passively is not 12 hours of DSA practice.

## 43.4 Copying templates too early

A template becomes useful only after you understand its invariant.

## 43.5 Learning every variant equally

Do not spend five days on circular doubly linked-list deletion while binary search/hashing/BFS are weak.

## 43.6 Using AI as an answer dispenser

Use AI to:

- ask questions,
- generate tiny examples,
- give progressive hints,
- create bugs,
- critique reasoning,
- role-play a student/interviewer.

Do not use it to remove every moment of productive struggle.

## 43.7 Mixing future concepts because they are “better”

A Stage 2 array exercise should not suddenly become a heap exercise merely because heap is optimal.

During learning, a slower solution using currently unlocked concepts can be the correct exercise.

Later, revisit it and improve the solution.

---

# 44. The Full Practice Progression in One View

```text
Stage 0  Python objects/references/syntax
         ↓
         CodingBat / Exercism / Python Tutor

Stage 1  Complexity
         ↓
         paper traces / MIT small questions / AI complexity drills

Stage 2  Arrays/lists/NumPy basics
         ↓
         CodingBat / HackerRank arrays / GFG arrays / NumPy-100 later

Stage 3  Strings
         ↓
         CodingBat String-1/2 / HackerRank/GFG strings

Stage 4  Hashing
         ↓
         dict/set drills / LeetCode easy hashing / HackerRank

Stage 5  Prefix sums / Two pointers / Sliding window
         ↓
         curated LeetCode + NeetCode + GFG exact tags

Stage 6  Binary search
         ↓
         LeetCode BS plan + HackerEarth search

Stage 7  Sorting
         ↓
         VisuAlgo/OpenDSA + direct implementation + Python sort

Stage 8  Stack / Queue / Deque
         ↓
         HackerRank/HackerEarth + direct problems

Stage 9  Linked Lists
         ↓
         Python Tutor + VisuAlgo + curated problems

Stage 10 Recursion
         ↓
         paper call stacks + Python Tutor + divide/conquer

Stage 11 Backtracking
         ↓
         curated subset/permutation/combination progression

Stage 12 Trees/BST
         ↓
         VisuAlgo + NeetCode/Striver + traversal drills

Stage 13 Heap/PQ
         ↓
         heapq + VisuAlgo + top-K problems

Stage 14 Graphs
         ↓
         VisuAlgo → LeetCode basics → CSES → CP-Algorithms/USACO

Stage 15 Greedy
         ↓
         counterexamples + interval/scheduling problems

Stage 16 Dynamic Programming
         ↓
         recurrence paper → memoization → tabulation → LC/CSES

Stage 17 Trie/string algorithms
         ↓
         implementation + selected advanced references

Stage 18 DS/ML extensions
         ↓
         NumPy-100 + SciPy sparse + streaming/top-K/graph projects
```

---

# 45. Your Default Practice Recipe

If you do not know what to do on a particular day, use this exact recipe.

```text
Step 1 — Choose ONE chunk from the roadmap.
Step 2 — Verify all prerequisites are already checked off.
Step 3 — Spend 5 minutes recalling yesterday's concept without notes.
Step 4 — Do one tiny paper trace.
Step 5 — Implement the core operation from scratch.
Step 6 — Solve ONE direct dependency-safe public problem.
Step 7 — If stuck, use one AI hint, not a solution.
Step 8 — State the invariant and complexity aloud.
Step 9 — Record one mistake/flashcard.
Step 10 — Stop or move on only if energy remains.
```

For a busy working professional, one correctly chosen problem plus explanation is enough for a productive session.

---

# 46. Final Completion Standard

You have not mastered a DSA topic merely because:

- you watched the video,
- the notebook ran,
- you copied the implementation,
- LeetCode displayed “Accepted.”

A much stronger completion signal is:

```text
I can recognize when the idea applies.
I can reject it when it does not apply.
I can trace it manually.
I can implement the core idea without copying.
I can explain its invariant.
I can analyze time and space.
I can debug a broken version.
I can teach it to a beginner.
I can connect it to one real software/data/ML use case.
I can still do these things after a few days without rereading everything.
```

That is the practice system this document is designed to support.
