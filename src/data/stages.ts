export type Stage = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  aim: string;
  primary: { label: string; href: string };
  visual: { label: string; href: string };
  practice: string;
  accent: 'coral' | 'blue' | 'yellow' | 'paper';
};

const stage = (
  id: string,
  title: string,
  description: string,
  aim: string,
  primary: { label: string; href: string },
  visual: { label: string; href: string },
  practice: string,
  accent: Stage['accent'],
): Stage => ({ id, slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''), title, shortTitle: title, description, aim, primary, visual, practice, accent });

export const stages: Stage[] = [
  stage('00', 'Python foundations', 'Objects, references, syntax, and the standard-library toolkit.', 'Build the mental model before the algorithms.', { label: 'Python data structures', href: 'https://docs.python.org/3/tutorial/datastructures.html' }, { label: 'Python Tutor', href: 'https://pythontutor.com/' }, 'Trace values, references, mutability, copying, and a few small functions on paper before running them.', 'coral'),
  stage('01', 'Complexity', 'Big-O, growth rates, trade-offs, and algorithmic thinking.', 'Explain how work changes as input grows.', { label: 'MIT 6.006 notes', href: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/' }, { label: 'Complexity visualizer', href: 'https://www.bigocheatsheet.com/' }, 'Compare two approaches to the same task and write down the operation that grows with the input.', 'blue'),
  stage('02', 'Arrays and lists', 'Arrays, Python lists, NumPy arrays, and memory behavior.', 'Choose the right container for the job.', { label: 'Python list reference', href: 'https://docs.python.org/3/tutorial/datastructures.html' }, { label: 'NumPy quickstart', href: 'https://numpy.org/doc/stable/user/quickstart.html' }, 'Draw a list before and after append, insert, delete, and slice operations. Note which work shifts elements.', 'yellow'),
  stage('03', 'Strings', 'String operations, comparisons, frequency, and text mechanics.', 'Turn text into a structure you can reason about.', { label: 'Python string methods', href: 'https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str' }, { label: 'CodingBat String-1', href: 'https://codingbat.com/python/String-1' }, 'Count characters by hand, then use a dictionary to compare the manual trace with your Python result.', 'paper'),
  stage('04', 'Hashing', 'Dictionaries, sets, collisions, lookup, and counting patterns.', 'Trade space for fast, clear lookup.', { label: 'Python mappings', href: 'https://docs.python.org/3/library/stdtypes.html#mapping-types-dict' }, { label: 'Hash table guide', href: 'https://visualgo.net/en/hashtable' }, 'Build a frequency table from a tiny input and state the invariant after each update.', 'coral'),
  stage('05', 'Problem-solving patterns', 'Prefix sums, two pointers, and sliding windows.', 'Recognize reusable shapes in unfamiliar problems.', { label: 'Pattern practice', href: 'https://neetcode.io/roadmap' }, { label: 'Two-pointer examples', href: 'https://visualgo.net/en/array' }, 'Take one problem and write the brute-force version before naming the pattern that removes repeated work.', 'blue'),
  stage('06', 'Binary search', 'Search spaces, monotonic conditions, and boundary control.', 'Search an answer, not just an array.', { label: 'Binary search study plan', href: 'https://leetcode.com/studyplan/binary-search/' }, { label: 'Search visualizer', href: 'https://visualgo.net/en/bst' }, 'Write down the search interval after every comparison. Never rely on a mental picture alone.', 'yellow'),
  stage('07', 'Sorting', 'Ordering, stable sorting, merge sort, quicksort, and top-K.', 'Know when ordering reveals the answer.', { label: 'Python sorting HOWTO', href: 'https://docs.python.org/3/howto/sorting.html' }, { label: 'Sorting visualizer', href: 'https://visualgo.net/en/sorting' }, 'Trace one stable sort and one partition. Record the invariant that is true before the next pass.', 'paper'),
  stage('08', 'Stack, queue, deque', 'LIFO, FIFO, breadth-first work, and Python collections.', 'Model what must happen next.', { label: 'Python collections', href: 'https://docs.python.org/3/library/collections.html' }, { label: 'Queue visualizer', href: 'https://visualgo.net/en/list' }, 'Model a browser history as a stack and a task line as a queue. Explain why the order differs.', 'coral'),
  stage('09', 'Linked lists', 'Nodes, references, insertion, deletion, and traversal.', 'Draw links before changing them.', { label: 'Linked-list practice', href: 'https://www.geeksforgeeks.org/data-structures/linked-list/' }, { label: 'Linked-list visualizer', href: 'https://visualgo.net/en/list' }, 'Draw nodes and arrows before each insertion or deletion. Identify the reference that must be saved first.', 'blue'),
  stage('10', 'Recursion', 'Call stacks, base cases, divide and conquer.', 'See a smaller version of the same problem.', { label: 'Python recursion', href: 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions' }, { label: 'Python Tutor', href: 'https://pythontutor.com/' }, 'Write the call stack for a tiny recursive function, then identify its base case and progress measure.', 'yellow'),
  stage('11', 'Backtracking', 'Choices, constraints, undo, and search trees.', 'Explore possibilities without losing state.', { label: 'Backtracking roadmap', href: 'https://neetcode.io/roadmap' }, { label: 'Search tree practice', href: 'https://visualgo.net/en/graphds' }, 'Draw the choice tree for a three-item permutation problem and mark where state is undone.', 'paper'),
  stage('12', 'Trees and BSTs', 'Traversal, hierarchy, ordering, and recursive structure.', 'Move through nested data with a rule.', { label: 'Tree algorithms', href: 'https://visualgo.net/en/bst' }, { label: 'Tree visualizer', href: 'https://visualgo.net/en/bst' }, 'Trace preorder, inorder, postorder, and level-order visits on one small tree.', 'coral'),
  stage('13', 'Heap and priority queue', 'heapq, top-K, scheduling, and ranked work.', 'Keep the most important item accessible.', { label: 'Python heapq', href: 'https://docs.python.org/3/library/heapq.html' }, { label: 'Heap visualizer', href: 'https://visualgo.net/en/heap' }, 'After every push and pop, mark the heap property that remains true.', 'blue'),
  stage('14', 'Graphs', 'BFS, DFS, DAGs, shortest paths, and DSU.', 'Model relationships and movement.', { label: 'Graph algorithms', href: 'https://visualgo.net/en/graphds' }, { label: 'CSES problem set', href: 'https://cses.fi/problemset/' }, 'Turn a real relationship into nodes and edges, then choose BFS or DFS and explain why.', 'yellow'),
  stage('15', 'Greedy algorithms', 'Local choices, exchange arguments, intervals, and scheduling.', 'Know when the next best choice is safe.', { label: 'Greedy algorithms', href: 'https://cp-algorithms.com/greedy/index.html' }, { label: 'Interval practice', href: 'https://leetcode.com/tag/greedy/' }, 'Construct a counterexample to a tempting greedy rule before trusting a local choice.', 'paper'),
  stage('16', 'Dynamic programming', 'Recurrence, memoization, tabulation, and state design.', 'Turn repeated work into a table of decisions.', { label: 'DP study plan', href: 'https://leetcode.com/studyplan/dynamic-programming/' }, { label: 'DP patterns', href: 'https://cp-algorithms.com/dynamic_programming/intro-to-dp.html' }, 'Write the state, transition, base case, and evaluation order before writing code.', 'coral'),
  stage('17', 'Tries and string algorithms', 'Prefix trees, KMP, rolling hash, and advanced search.', 'Index language when ordinary lookup is not enough.', { label: 'String algorithms', href: 'https://cp-algorithms.com/string/main_lorentz.html' }, { label: 'Trie visualizer', href: 'https://visualgo.net/en/trie' }, 'Build a tiny trie from five words and mark the shared prefixes that save repeated comparisons.', 'blue'),
  stage('18', 'Data science extensions', 'Sparse structures, streaming, top-K, graph ML, and nearest neighbors.', 'Connect DSA mechanics to real data workloads.', { label: 'NumPy user guide', href: 'https://numpy.org/doc/stable/user/index.html' }, { label: 'SciPy sparse guide', href: 'https://docs.scipy.org/doc/scipy/tutorial/sparse.html' }, 'Pick one data workload and name its data structure, operation, scale constraint, and likely failure mode.', 'yellow'),
];

export const getStage = (slug: string) => stages.find((item) => item.slug === slug);
