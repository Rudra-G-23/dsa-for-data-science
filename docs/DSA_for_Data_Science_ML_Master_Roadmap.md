# DSA for Data Science & ML — Beginner-to-Advanced Master Roadmap in Python

**Built from:** the uploaded *DSA for AI* PDF, the CampusX `dsa-for-ai` repository/course structure, and a comparison against established algorithm/data-structure curricula and official Python/NumPy/SciPy documentation.

**Research date:** 2026-09-18  
**Primary language:** Python 3  
**Goal:** strong DSA fundamentals for data science / ML engineering, technical interviews, and deeper CS study — without spending equal time on every topic.

---

# 0. How to use this roadmap

This is not meant to be read once from top to bottom like a book.

Use every topic in five passes:

1. **Understand the object** — what it is, why it exists, what problem it solves.
2. **Draw or trace it** — memory layout, pointers, recursion stack, tree/graph state.
3. **Implement the core operation yourself** — even if Python already provides it.
4. **Use the Pythonic/library version** — `list`, `dict`, `set`, `deque`, `heapq`, NumPy, etc.
5. **Solve a few pattern problems** — until you can recognize *when* to use the idea.

A topic is not mastered because you can reproduce code from memory. You should be able to:

- explain the invariant,
- choose it from several alternatives,
- analyze its time/space complexity,
- implement or use it correctly,
- identify edge cases,
- and apply it to an unfamiliar problem.

---

# 1. Priority brackets — the 80/20 system

I would **not** spend equal time on every item in the original course.

| Bracket | Meaning | What to do |
|---|---|---|
| **[P0] Core 80/20** | Highest return for DS/ML + interviews + general engineering | Learn deeply and practice repeatedly |
| **[P1] Strong** | Important after P0; appears often enough to deserve real fluency | Learn well and solve several problems |
| **[P2] Useful/Specialized** | Valuable for some domains or harder interviews | Learn after the core |
| **[P3] Advanced/Optional** | Mostly competitive programming, specialized systems, or advanced algorithms | Study only when your goals need it |

A good time split is approximately:

- **55–60%** on P0
- **20–25%** on P1
- **10–15%** on P2
- **5–10%** on P3

The important point is not the exact percentage. The point is to avoid spending ten hours implementing circular linked-list variants while still being weak at hashing, binary search, heaps, BFS/DFS, or dynamic programming.

---

# 2. What I found in your uploaded PDF

The PDF contains a substantial **Part 1**, organized around these 13 areas:

1. Introduction to DSA and Python Basics
2. Arrays and Lists
3. Strings
4. Linked Lists
5. Stacks
6. Queues
7. Searching
8. Sorting
9. Recursion
10. Hashing
11. Patterns / Problem Solving
12. Trees
13. Graphs

## 2.1 Detailed Part 1 outline

### 1. Introduction
- Importance of DSA
- Time & space complexity
- Complexity practice
- Python refresher
  - built-in data types
  - control structures
  - loops
  - functions
  - built-in functions
  - classes
  - reading input

### 2. Arrays & Lists
- Arrays
- Lists
- Arrays vs lists
- Complexity analysis
- Coding problems
- Data-science context

### 3. Strings
- Introduction
- Properties
- Use cases
- Common functions
- String manipulation
- String comparison
- Coding problems
- Data-science context

### 4. Linked Lists
- Introduction
- Memory representation
- Linked lists vs arrays/lists
- Types
- Singly linked list
  - setup
  - insertion
  - search
  - deletion
  - complexity
- Circular singly linked list
  - setup
  - insertion
  - search
  - deletion
  - complexity
- Doubly linked list
  - setup
  - insertion
  - search
  - deletion
  - complexity
- Circular doubly linked list
  - setup
  - insertion
  - search
  - deletion
  - complexity
- Coding problems

### 5. Stacks
- Introduction
- Operations
- Implementations
  - list
  - `collections`
  - linked list
- Complexity
- Applications
- Pros / cons
- Coding problems
- Data-science context

### 6. Queues
- Introduction
- Operations
- Implementations
  - list
  - linked list
  - `collections`
- Complexity
- Coding problems
- Data-science context

### 7. Searching
- Linear search
- Binary search
- Exponential search
- Data-science context

### 8. Sorting
- Introduction
- Bubble sort
- Selection sort
- Insertion sort
- Merge sort
- Quick sort
- Counting sort
- Complexity comparison
- Data-science context

### 9. Recursion
- Introduction
- Internal working
- Common mistakes
- Recursion vs iteration
- Coding problems
- Data-science context

### 10. Hashing
- Introduction
- Hash function
- Hash table
- Collisions
- Load factor
- Common operations
- Complexity
- Coding problems
- Data-science context

### 11. Problem-Solving Patterns
- Sliding window
- Two pointers
- Fast/slow pointers
- Prefix sum
- Hashing
- Binary-search pattern
- Greedy approach

### 12. Trees
- Introduction
- Terminology
- Properties
- Traversals
  - preorder
  - inorder
  - postorder
  - level order
  - choosing a traversal
- Binary Search Tree
  - insertion
  - search
  - deletion
- N-ary trees
- N-ary traversals
- Tree DP
- Coding problems
- Data-science context

### 13. Graphs
- Introduction
- Types
- Degree
- Connectivity
- Representations
  - adjacency matrix
  - adjacency list
- Traversal
  - DFS
  - BFS
  - multi-source BFS
  - 0-1 BFS
  - traversal choice
- Shortest paths
  - Dijkstra
  - Bellman–Ford
  - Floyd–Warshall
- Advanced
  - DSU / Union-Find
  - Prim MST
  - Kruskal MST
  - Prim vs Kruskal
- State-space graphs
  - Rat in a Maze
  - 8-Puzzle
- DAGs
  - Kahn's algorithm
  - shortest path in DAG
  - longest path in DAG
  - counting paths
- Coding problems
- Data-science context

---

# 3. Important PDF audit: Part 2 is a roadmap, not a completed second course

The final pages of the uploaded PDF introduce a **Part 2 table of contents**, but the uploaded file does not contain full lesson material for those topics.

The Part 2 roadmap lists:

1. Mathematical Foundations
   - Discrete Mathematics
   - Recurrences & Growth Functions
   - Probability & Expected Value
2. Trees
   - BST
   - Tree DP
   - N-ary trees
3. Graphs
   - Graph theory
   - Traversal
   - Shortest paths
   - Topological sorting / DAG
   - DSU
4. Heaps
   - Mathematical foundation
   - Implementation
5. Priority Queues
   - PQ theory
   - Graph/PQ applications
6. Tries
   - Foundations
   - Advanced problems
7. Backtracking
   - Theory
   - Classic problems
   - Advanced problems / optimizations
8. Dynamic Programming
   - Mathematical foundation
   - 1D DP
   - 2D DP
   - String DP
   - DP on trees/graphs
9. Segment Trees & Fenwick Trees
10. Advanced Algorithmic Patterns

That matters because several of the most useful topics — especially **heaps, priority queues, backtracking, and dynamic programming** — should not be postponed indefinitely.

---

# 4. What I would change in the original order

The CampusX structure is useful, but I would not treat it as immutable.

## 4.1 Move hashing earlier

Original placement: after recursion.

Recommended placement:

> Arrays/Strings → Hashing → Prefix Sum / Two Pointers / Sliding Window

Reason: `dict`/`set` thinking is fundamental to a huge fraction of Python interview and data-processing problems.

---

## 4.2 Add heaps and priority queues before advanced graphs

Heaps are only present in the Part 2 roadmap, but they are too important to delay.

They are used for:

- top-K
- kth largest/smallest
- task scheduling
- streaming extrema
- merge-k sequences
- best-first search
- Dijkstra
- beam-search-like candidate management

**Priority: [P0]**

---

## 4.3 Add backtracking immediately after recursion

Recursion makes much more sense when it leads to:

- subsets
- permutations
- combinations
- N-Queens
- maze/search state exploration

**Priority: [P1]**

---

## 4.4 Add dynamic programming before calling the curriculum “advanced”

DP is a standard part of rigorous introductory algorithm courses and is particularly valuable for learning how to:

- define states,
- identify overlapping subproblems,
- derive recurrences,
- reason about optimal substructure,
- trade memory for time.

**Priority: [P0/P1]**

---

## 4.5 Compress linked-list variants

You should deeply understand:

- singly linked list,
- doubly linked list,
- references,
- insertion/deletion,
- reverse,
- middle,
- cycle detection,
- merge.

You do **not** initially need the same depth for:

- circular singly linked list,
- circular doubly linked list,
- every possible insertion/deletion variant.

Those are useful for pointer fluency, but their return on time is lower for DS/ML work.

---

## 4.6 Add a real “Python memory + object model” prerequisite

Before DSA, understand:

- object vs variable name,
- reference,
- identity vs equality,
- mutable vs immutable,
- shallow copy vs deep copy,
- aliasing,
- Python list as a dynamic array of **references**,
- iterator vs materialized collection.

Without this, linked lists, arrays, copying, recursion, and complexity remain partly mechanical.

---

## 4.7 Add NumPy memory behavior explicitly

For data science, “array” cannot stop at a textbook contiguous 1D array.

You should know:

- `ndarray`
- `dtype`
- `shape`
- `ndim`
- `strides`
- row/column traversal
- slicing
- views vs copies
- boolean masking
- vectorization
- broadcasting
- contiguous vs non-contiguous views
- memory cost of temporary arrays

This is one of the highest-value additions for a DS/ML learner.

---

# 5. The recommended learning order

```text
Python object model + basic syntax
        ↓
Complexity + mathematical thinking
        ↓
Arrays / Python lists / NumPy arrays
        ↓
Strings
        ↓
Hash maps / sets
        ↓
Prefix sum / two pointers / sliding window
        ↓
Searching + binary search pattern
        ↓
Sorting + ordering / top-K
        ↓
Stack / queue / deque
        ↓
Linked-list fundamentals
        ↓
Recursion + divide & conquer
        ↓
Backtracking
        ↓
Trees + BST
        ↓
Heap / priority queue
        ↓
Graphs: BFS / DFS / DAG / shortest paths / DSU
        ↓
Greedy
        ↓
Dynamic programming
        ↓
Tries / string algorithms
        ↓
Sparse structures + DS/ML-specific structures
        ↓
Advanced structures / algorithms as needed
```

---

# 6. Stage 0 — Computer and Python foundations [P0]

Do not skip this stage because it looks “too basic.” A small number of precise mental models make later DSA dramatically easier.

## 6.1 Data, value, variable, object

Learn the distinction:

- **data**: information represented by the program
- **value**: e.g. `42`, `"cat"`, `[1, 2]`
- **object**: runtime entity with type, identity, and value/state
- **variable/name**: a name bound to an object

Example:

```python
a = [1, 2, 3]
b = a
```

`a` and `b` refer to the same list object.

Then:

```python
b.append(4)
print(a)
```

produces a changed `a` too, because the underlying object was shared.

### Micro-chunks
- [ ] assignment
- [ ] reference
- [ ] alias
- [ ] object identity
- [ ] `id()`
- [ ] `==` vs `is`
- [ ] mutation
- [ ] rebinding

---

## 6.2 Mutable vs immutable

### Common immutable objects
- `int`
- `float`
- `bool`
- `str`
- `tuple` (the tuple structure itself)
- `frozenset`

### Common mutable objects
- `list`
- `dict`
- `set`
- most user-defined class instances
- NumPy arrays

Be able to answer:

> If two names reference the same object and I modify one, does the other appear to change?

---

## 6.3 Shallow vs deep copy

Learn:

```python
a = [[1, 2], [3, 4]]
b = a.copy()
```

`b` is a new outer list, but the inner lists are still shared.

Then understand:

```python
import copy
c = copy.deepcopy(a)
```

### Why this matters
- graph adjacency structures,
- backtracking state,
- nested feature records,
- NumPy views/copies,
- bugs caused by shared mutable objects.

---

## 6.4 Memory mental model

You do **not** need to become a systems programmer first.

Know this simplified model:

```text
RAM
┌──────────────┐
│ object       │ ← a reference can point here
├──────────────┤
│ object       │
├──────────────┤
│ array data   │
├──────────────┤
│ ...          │
└──────────────┘
```

Understand:

- address/reference concept,
- contiguous block,
- non-contiguous nodes,
- fixed-width element,
- object reference,
- cache locality at a high level.

This is enough to understand why arrays and linked lists behave differently.

---

## 6.5 Python syntax you actually need for DSA

### Control flow
- [ ] `if`
- [ ] `elif`
- [ ] `else`
- [ ] `for`
- [ ] `while`
- [ ] `break`
- [ ] `continue`

### Functions
- [ ] parameters
- [ ] arguments
- [ ] return value
- [ ] local variables
- [ ] default parameters
- [ ] recursion

### Iteration
- [ ] `range`
- [ ] `enumerate`
- [ ] `zip`
- [ ] iterable
- [ ] iterator
- [ ] generator basics

### Core syntax
- [ ] indexing
- [ ] slicing
- [ ] unpacking
- [ ] list comprehension
- [ ] dict/set comprehension
- [ ] tuple unpacking

### Minimal classes
You need enough OOP to write:

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
```

Do not spend weeks on inheritance/design patterns before learning DSA.

---

## 6.6 Standard-library toolkit for Python DSA

Learn these early:

```python
from collections import deque, Counter, defaultdict
import heapq
import bisect
```

### `deque`
Use for:
- queues,
- double-ended queues,
- BFS,
- monotonic queues.

### `Counter`
Use for:
- frequency tables,
- multisets,
- character counts.

### `defaultdict`
Use for:
- adjacency lists,
- grouping,
- counters/lists by key.

### `heapq`
Use for:
- min-heaps,
- priority queues,
- top-K patterns.

### `bisect`
Use for:
- binary-search insertion points,
- lower-bound / upper-bound style logic.

---

## Stage 0 exit criteria

You are ready to move on if you can explain and demonstrate:

- `a = b` does not necessarily copy an object,
- mutation vs rebinding,
- list/dict/set/tuple differences,
- indexing/slicing,
- basic functions/classes,
- how a `deque`, `dict`, `set`, and `heapq` differ conceptually.

---

# 7. Stage 1 — Complexity and algorithmic thinking [P0]

## 7.1 What is an algorithm?

An algorithm is a finite sequence of steps that transforms input into a desired output.

For every algorithm ask:

1. What is the input?
2. What is the output?
3. What is the state?
4. What operation repeats?
5. What invariant remains true?
6. When does it terminate?
7. How does runtime grow with input size?

---

## 7.2 What is `n`?

`n` means the chosen measure of input size.

Examples:

- array length → `n`
- rows and columns → `m`, `n`
- graph → `V` vertices and `E` edges
- string length → `n`
- tree nodes → `n`

Never say “this is O(n)” before saying what `n` represents.

---

## 7.3 Big-O, Big-Theta, Big-Omega

### Big-O: upper-bound style growth
Often used informally to describe asymptotic runtime.

### Big-Theta: tight asymptotic growth
The function grows at the same asymptotic rate.

### Big-Omega: lower-bound style growth

For interview work, you will most often state a tight Big-O-style bound, but understanding the three prevents sloppy reasoning.

---

## 7.4 Common growth rates

Order to memorize:

```text
O(1)
O(log n)
O(n)
O(n log n)
O(n²)
O(n³)
O(2^n)
O(n!)
```

You should be able to recognize each from code.

---

## 7.5 Analyze loops

### Single loop

```python
for x in arr:
    ...
```

`O(n)`

### Nested loops over the same input

```python
for i in range(n):
    for j in range(n):
        ...
```

`O(n²)`

### Halving

```python
while n > 1:
    n //= 2
```

`O(log n)`

### Loop + nested constant amount
A loop inside another loop is **not automatically O(n²)**. Ask how many total iterations happen.

---

## 7.6 Time vs space complexity

Distinguish:

- input storage,
- output storage,
- auxiliary/extra space,
- recursion call stack.

Example:

Recursive factorial uses `O(n)` call-stack space even though it may use very little explicit data.

---

## 7.7 Best, worst, average, amortized

### Worst case
Maximum cost among inputs of size `n`.

### Average case
Expected cost under an assumed input distribution.

### Amortized
Average cost over a *sequence of operations*, even if one operation can occasionally be expensive.

The canonical example is dynamic-array append:

- most appends: constant work,
- occasional resize: copy many elements,
- amortized append: `O(1)`.

---

## 7.8 Recurrences

You need enough recurrence intuition to understand:

```text
T(n) = T(n/2) + O(1)      → O(log n)
T(n) = 2T(n/2) + O(n)     → O(n log n)
T(n) = T(n-1) + O(1)      → O(n)
```

Do not begin with formal Master Theorem proofs. First learn to draw the recursion tree.

---

## 7.9 Complexity checklist

For each solution write:

```text
Input size:
Core operation:
How many times:
Time:
Extra space:
What changes if input is already sorted?
What changes if duplicates exist?
```

---

# 8. Stage 2 — Arrays, Python lists, and NumPy arrays [P0]

This is the most important linear-data-structure module for a data-science learner.

---

## 8.1 What is an array?

A textbook array stores elements in indexed slots so that the address of an element can be computed from its position.

Conceptual model:

```text
index:     0    1    2    3    4
         ┌────┬────┬────┬────┬────┐
value:   │ 10 │ 20 │ 30 │ 40 │ 50 │
         └────┴────┴────┴────┴────┘
```

If fixed-width elements are stored contiguously, random index access is efficient because the location of element `i` can be computed directly.

### Learn these words
- index
- contiguous
- element width / item size
- base address
- random access
- traversal
- locality

---

## 8.2 Static vs dynamic array

### Static/fixed-size idea
Capacity is predetermined.

### Dynamic array
Can grow by allocating a larger block and moving/referencing existing elements.

The resize is expensive occasionally, but repeated append is amortized efficient.

---

## 8.3 What is a Python `list` really?

A Python list behaves conceptually like a **dynamic array of object references**.

That explains why it can contain:

```python
x = [1, "hello", 3.14, {"a": 1}]
```

The elements can have different object types because the list stores references to Python objects.

This is different from a NumPy `ndarray`, where the array has a fixed `dtype`.

---

## 8.4 Essential list operations

```python
a = [10, 20, 30]

a.append(40)
a.extend([50, 60])
a.insert(1, 15)

a[0]
a[-1]
a[1:3]

a.pop()
a.pop(0)

a.remove(20)
del a[1]
```

Know both **what they do** and **what they cost**.

---

## 8.5 Approximate Python-list complexity table

| Operation | Typical complexity |
|---|---:|
| `a[i]` | O(1) |
| assign `a[i] = x` | O(1) |
| `append` | O(1) amortized |
| `pop()` from end | O(1) |
| insert/delete at front | O(n) |
| insert/delete in middle | O(n) |
| membership `x in a` | O(n) |
| search/index | O(n) |
| slice of `k` elements | O(k) |
| copy | O(n) |
| sort | O(n log n) worst-case scale |

---

## 8.6 Array operations to implement manually

Implement without shortcuts:

- [ ] traversal
- [ ] sum
- [ ] min/max
- [ ] linear search
- [ ] reverse
- [ ] insert into a conceptual fixed array
- [ ] delete by index
- [ ] rotate by one
- [ ] rotate by `k`
- [ ] remove duplicates from sorted data
- [ ] merge two sorted arrays
- [ ] partition around a condition

---

## 8.7 Two-dimensional arrays

Conceptual matrix:

```text
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

Learn:

- rows
- columns
- `(r, c)` coordinates
- row-major traversal
- nested-loop complexity
- boundaries
- neighbor movement

Common grid directions:

```python
dirs = [
    (-1, 0),
    (1, 0),
    (0, -1),
    (0, 1),
]
```

This becomes essential in BFS/DFS.

---

## 8.8 NumPy `ndarray` [P0 for DS/ML]

```python
import numpy as np

x = np.array([1, 2, 3], dtype=np.float32)
```

Learn these attributes:

```python
x.shape
x.ndim
x.dtype
x.size
x.itemsize
x.strides
x.nbytes
```

### Core concepts

#### Shape
Dimensions of the logical array.

#### dtype
How each element is represented.

#### Strides
How many bytes to move in memory to advance one index along each dimension.

#### Contiguous vs strided
A sliced/transposed NumPy array can be a view whose logical neighbors are not contiguous in memory.

---

## 8.9 Views vs copies [P0]

This is essential.

```python
x = np.arange(10)
y = x[2:7]     # often a view
y[0] = 999
```

A change may affect `x`.

Contrast with explicit copying:

```python
z = x[2:7].copy()
```

Be able to ask:

> Is this operation allocating new data, or creating another view of the same data?

---

## 8.10 Broadcasting [P0]

Example:

```python
X = np.array([[1, 2, 3],
              [4, 5, 6]])

bias = np.array([10, 20, 30])

X + bias
```

Learn:

- shape compatibility,
- trailing-dimension comparison,
- size-1 dimension expansion,
- why broadcasting avoids many Python loops,
- when broadcasting can accidentally allocate a huge temporary result.

---

## 8.11 Vectorization

Compare:

```python
result = []
for x in arr:
    result.append(x * 2)
```

with:

```python
result = arr * 2
```

Do not interpret “vectorized” as “always free.” Learn to reason about:

- passes over memory,
- temporary arrays,
- memory bandwidth,
- dtype,
- broadcasting size.

---

## 8.12 DS/ML applications of arrays

- feature vectors
- design matrices
- tensors
- labels
- model parameters
- embeddings
- image pixels
- batch data
- confusion matrices
- ranking scores

---

## 8.13 Array mastery problems

### [P0]
- Move Zeroes
- Best Time to Buy and Sell Stock
- Maximum Subarray
- Product of Array Except Self
- Merge Sorted Arrays
- Rotate Array
- Remove Duplicates from Sorted Array

### [P1]
- First Missing Positive
- Rotate Matrix
- Spiral Matrix
- Set Matrix Zeroes

---

# 9. Stage 3 — Strings [P0]

## 9.1 What is a string?

A string is an ordered sequence of Unicode characters from the programmer's perspective.

Important Python property:

> `str` is immutable.

Therefore:

```python
s = "cat"
```

cannot be modified in place like a list.

---

## 9.2 Essential string operations

- indexing
- slicing
- concatenation
- membership
- split
- join
- strip
- replace
- lower/upper/casefold
- startswith/endswith
- find
- count

---

## 9.3 Immutability consequence

Repeated concatenation inside a loop can create unnecessary work.

Instead of:

```python
s = ""
for part in parts:
    s += part
```

prefer accumulation + join when appropriate:

```python
pieces = []
for part in parts:
    pieces.append(part)

s = "".join(pieces)
```

---

## 9.4 Character-frequency pattern

```python
from collections import Counter

freq = Counter(s)
```

Learn to implement it manually with a dictionary too.

Applications:

- anagrams
- duplicates
- token counts
- bag-of-words intuition
- categorical frequency statistics

---

## 9.5 String patterns

### [P0]
- frequency map
- two pointers
- palindrome checking
- sliding window
- substring state
- hash set/map of seen characters

### [P1]
- rolling hash
- prefix-function / KMP concept
- trie

### [P2]
- Z algorithm
- Aho–Corasick
- suffix array/tree/automaton

---

## 9.6 Problems

- Valid Palindrome
- Valid Anagram
- Group Anagrams
- Longest Common Prefix
- Longest Substring Without Repeating Characters
- Find All Anagrams in a String
- Longest Palindromic Substring [P1]

---

# 10. Stage 4 — Hashing, dictionaries, and sets [P0]

Move this earlier than the original PDF order.

---

## 10.1 What is hashing?

A hash function converts a key into a hash value used by a hash table to locate a bucket/slot efficiently.

Conceptual flow:

```text
key
 ↓
hash function
 ↓
hash value
 ↓
table location
```

Different keys can sometimes map to the same location. That is a **collision**.

---

## 10.2 Abstract operations

A map/dictionary supports:

- insert/update `(key → value)`
- lookup by key
- delete key
- membership

A set supports:

- add item
- remove item
- membership
- set operations

---

## 10.3 Python tools

```python
d = {}
s = set()
```

Know:

```python
d.get(key)
d.setdefault(key, default)
key in d

s.add(x)
s.remove(x)
s.discard(x)
```

---

## 10.4 Hashability

Dictionary/set keys must be hashable.

Usually:

- `int`: hashable
- `str`: hashable
- `tuple` of hashable values: hashable
- `list`: not hashable
- `dict`: not hashable
- `set`: not hashable
- `frozenset`: hashable

Understand the relationship between:

- stable hash
- equality
- immutability of key identity/state

---

## 10.5 Average vs worst case

Hash-table lookup is commonly treated as average-case **O(1)**.

Do not conclude that hashing is mathematically guaranteed constant time in every imaginable situation.

---

## 10.6 Core patterns

### Frequency table
```python
freq[x] = freq.get(x, 0) + 1
```

### Seen set
```python
if x in seen:
    ...
seen.add(x)
```

### Index map
```python
position[value] = i
```

### Group by key
```python
from collections import defaultdict
groups = defaultdict(list)
```

---

## 10.7 DS/ML applications

- label → integer mapping
- category frequency
- deduplication
- joins/grouping intuition
- feature dictionaries
- caching
- memoization
- sparse-feature indexing
- vocabulary lookup
- data-quality duplicate checks

---

## 10.8 Problems

### [P0]
- Two Sum
- Contains Duplicate
- Valid Anagram
- Group Anagrams
- Intersection of Two Arrays
- Longest Consecutive Sequence
- Subarray Sum Equals K

### [P1]
- Top K Frequent Elements
- LRU Cache
- Happy Number / cycle with set

---

# 11. Stage 5 — Prefix sums, two pointers, and sliding windows [P0]

These patterns deliver unusually high value per hour.

---

## 11.1 Prefix sum

Given:

```text
a = [3, 1, 4, 2]
```

Construct:

```text
prefix[0] = 0
prefix[i+1] = prefix[i] + a[i]
```

Then range sum `[l, r)` becomes:

```text
prefix[r] - prefix[l]
```

### Learn
- 1D prefix sum
- inclusive vs exclusive conventions
- 2D prefix sum [P1]
- prefix count/frequency
- prefix XOR [P1]

---

## 11.2 Prefix + hash map

One of the most important combined patterns.

Example idea:

> Number of subarrays with sum `k`.

If current prefix is `p`, you want an earlier prefix of `p-k`.

This transforms an O(n²) subarray search into O(n) average time.

---

## 11.3 Two pointers

Common forms:

### Opposite directions
```text
left →       ← right
```

Use for:

- sorted pair sum
- palindrome
- container/water-style problems

### Same direction
```text
slow → fast →
```

Use for:

- compaction
- duplicate removal
- partitioning

---

## 11.4 Sliding window

Use when the problem asks about a **contiguous** range and the state can be updated incrementally.

### Fixed-size
Example:

> Maximum sum of any window of size `k`.

### Variable-size
Example:

> Longest substring with at most / exactly / no repeated characters.

---

## 11.5 Window-state checklist

For each problem ask:

1. What does the window represent?
2. What data enters when `right` moves?
3. What data leaves when `left` moves?
4. What condition makes the window invalid?
5. When do I record the answer?

---

## 11.6 Problems

- Maximum Average Subarray
- Longest Substring Without Repeating Characters
- Minimum Size Subarray Sum
- Find All Anagrams in a String
- Container With Most Water
- Three Sum
- Remove Duplicates from Sorted Array
- Subarray Sum Equals K

---

# 12. Stage 6 — Searching and the binary-search pattern [P0]

## 12.1 Linear search

Search sequentially.

Time:
- best: O(1)
- worst: O(n)

Still appropriate when:

- data is unsorted,
- input is tiny,
- only one scan is needed.

---

## 12.2 Binary search

Requires an ordered/monotonic search space.

Basic invariant:

```text
The answer, if present, remains inside [lo, hi].
```

Typical iterative structure:

```python
def binary_search(a, target):
    lo, hi = 0, len(a) - 1

    while lo <= hi:
        mid = lo + (hi - lo) // 2

        if a[mid] == target:
            return mid
        elif a[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1

    return -1
```

---

## 12.3 Learn boundaries, not just “find target”

You need these variants:

- first occurrence
- last occurrence
- first value `>= x` (lower bound)
- first value `> x` (upper bound)
- insertion point
- count occurrences

Python:

```python
import bisect

bisect.bisect_left(a, x)
bisect.bisect_right(a, x)
```

---

## 12.4 Binary search on answer [P0]

A much more powerful idea:

You are not necessarily searching an array. You are searching an ordered space of candidate answers.

Pattern:

```python
def feasible(x):
    ...

lo, hi = ...
while lo < hi:
    mid = ...
    if feasible(mid):
        hi = mid
    else:
        lo = mid + 1
```

Use when feasibility is monotonic:

```text
False False False True True True
```

or the reverse.

---

## 12.5 Problems

- Binary Search
- Search Insert Position
- Find First and Last Position
- Search in Rotated Sorted Array
- Find Minimum in Rotated Sorted Array
- Koko Eating Bananas
- Capacity to Ship Packages Within D Days
- Median of Two Sorted Arrays [P2]

---

# 13. Stage 7 — Sorting and ordering [P0/P1]

Do not spend equal time implementing every elementary sort.

---

## 13.1 What sorting gives you

Sorting often turns a hard problem into:

- adjacent comparison
- two pointers
- binary search
- greedy choice
- interval merging
- duplicate grouping

That is more important than memorizing Bubble Sort code.

---

## 13.2 Stability

A stable sort preserves relative order among items that compare equal on the chosen key.

This matters in multi-stage sorting and data processing.

Example:

```python
records = [
    ("A", 3),
    ("B", 3),
]
```

---

## 13.3 In-place vs out-of-place

Ask:

- does the algorithm mutate the input?
- how much auxiliary memory does it use?

---

## 13.4 Elementary sorts

### Bubble Sort [P2]
Learn:
- swapping adjacent inversions
- O(n²)
- why it is usually not used for large general sorting

### Selection Sort [P2]
Learn:
- repeatedly choose minimum
- O(n²)
- low number of swaps

### Insertion Sort [P1]
Learn:
- grow a sorted prefix
- useful intuition for nearly sorted/small data
- O(n²) worst case

You should implement each once. Do not over-practice them.

---

## 13.5 Merge Sort [P0]

Understand deeply:

1. divide array in half,
2. sort each half,
3. merge two sorted halves.

Core ideas:
- divide and conquer
- stable
- O(n log n)
- O(n) auxiliary merge storage in standard implementation

Implement the merge operation yourself.

---

## 13.6 Quick Sort [P0/P1]

Understand:

- pivot
- partition
- recursive subproblems
- average O(n log n)
- bad pivot choices can lead to O(n²)
- in-place partition variants

More important than memorizing one exact partition scheme is understanding the partition invariant.

---

## 13.7 Counting / radix-style sorting [P1]

Know when comparison sorting is not required.

Counting sort can be powerful when:

- keys are integers,
- key range is reasonably bounded.

Do not use it blindly when the key domain is huge.

---

## 13.8 Python sorting [P0]

Use:

```python
sorted(data)
data.sort()
```

Learn:

```python
sorted(records, key=lambda x: x[1])
```

and multi-field keys:

```python
sorted(records, key=lambda x: (x[0], -x[1]))
```

For production Python work, using the built-in sort correctly is usually more important than manually coding Bubble Sort.

---

## 13.9 Partial sorting / top-K [P0]

Do not fully sort `n` values if you only need a tiny `k`.

Learn:

```python
min(...)
max(...)
heapq.nsmallest(k, data)
heapq.nlargest(k, data)
```

This leads naturally to heaps.

---

# 14. Stage 8 — Stack, queue, and deque [P0]

## 14.1 Stack

Principle:

```text
LIFO — Last In, First Out
```

Operations:

- push
- pop
- peek/top
- empty check

Python:

```python
stack = []
stack.append(x)
x = stack.pop()
```

---

## 14.2 Stack applications

- matching brackets
- undo/redo
- expression parsing
- DFS
- call stack
- monotonic stack
- backtracking state

---

## 14.3 Queue

Principle:

```text
FIFO — First In, First Out
```

Use:

```python
from collections import deque

q = deque()
q.append(x)
x = q.popleft()
```

Avoid repeatedly doing:

```python
list.pop(0)
```

on large lists, because shifting elements is costly.

---

## 14.4 Deque

Supports efficient operations at both ends.

```python
q.append(x)
q.appendleft(x)
q.pop()
q.popleft()
```

Applications:

- BFS
- sliding-window extrema
- task buffers
- producer/consumer-style thinking

---

## 14.5 Monotonic stack [P1]

Maintain elements in increasing or decreasing order.

Typical use cases:

- next greater element
- previous smaller element
- daily temperatures
- histogram rectangle

---

## 14.6 Monotonic deque [P1]

Maintain only useful candidates for a moving window.

Classic problem:

> Sliding Window Maximum

---

# 15. Stage 9 — Linked lists [P1]

Linked lists are important for pointer/reference reasoning but deserve less total study time than arrays/hashing for DS/ML.

---

## 15.1 Node

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
```

Mental model:

```text
head
 ↓
[data|next] → [data|next] → [data|None]
```

---

## 15.2 Singly linked list [P1]

Master:

- traversal
- length
- search
- prepend
- append
- insert after a node
- delete after a node
- reverse

Complexity depends on what pointer/reference is already known.

Important distinction:

> “Insertion is O(1)” is only true when you already have the relevant node/location. Finding that location can cost O(n).

---

## 15.3 Doubly linked list [P1]

Node:

```text
[prev | data | next]
```

Benefits:
- bidirectional movement
- easier local removal when node reference is known

Cost:
- extra reference
- more pointer updates
- more invariants to maintain

---

## 15.4 Fast and slow pointers [P0 pattern]

This pattern is more important than circular-list implementation details.

Use for:

- middle of list
- cycle detection
- cycle entry [P1]
- kth-from-end style reasoning

Floyd cycle detection:

```text
slow moves 1 step
fast moves 2 steps
```

---

## 15.5 Circular variants [P2]

Learn the concept and implement one small example.

Do not spend large amounts of time duplicating every insertion/deletion case unless:

- your course assessment requires it,
- you are deliberately practicing pointer invariants,
- or your domain uses ring buffers/circular structures.

---

## 15.6 Problems

- Reverse Linked List
- Merge Two Sorted Lists
- Linked List Cycle
- Middle of the Linked List
- Remove Nth Node From End
- Reorder List [P1]
- Copy List With Random Pointer [P1]
- LRU Cache [P1]

---

# 16. Stage 10 — Recursion and divide & conquer [P0]

## 16.1 Recursion contract

Every recursive function needs:

1. a base case,
2. progress toward the base case,
3. a recursive relation,
4. a way to combine or return answers.

---

## 16.2 Trace the call stack

For factorial:

```python
factorial(4)
  factorial(3)
    factorial(2)
      factorial(1)
```

Then returns unwind in reverse order.

Learn:

- call frame
- parameters
- local variables
- return address/result
- recursion depth

---

## 16.3 Tree of recursive calls

For naive Fibonacci:

```text
fib(5)
├── fib(4)
│   ├── fib(3)
│   └── fib(2)
└── fib(3)
    ├── ...
```

Notice repeated subproblems.

This is the bridge to **dynamic programming**.

---

## 16.4 Divide and conquer

General pattern:

```text
divide
solve subproblems
combine
```

Examples:

- merge sort
- quick sort
- binary search

---

## 16.5 Recursive complexity

Practice deriving:

- recursion depth
- number of calls
- work per call
- total space

---

## 16.6 Python-specific recursion caution

Python has a recursion limit that is implementation/configuration dependent.

Do not assume deep recursive DFS is always safe for very large inputs. Learn iterative stack-based versions too.

---

# 17. Stage 11 — Backtracking [P1]

Backtracking is structured search over a decision tree.

Pattern:

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

The **undo** step is crucial.

---

## 17.1 State-space vocabulary

- state
- choice
- constraint
- candidate
- goal/base case
- pruning
- branching factor
- search tree

---

## 17.2 Learn in this order

1. binary include/exclude
2. subsets
3. permutations
4. combinations
5. combination sum
6. grid/maze paths
7. N-Queens
8. Sudoku [P2]

---

## 17.3 Common bugs

- forgetting to undo mutation,
- appending the same mutable list object,
- incorrect base case,
- duplicate generation,
- insufficient pruning.

Often:

```python
answers.append(path.copy())
```

is necessary rather than:

```python
answers.append(path)
```

---

# 18. Stage 12 — Trees and BSTs [P0/P1]

## 18.1 Tree vocabulary [P0]

Know precisely:

- node
- edge
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
- level
- path

---

## 18.2 Binary tree

Each node has at most two children.

```python
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

---

## 18.3 DFS traversals [P0]

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

Do each:

- recursively,
- iteratively with an explicit stack.

---

## 18.4 Level-order traversal [P0]

Use BFS + queue.

```text
level 0
level 1
level 2
...
```

Implement:

- flat level order
- list of nodes per level

---

## 18.5 How to choose a traversal

### Preorder
Useful when parent context must be processed before children.

### Postorder
Useful when parent answer depends on child answers.

### Inorder
Important for BST sorted order.

### Level order
Useful for distance/level/nearest-style questions.

---

## 18.6 Binary Search Tree [P1]

Invariant:

```text
left subtree < node < right subtree
```

(for the chosen duplicate convention)

Learn:

- search
- insert
- min/max
- successor/predecessor concept
- delete:
  - leaf
  - one child
  - two children

Understand why a badly skewed BST can degrade to O(n).

---

## 18.7 Balanced trees [P2]

You should know *why* balanced BSTs exist.

Conceptually understand:

- AVL
- Red–Black Tree
- O(log n) height target

You do not need to implement Red–Black Trees early.

---

## 18.8 Tree problem patterns [P0/P1]

- recursive return from children
- global answer + subtree value
- path accumulation
- depth/height
- lowest common ancestor
- serialization
- subtree matching
- diameter
- balanced-check
- root-to-leaf paths

---

## 18.9 N-ary trees [P1]

Each node can have multiple children:

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.children = []
```

Applications:
- file systems
- organization hierarchy
- DOM/XML
- tries

---

## 18.10 Tree DP [P1/P2]

The key question:

> Can the answer for a node be computed from answers for its children?

Postorder is often the natural traversal.

Examples:
- subtree size
- subtree sum
- diameter
- independent choices on subtrees

---

# 19. Stage 13 — Heaps and priority queues [P0]

This is a major addition to Part 1.

---

## 19.1 Heap idea

A binary heap is typically represented inside an array/list.

For a zero-indexed node `i`:

```text
left  = 2*i + 1
right = 2*i + 2
parent = (i - 1) // 2
```

Min-heap invariant:

```text
parent <= children
```

This does **not** mean the entire array is sorted.

---

## 19.2 Core operations

- peek minimum: O(1)
- push: O(log n)
- pop minimum: O(log n)
- heapify `n` values: O(n)

Learn why bubbling up/down takes O(log n): heap height is logarithmic.

---

## 19.3 Python `heapq`

```python
import heapq

heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 2)
heapq.heappush(heap, 8)

smallest = heapq.heappop(heap)
```

Learn:

- `heapify`
- `heappush`
- `heappop`
- `heappushpop`
- `heapreplace`
- `nsmallest`
- `nlargest`

---

## 19.4 Top-K pattern [P0]

If you want the largest `k` of `n` streaming values:

Maintain a min-heap of size `k`.

Complexity roughly:

```text
O(n log k)
```

instead of sorting all values:

```text
O(n log n)
```

when `k << n`.

---

## 19.5 Priority queue applications

- task scheduling
- Dijkstra
- top-K recommendations
- merging sorted streams
- event simulation
- beam-style candidate selection
- online/streaming statistics

---

## 19.6 Problems

- Kth Largest Element
- Top K Frequent Elements
- K Closest Points to Origin
- Merge K Sorted Lists
- Find Median from Data Stream [P1]
- Task Scheduler [P1]

---

# 20. Stage 14 — Graphs [P0/P1]

Graphs are one of the most transferable abstractions in CS and ML.

---

## 20.1 Graph vocabulary [P0]

Graph:

```text
G = (V, E)
```

Know:

- vertex/node
- edge
- directed / undirected
- weighted / unweighted
- degree
- indegree / outdegree
- path
- cycle
- connected component
- DAG
- sparse / dense graph

---

## 20.2 Representations [P0]

### Edge list

```python
edges = [
    (u, v),
    (v, w),
]
```

Good for algorithms that process all edges.

### Adjacency list

```python
graph = {
    0: [1, 2],
    1: [0, 3],
}
```

Often preferred for sparse graphs.

### Adjacency matrix

```text
       0 1 2
    0  0 1 0
    1  1 0 1
    2  0 1 0
```

Can be useful for dense graphs and matrix-oriented operations.

---

## 20.3 DFS [P0]

Explore deeply before backtracking.

Implement:

- recursive DFS
- iterative DFS using stack
- visited set/array

Applications:
- components
- cycle detection
- path exploration
- topological reasoning
- tree traversal

Typical adjacency-list complexity:

```text
O(V + E)
```

---

## 20.4 BFS [P0]

Explore level by level using a queue.

Applications:
- minimum number of edges in an unweighted graph
- nearest-state search
- grid shortest path
- levels/distances
- components

---

## 20.5 Grid as graph [P0]

A matrix problem often *is* a graph problem.

Each cell = node.  
Valid move = edge.

Master:

- boundary checks
- visited set/matrix
- four directions
- eight directions when specified
- BFS distance
- DFS flood fill

---

## 20.6 Multi-source BFS [P1]

Start BFS from multiple initial sources at once.

Useful for:

- nearest facility/source,
- spread/propagation,
- distance to closest zero/source,
- simultaneous infection/fire-style problems.

---

## 20.7 0-1 BFS [P2]

When edge weights are only 0 or 1, use a deque:

- weight 0 → push left
- weight 1 → push right

This can beat general Dijkstra for this restricted case.

---

## 20.8 DAG and topological sort [P0/P1]

A DAG represents dependencies.

Applications:

- job scheduling
- data pipelines
- package dependencies
- computation graphs
- feature pipelines
- build systems

Learn:

### Kahn's algorithm
Uses indegree + queue.

### DFS topological order
Uses postorder logic.

Also learn:
- cycle detection,
- shortest/longest path in DAG [P1].

---

## 20.9 Dijkstra [P1]

Use for non-negative weighted shortest paths.

Core data structure:

> min-priority queue / heap

Understand:

- distance array/map
- relaxation
- stale heap entries
- why negative edges break the usual guarantee

---

## 20.10 Bellman–Ford [P2]

Learn when:

- negative edge weights may exist,
- negative-cycle detection matters.

Core idea:

> relax every edge repeatedly.

---

## 20.11 Floyd–Warshall [P2]

All-pairs shortest path.

Core recurrence:

```text
dist[i][j] =
min(
    dist[i][j],
    dist[i][k] + dist[k][j]
)
```

Time:

```text
O(V³)
```

Useful mainly for smaller/dense graphs or conceptual DP over intermediate vertices.

---

## 20.12 Disjoint Set Union / Union-Find [P1]

Operations:

- `find(x)`
- `union(a, b)`

Optimizations:

- path compression
- union by rank/size

Applications:

- dynamic connectivity
- connected components
- cycle detection
- Kruskal MST
- clustering-like grouping intuition

Near-constant amortized behavior in practice with both optimizations.

---

## 20.13 Minimum Spanning Tree [P2]

### Kruskal
- sort edges
- add cheapest non-cycle edge
- DSU

### Prim
- grow tree from a vertex
- priority queue

Learn enough to choose based on graph representation/density and available data.

---

## 20.14 Graph problems

### [P0]
- Number of Islands
- Flood Fill
- Clone Graph
- Rotting Oranges
- Course Schedule
- Course Schedule II
- Is Graph Bipartite?
- Shortest Path in Binary Matrix

### [P1]
- Network Delay Time
- Redundant Connection
- Accounts Merge
- Evaluate Division
- Word Ladder

### [P2]
- Cheapest Flights Within K Stops
- MST / connecting points
- 0-1 BFS problems
- strongly connected components

---

# 21. Stage 15 — Greedy algorithms [P1]

A greedy algorithm makes a locally attractive choice and does not revisit it.

The hard part is not coding; it is proving the choice is safe.

---

## 21.1 Greedy checklist

Ask:

1. Can the problem be ordered?
2. Is there an exchange argument?
3. Can an optimal solution be transformed to include my greedy choice?
4. Does making this choice destroy a future better solution?
5. Is there optimal substructure?

---

## 21.2 Important greedy patterns

- interval scheduling
- merge intervals
- choosing earliest finish time
- minimum/maximum local choice
- sorting then scanning
- two-pointer greedy
- heap-assisted scheduling

---

## 21.3 Problems

- Merge Intervals
- Non-overlapping Intervals
- Jump Game
- Gas Station [P1]
- Task Scheduler [heap/greedy]
- Minimum Number of Arrows to Burst Balloons

---

# 22. Stage 16 — Dynamic Programming [P0/P1]

Dynamic programming should be added to the practical core.

---

## 22.1 When DP is plausible

Look for:

- overlapping subproblems,
- optimal substructure,
- repeated states,
- choices + best/count/possibility result.

---

## 22.2 Five-step DP method

For every DP problem write:

1. **State** — what does `dp[...]` mean?
2. **Transition** — how is this state computed?
3. **Base case**
4. **Evaluation order**
5. **Answer location**

Do not code before writing the state meaning.

---

## 22.3 Memoization vs tabulation

### Top-down memoization
Recursive + cache.

```python
from functools import cache

@cache
def f(state):
    ...
```

### Bottom-up tabulation
Compute states in dependency order.

Understand both.

---

## 22.4 1D DP [P0]

Learn:

- Fibonacci
- Climbing Stairs
- House Robber
- Coin Change
- minimum cost
- number of ways

---

## 22.5 2D DP [P1]

Learn:

- grid paths
- 0/1 knapsack
- edit-style states
- matrix/state transition

---

## 22.6 String DP [P1]

Learn:

- Longest Common Subsequence
- Edit Distance
- Longest Palindromic Subsequence

---

## 22.7 Sequence DP [P1]

- Longest Increasing Subsequence
- maximum subarray relation
- partition-style problems

---

## 22.8 Space optimization [P1]

If row `i` depends only on row `i-1`, perhaps the full table is unnecessary.

Ask:

> Which past states are actually needed?

This often reduces O(nm) space to O(m).

---

## 22.9 Tree/DAG DP [P2]

Once tree traversals/DAG order are familiar:

- subtree DP,
- path counts,
- longest path in DAG,
- multiple states per tree node.

---

# 23. Stage 17 — Tries and string-search structures [P1/P2]

## 23.1 Trie

A tree whose edges/children correspond to symbols.

Use for:

- prefix lookup
- autocomplete
- dictionaries
- vocabulary
- prefix counting

Core operations:

- insert
- search
- starts-with

---

## 23.2 KMP / prefix function [P2]

Learn after ordinary string patterns are comfortable.

Goal:

> Search a pattern without restarting comparisons from scratch.

Understand the prefix-function idea before memorizing code.

---

## 23.3 Rolling hash / Rabin–Karp [P2]

Useful for substring hashing and pattern matching.

Learn:

- hash window update
- collision possibility
- why equality may require verification

---

# 24. Stage 18 — Data-science / ML-specific DSA extensions

This is the part I would add specifically for someone studying DSA for DS/ML rather than only competitive programming.

---

## 24.1 NumPy memory model [P0]

You should be able to inspect:

```python
X.shape
X.dtype
X.strides
X.flags
X.nbytes
```

Understand why:

```python
X.T
```

may be a view and not a physically transposed copied block.

Learn what contiguous means in practice.

---

## 24.2 Vectorization and memory complexity [P0]

Example danger:

```python
dist = X[:, None, :] - Y[None, :, :]
```

This looks elegant but can create an enormous intermediate array.

Always reason about output shape and memory:

```text
number of elements × bytes per element
```

---

## 24.3 Sparse matrices [P0/P1]

Many ML datasets contain mostly zeros.

Learn the difference between:

- dense matrix
- COO
- CSR
- CSC

### CSR intuition
Good for row-oriented operations.

### CSC intuition
Good for column-oriented operations.

### COO intuition
Simple triplets:

```text
(row, col, value)
```

Useful while constructing sparse data.

Applications:

- bag-of-words
- TF-IDF
- recommender interactions
- graph adjacency
- one-hot/high-dimensional features

---

## 24.4 Top-K and ranking [P0]

Common DS/ML tasks:

- top predicted classes,
- highest-scoring recommendations,
- nearest candidates,
- feature importance ranking.

Know when to use:

- full sort,
- heap top-K,
- NumPy partition/argpartition concepts [P1].

---

## 24.5 Nearest-neighbor search [P1]

Understand conceptual choices:

- brute-force scan
- KD-tree
- Ball Tree
- approximate nearest-neighbor systems [P2]

Focus first on why an index can reduce search work and why high dimensionality changes the trade-offs.

---

## 24.6 Graphs in ML [P1]

Applications:

- recommendation graphs
- knowledge graphs
- social networks
- fraud networks
- dependency graphs
- kNN graphs
- GNN inputs

Be comfortable converting domain entities into:

```text
node
edge
weight
direction
features
```

---

## 24.7 Streaming / online algorithms [P1/P2]

Learn the mindset:

> What if the data does not fit in memory?

Topics:

### [P1]
- running mean/variance concept
- streaming min/max
- top-K heap
- fixed-size deque/window
- reservoir sampling

### [P2]
- Bloom filter
- Count-Min Sketch
- HyperLogLog concept

These are often more practically useful for data systems than segment trees.

---

## 24.8 Reservoir sampling [P1]

Goal:

> Keep a uniform sample of `k` items from a stream of unknown/huge length.

This teaches probabilistic algorithmic thinking and bounded-memory processing.

---

## 24.9 Bloom filter [P2]

Probabilistic membership structure.

Key idea:

- false positives possible,
- false negatives not expected under normal use,
- extremely memory efficient.

Useful for:
- pre-filtering,
- cache/data-system membership checks.

---

## 24.10 Count-Min Sketch [P2]

Approximate frequencies with limited memory.

Useful for:
- streaming frequency estimation,
- heavy hitters,
- telemetry.

---

# 25. Topics that should receive less time initially

These are not useless; they are simply lower ROI for your stated goal.

| Topic | Priority | Initial treatment |
|---|---|---|
| Circular singly linked list full CRUD | P2 | Understand + one implementation |
| Circular doubly linked list full CRUD | P3 | Concept first |
| Bubble Sort repeated practice | P2 | Implement once |
| Selection Sort repeated practice | P2 | Implement once |
| Exponential Search | P2 | Learn concept after binary search |
| Floyd–Warshall | P2 | Learn after Dijkstra/BFS/DAG |
| Prim + Kruskal both deeply | P2 | Understand both; deep dive when needed |
| Segment Tree | P3 | Competitive/range-query specialization |
| Fenwick Tree | P3 | Useful but not early DS/ML core |
| Suffix Tree / Automaton | P3 | Advanced string algorithms |
| Network flow/matching | P3 | Specialized |
| Advanced geometry | P3 | Specialized |

---

# 26. 80/20 core: if you had only 60 hours

If work pressure is high, do this first.

| Hours | Topic |
|---:|---|
| 4 | Python object/reference/mutability essentials |
| 5 | Complexity + asymptotic reasoning |
| 7 | Arrays/lists + NumPy fundamentals |
| 4 | Strings |
| 5 | Hash map/set |
| 7 | Prefix sum + two pointers + sliding window |
| 5 | Binary search |
| 4 | Sorting concepts + Python sort |
| 4 | Stack/queue/deque |
| 3 | Linked-list essentials |
| 4 | Recursion |
| 4 | Trees / traversal |
| 4 | Heaps / priority queues |

That is the **first pass**. It is not the end.

Then add graphs, DP, greedy, backtracking, sparse structures.

---

# 27. Strong-core target: about 120 hours

A stronger target includes:

- all 60-hour topics,
- graph BFS/DFS/DAG,
- Dijkstra,
- DSU,
- backtracking,
- greedy,
- 1D/2D DP,
- trie basics,
- sparse matrix representations,
- top-K/streaming algorithms,
- more problem-solving repetition.

At ~5 hours/week this is roughly six months.  
At ~8 hours/week it is roughly 15 weeks.

Do not optimize for finishing fastest. Optimize for retaining the patterns.

---

# 28. A work-friendly 24-week plan

Assume around **4–5 hours/week**.

| Week | Focus |
|---:|---|
| 1 | Python object model, references, mutability |
| 2 | Complexity, loop analysis, amortized thinking |
| 3 | Arrays + Python lists |
| 4 | NumPy arrays, dtype, shape, views, copies |
| 5 | Strings + hashing |
| 6 | Prefix sums |
| 7 | Two pointers + sliding windows |
| 8 | Binary search + search-on-answer |
| 9 | Sorting + Python sorting + top-K concept |
| 10 | Stack + queue + deque |
| 11 | Linked-list essentials + fast/slow pointer |
| 12 | Recursion + divide & conquer |
| 13 | Backtracking |
| 14 | Binary trees + traversals |
| 15 | BST + tree patterns |
| 16 | Heap + priority queue |
| 17 | Graph representation + DFS |
| 18 | BFS + grid graphs + multi-source BFS |
| 19 | DAG + topological sort |
| 20 | Dijkstra + DSU |
| 21 | Greedy |
| 22 | DP 1D |
| 23 | DP 2D/string + space optimization |
| 24 | Sparse data + review + mixed problems |

After week 24:

- advanced graph algorithms,
- tries/string algorithms,
- MST,
- probabilistic/streaming structures,
- segment/Fenwick only if needed.

---

# 29. A micro-session system for a busy schedule

## 35-minute session

```text
5 min   recall yesterday without notes
10 min  learn one micro-concept
10 min  implement/trace it
10 min  solve one small problem
```

## 60-minute session

```text
5 min   recall
15 min  concept
15 min  implementation
20 min  one problem
5 min   write mistakes/invariant/complexity
```

## Weekly pattern

```text
Mon: concept
Tue: implementation
Thu: problem
Sat/Sun: 60–90 minute mixed review
```

You do not need three-hour blocks to progress.

---

# 30. How small should a learning chunk be?

Bad chunk:

> “Learn graphs.”

Good chunks:

1. What is a node?
2. What is an edge?
3. Directed vs undirected.
4. Weighted vs unweighted.
5. Degree / indegree / outdegree.
6. Edge list.
7. Adjacency list.
8. Adjacency matrix.
9. Build adjacency list from edge list.
10. Iterate neighbors.
11. What is “visited”?
12. Recursive DFS on one component.
13. Iterative DFS.
14. DFS over disconnected graph.
15. BFS queue.
16. BFS distance.
17. Grid as graph.
18. Topological sort.
19. Dijkstra.
20. DSU.

That is the granularity to aim for.

---

# 31. Problem-solving template

Before coding, fill this in:

```text
1. What is the input?
2. What exactly is the output?
3. What is n?
4. What is the brute-force method?
5. Its time/space complexity?
6. What property can I exploit?
   - sorted?
   - contiguous?
   - duplicates?
   - monotonic?
   - repeated states?
   - graph/tree?
   - frequency?
7. Which known pattern matches?
8. What invariant will my loop/structure maintain?
9. Edge cases?
10. Complexity of final solution?
```

---

# 32. Pattern-recognition cheat sheet

| Signal in problem | Consider |
|---|---|
| contiguous subarray/substring | sliding window / prefix sum |
| pair in sorted data | two pointers / binary search |
| frequency/duplicates | hash map / set / Counter |
| repeated min/max | heap |
| top K | heap / partial selection |
| matching brackets / undo / previous greater | stack |
| process oldest first | queue |
| shortest unweighted path | BFS |
| dependency ordering | DAG / topological sort |
| reachability/components | DFS/BFS/DSU |
| nonnegative weighted shortest path | Dijkstra |
| negative edges | Bellman–Ford |
| parent answer uses child answers | postorder/tree DP |
| all combinations/choices | backtracking |
| overlapping optimization subproblems | DP |
| monotonic candidate answer | binary search on answer |
| prefix lookup | trie |
| mostly-zero matrix | sparse structure |
| huge stream, bounded memory | streaming algorithm / sketch |

---

# 33. Practice ladder

For every pattern:

### Level A — Trace
Given code, predict output and state after each step.

### Level B — Reproduce
Implement the canonical operation without notes.

### Level C — Small direct problem
Use the structure when the problem almost tells you which one.

### Level D — Recognition
The problem does not name the data structure.

### Level E — Combination
Example:
- prefix sum + hash map,
- BFS + bitmask/state,
- heap + greedy,
- binary search + feasibility,
- tree + DP.

Do not jump immediately from Level A to hard LeetCode problems.

---

# 34. Curated problem set by topic

This is intentionally smaller than a giant 500-problem sheet.

## Arrays / hashing
- Two Sum
- Contains Duplicate
- Product of Array Except Self
- Maximum Subarray
- Longest Consecutive Sequence
- Subarray Sum Equals K

## Strings
- Valid Anagram
- Valid Palindrome
- Group Anagrams
- Longest Substring Without Repeating Characters
- Find All Anagrams in a String

## Two pointers / windows
- Move Zeroes
- Container With Most Water
- Three Sum
- Minimum Size Subarray Sum
- Sliding Window Maximum

## Binary search
- Binary Search
- Search Insert Position
- Find First and Last Position
- Search in Rotated Sorted Array
- Koko Eating Bananas

## Stack
- Valid Parentheses
- Min Stack
- Daily Temperatures
- Next Greater Element
- Largest Rectangle in Histogram [P1]

## Linked list
- Reverse Linked List
- Merge Two Sorted Lists
- Linked List Cycle
- Middle of Linked List
- Remove Nth From End

## Trees
- Maximum Depth of Binary Tree
- Binary Tree Level Order Traversal
- Validate BST
- Diameter of Binary Tree
- Lowest Common Ancestor
- Serialize/Deserialize Binary Tree [P1]

## Heap
- Kth Largest Element
- Top K Frequent Elements
- K Closest Points
- Merge K Sorted Lists
- Find Median from Data Stream [P1]

## Graph
- Number of Islands
- Flood Fill
- Clone Graph
- Rotting Oranges
- Course Schedule
- Course Schedule II
- Is Graph Bipartite?
- Network Delay Time [P1]
- Redundant Connection [P1]

## Backtracking
- Subsets
- Permutations
- Combination Sum
- Letter Combinations
- N-Queens

## Greedy
- Merge Intervals
- Non-overlapping Intervals
- Jump Game
- Gas Station

## DP
- Climbing Stairs
- House Robber
- Coin Change
- Unique Paths
- Longest Increasing Subsequence
- Longest Common Subsequence
- Edit Distance [P1]
- 0/1 Knapsack variant

---

# 35. How to use AI while learning DSA without losing the skill

AI can save time, but only if you protect the part of the exercise that trains your brain.

Recommended sequence:

1. Read the problem.
2. Spend 10–20 minutes defining input/output and brute force.
3. Write the likely pattern.
4. Try an implementation.
5. If stuck, ask for **one hint**, not a complete solution.
6. After solving, ask AI to:
   - critique complexity,
   - show edge cases,
   - compare alternatives,
   - explain the invariant,
   - generate a similar problem.
7. Reimplement the solution the next day without looking.

Good AI prompt:

```text
Do not give the solution yet.
Ask me questions that lead me to the right data structure.
If I make a complexity mistake, point it out.
```

---

# 36. Testing habit [P0]

Every implementation should be tested against:

- empty input
- one element
- two elements
- duplicates
- already sorted
- reverse sorted
- all same value
- negative numbers when allowed
- very large/small boundaries
- missing target
- cycle/disconnected component when relevant

For pointer structures also test:

- delete head
- delete tail
- single node
- empty list

For graphs:

- isolated node
- disconnected graph
- self-loop if allowed
- repeated edge if allowed

---

# 37. Invariants — the missing superpower

An invariant is something that remains true while the algorithm executes.

Examples:

### Binary search
> If the answer exists, it remains in the current search interval.

### Sliding window
> The current window satisfies the chosen validity condition after the shrink loop.

### Heap
> Parent-child heap ordering remains valid.

### BFS
> Nodes are processed in nondecreasing number of unweighted edges from the source.

### Dijkstra
> Once a node is finalized under the algorithm's assumptions, its shortest distance is known.

### Two-pointer compaction
> Everything before the slow pointer already satisfies the desired output property.

Learning invariants is more valuable than memorizing templates.

---

# 38. Data-science examples to build

Small projects make the theory stick.

## Project A — Streaming metrics [P0/P1]

Given a stream of numeric values:

- running count
- mean
- min/max
- top-K
- fixed-window mean
- fixed-window max

Structures:
- scalar state
- deque
- heap

---

## Project B — Sparse text features [P0/P1]

From text documents:

1. tokenize
2. count terms with `Counter`
3. build vocabulary dictionary
4. create sparse document-term representation
5. compare dense vs sparse memory

Structures:
- strings
- hashing
- sparse matrix

---

## Project C — Recommendation top-K [P1]

Given `(item_id, score)`:

- return top K,
- compare full sort vs heap,
- benchmark as `n` grows.

Structures:
- array
- sort
- heap

---

## Project D — Graph fraud toy model [P1]

Create:

- account nodes
- transaction edges

Then compute:

- connected components
- BFS distance
- suspicious cycles conceptually
- degree statistics

Structures:
- dictionary adjacency list
- BFS/DFS
- DSU

---

## Project E — Dependency pipeline [P1]

Represent ML pipeline tasks as a DAG.

Example:

```text
ingest → clean → features → train → evaluate → deploy
```

Add dependencies and use topological sort to determine a valid execution order.

---

# 39. Resource stack — use different resources for different jobs

Do not read ten sources for every topic. Pick one primary source and one backup.

## 39.1 Your primary course / alignment source

### CampusX DSA for AI repository
https://github.com/campusx-official/dsa-for-ai

Use it for:
- matching your teacher's order,
- notebooks,
- course terminology,
- course coding exercises.

### CampusX course page
https://learnwith.campusx.in/courses/DSA-69527ab734c0815fe15a08d9

Use it to align with the purchased course lessons.

---

## 39.2 Rigorous algorithm foundation

### MIT OpenCourseWare — 6.006 Introduction to Algorithms
https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/

Use when you want:
- stronger complexity reasoning,
- dynamic arrays,
- hashing,
- heaps,
- trees,
- BFS/DFS,
- shortest paths,
- dynamic programming.

Do not try to consume every MIT lecture immediately. Use it selectively after your first intuitive pass.

---

## 39.3 Python-specific reference

### Python Tutorial — Data Structures
https://docs.python.org/3/tutorial/datastructures.html

### `collections`
https://docs.python.org/3/library/collections.html

### `heapq`
https://docs.python.org/3/library/heapq.html

### `bisect`
https://docs.python.org/3/library/bisect.html

### Sorting HOWTO
https://docs.python.org/3/howto/sorting.html

Use these to learn the *real Python tools* that correspond to textbook structures.

---

## 39.4 Visual learning

### VisuAlgo
https://visualgo.net/en

Excellent for:
- linked lists,
- sorting,
- heaps,
- hash tables,
- BST/AVL,
- BFS/DFS,
- MST,
- shortest paths,
- DSU,
- Fenwick/segment tree,
- recursion trees.

Recommended workflow:

```text
read 10 min → visualize 5 min → close visualization → draw it yourself
```

---

## 39.5 Broader textbook-style reference

### Princeton Algorithms, 4th Edition site
https://algs4.cs.princeton.edu/home/

Good for:
- fundamentals
- sorting
- searching
- symbol tables
- trees
- hashing
- graphs
- strings

The code examples are Java-oriented, so use it for algorithm understanding rather than Python syntax.

---

## 39.6 Practice

### LeetCode 75
https://leetcode.com/studyplan/leetcode-75/

Use for a compact interview-oriented problem set.

### USACO Guide
https://usaco.guide/

Use later for:
- structured problem sets,
- deeper graph/DP topics,
- multiple explanations/resources.

Do not feel obligated to become a competitive programmer.

---

## 39.7 Advanced reference

### CP-Algorithms
https://cp-algorithms.com/

Use as a reference after your foundations are strong for:

- binary search variants
- DSU
- Fenwick/segment trees
- dynamic programming
- KMP/string hashing
- shortest paths
- MST
- SCC
- advanced graph algorithms

It is a reference library, not the best first textbook for a complete beginner.

---

## 39.8 Data-science array/memory references

### NumPy fundamentals
https://numpy.org/doc/stable/user/basics

### NumPy `ndarray`
https://numpy.org/doc/stable/reference/arrays.ndarray.html

### Broadcasting
https://numpy.org/doc/stable/user/basics.broadcasting.html

Focus on:
- shape
- dtype
- indexing
- strides
- copies/views
- broadcasting
- vectorized operations

---

## 39.9 Sparse data

### SciPy sparse arrays
https://docs.scipy.org/doc/scipy/reference/sparse.html

Learn:
- COO
- CSR
- CSC
- dense vs sparse trade-offs
- graph/sparse-linear-algebra connection

---

# 40. Corrections / precision notes while using the PDF

Treat these as refinements rather than reasons to discard the course.

## 40.1 Python strings

Think:

> Python `str` represents Unicode text.

Do not build your mental model around “Python stores every string internally as UTF-8.” Internal representation is an implementation concern and is more nuanced.

---

## 40.2 Python list vs numeric array

A Python `list` is not the same thing as a homogeneous numeric array.

For DS/ML:

```text
Python list
    → dynamic sequence of Python object references

NumPy ndarray
    → typed N-dimensional array with shape/strides
```

That distinction is fundamental.

---

## 40.3 NumPy arrays are not always contiguous

An original array may own a contiguous block, but slicing/transposing can create strided views.

So do not memorize:

> “Every NumPy array is physically contiguous.”

Instead learn:

> `ndarray` supports strided indexing over memory.

---

## 40.4 Linked lists and fragmentation

Linked lists do not require one large contiguous block, which lets nodes be allocated separately.

But saying they simply “prevent memory fragmentation” is too strong. Their benefit is that they **do not require contiguous storage**; allocation behavior and fragmentation are broader memory-management issues.

---

## 40.5 `deque` internals

Use the official guarantee:

> efficient append/pop operations on both ends.

Do not make your algorithm depend on a particular hidden CPython implementation detail.

---

## 40.6 Python binary-search overflow

The classic expression:

```python
mid = lo + (hi - lo) // 2
```

is excellent cross-language practice.

In Python, integer arithmetic is not limited to fixed 32/64-bit signed integer overflow in the same way as C/C++/Java primitive integers.

---

# 41. What “mastery” should look like

## Level 1 — Vocabulary
You can define:
- array
- hash table
- stack
- queue
- tree
- graph
- heap

## Level 2 — Operations
You can explain:
- what operations exist,
- their approximate complexity.

## Level 3 — Implementation
You can implement the core structure/algorithm.

## Level 4 — Recognition
Given a new problem, you identify likely patterns.

## Level 5 — Combination
You combine structures:
- heap + graph,
- hash + prefix sum,
- stack + traversal,
- binary search + greedy feasibility.

## Level 6 — Engineering judgment
You choose between:
- textbook implementation,
- Python standard library,
- NumPy/SciPy structure,
- approximate/streaming alternative.

## Level 7 — Explanation
You can teach:
- invariant,
- complexity,
- trade-offs,
- failure modes,
- alternatives.

That is a much better definition of mastery than “I completed 500 problems.”

---

# 42. Final P0 checklist

Before moving into highly advanced DSA, you should be confident with every item below.

## Python
- [ ] references and mutation
- [ ] list / tuple / dict / set
- [ ] slicing
- [ ] comprehensions
- [ ] `enumerate`, `zip`
- [ ] `deque`
- [ ] `Counter`, `defaultdict`
- [ ] `heapq`
- [ ] `bisect`
- [ ] sorting with `key=`

## Complexity
- [ ] O(1), O(log n), O(n), O(n log n), O(n²)
- [ ] time vs space
- [ ] amortized analysis intuition
- [ ] recursion depth
- [ ] graph O(V+E)

## Arrays / strings
- [ ] traversal
- [ ] indexing
- [ ] prefix sums
- [ ] two pointers
- [ ] sliding windows
- [ ] frequency tables

## Hashing
- [ ] map/set
- [ ] counting
- [ ] seen state
- [ ] grouping
- [ ] prefix-sum + hash

## Search / sort
- [ ] binary search
- [ ] lower/upper bound idea
- [ ] search on answer
- [ ] merge sort intuition/implementation
- [ ] quicksort partition intuition
- [ ] Python built-in sorting

## Linear structures
- [ ] stack
- [ ] queue
- [ ] deque
- [ ] linked-list reverse
- [ ] cycle detection

## Recursion
- [ ] base case
- [ ] recursive case
- [ ] call stack
- [ ] divide & conquer
- [ ] backtracking basics

## Trees
- [ ] terminology
- [ ] preorder/inorder/postorder
- [ ] level order
- [ ] BST search/insert concept
- [ ] height/depth/diameter patterns

## Heap
- [ ] heap invariant
- [ ] push/pop
- [ ] top-K
- [ ] priority queue

## Graph
- [ ] adjacency list
- [ ] DFS
- [ ] BFS
- [ ] grid graph
- [ ] topological sort
- [ ] Dijkstra concept
- [ ] DSU concept

## DP / greedy
- [ ] define DP state
- [ ] transition
- [ ] base case
- [ ] memoization/tabulation
- [ ] 1D DP
- [ ] basic 2D/string DP
- [ ] greedy-choice reasoning

## DS/ML
- [ ] NumPy shape/dtype/strides
- [ ] views vs copies
- [ ] broadcasting
- [ ] dense vs sparse
- [ ] CSR/CSC/COO basics
- [ ] top-K without full sorting
- [ ] graph modeling
- [ ] streaming bounded-memory thinking

---

# 43. What to learn after this roadmap

Only after the core is comfortable, choose based on your direction.

## If your goal is ML engineering
Prioritize:
- sparse matrices
- vectorization/memory
- heaps/top-K
- graphs
- approximate nearest neighbor concepts
- streaming/sketches
- batching/queues
- profiling and systems performance

## If your goal is interviews
Prioritize:
- pattern recognition
- medium problems
- trees/graphs
- heaps
- backtracking
- DP
- intervals
- monotonic stack
- binary search on answer

## If your goal is competitive programming
Add:
- Fenwick tree
- segment tree
- advanced DP
- SCC
- LCA
- advanced shortest paths
- string algorithms
- number theory
- flows/matching
- combinatorics

## If your goal is research / algorithmic ML
Add:
- discrete math
- probability
- linear algebra
- randomized algorithms
- approximation algorithms
- optimization
- computational complexity

---

# 44. One final study rule

For every new structure, answer these seven questions:

```text
1. What problem does it solve?
2. What invariant defines it?
3. How is it represented in memory?
4. What are its core operations?
5. What is the complexity of each operation?
6. What alternatives exist?
7. When would I choose it in real code?
```

If you can answer those seven questions and solve unfamiliar problems with the structure, you understand it.

If you only remember its class implementation, keep practicing.

---

# 45. Recommended path from tomorrow

Start here, in this exact order:

```text
Day 1: references, mutability, list vs tuple
Day 2: list operations + complexity
Day 3: Big-O and loop analysis
Day 4: arrays vs Python lists vs NumPy ndarray
Day 5: NumPy shape/dtype/strides/views
Day 6: hash map / set
Day 7: 5 mixed problems + review
```

Then continue through the 24-week plan.

The aim is **steady compounding**, not finishing the PDF as quickly as possible.
