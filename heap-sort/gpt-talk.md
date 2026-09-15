Heap sort can look difficult because it uses a **tree**, but the important trick is this:

> We do not actually need to create a Tree class.
> We can store the tree inside a normal Python list.

I’ll start from zero.

## 1. First: what is an array?

In Python, we usually use a `list` like this:

```python
arr = [4, 10, 3, 5, 1]
```

Each value has a position called an **index**:

```text
Value:  4   10   3   5   1
Index:  0    1   2   3   4
```

So:

```python
arr[0]  # 4
arr[1]  # 10
arr[3]  # 5
```

That is almost all the prerequisite you need for now.

---

# 2. What is a tree?

Imagine a family tree.

One person can have children below them.

```text
        10
       /  \
      5    3
     / \
    4   1
```

The number at the very top is called the **root**.

Here:

```text
root = 10
```

The children of `10` are:

```text
5 and 3
```

And the children of `5` are:

```text
4 and 1
```

For heap sort, every node can have at most **2 children**.

That is why we call it a **binary tree**.

---

# 3. The surprising part: this tree can be a Python list

Take this tree:

```text
        10
       /  \
      5    3
     / \
    4   1
```

We can store it as:

```python
arr = [10, 5, 3, 4, 1]
```

Like this:

```text
Tree:

              10
            index 0

          /          \

        5              3
     index 1        index 2

     /    \

    4      1
 index 3 index 4
```

Array:

```text
index:  0   1   2   3   4
value: 10   5   3   4   1
```

There is a mathematical relationship between a parent and its children.

For a node at index `i`:

```python
left_child = 2 * i + 1
right_child = 2 * i + 2
```

For example, suppose:

```python
i = 0
```

Then:

```python
left = 2 * 0 + 1
# 1

right = 2 * 0 + 2
# 2
```

So:

```text
arr[0] = 10

left child:
arr[1] = 5

right child:
arr[2] = 3
```

Exactly like our tree:

```text
        10
       /  \
      5    3
```

---

# 4. What is a Heap?

A heap is just a binary tree with a special rule.

For Heap Sort, we normally use a **Max Heap**.

The rule is:

> Every parent must be greater than or equal to its children.

Example:

```text
        10
       /  \
      5    3
     / \
    4   1
```

Check it:

```text
10 > 5
10 > 3

5 > 4
5 > 1
```

So this is a valid **Max Heap**.

Notice something very useful:

```text
The biggest number is always at the top.
```

Here:

```text
10
```

This idea is the heart of heap sort.

---

# 5. What if the tree is not a Max Heap?

Suppose we have:

```python
arr = [4, 10, 3, 5, 1]
```

As a tree:

```text
        4
       / \
     10   3
    / \
   5   1
```

This is not a Max Heap.

Why?

Because:

```text
10 > 4
```

But `10` is a child of `4`.

The parent should be bigger.

So we need to rearrange it.

Eventually we want something like:

```text
        10
       /  \
      5    3
     / \
    4   1
```

Array:

```python
[10, 5, 3, 4, 1]
```

Now the largest number is at the root.

---

# 6. What does `heapify` mean?

You will see this word constantly:

```python
heapify()
```

Don't let the name scare you.

It basically means:

> Fix this part of the tree so that the biggest value becomes the parent.

Suppose:

```text
       4
      / \
    10   3
```

The biggest number is:

```text
10
```

So swap `4` and `10`.

We get:

```text
      10
      / \
     4   3
```

That fixing operation is the main idea behind `heapify`.

---

# 7. Let's write `heapify` in Python

Here is the function first:

```python
def heapify(arr, n, i):
    largest = i

    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left

    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]

        heapify(arr, n, largest)
```

This probably looks confusing right now.

Let's decode it.

Imagine:

```python
arr = [4, 10, 3, 5, 1]
```

And:

```python
i = 0
```

Our tree starts like:

```text
        4     <- i = 0
       / \
     10   3
```

First:

```python
largest = i
```

So:

```text
largest = 0
```

We temporarily believe:

```text
4 is the largest
```

Then:

```python
left = 2 * i + 1
right = 2 * i + 2
```

For `i = 0`:

```text
left = 1
right = 2
```

Therefore:

```text
arr[1] = 10
arr[2] = 3
```

Now compare.

```python
if arr[left] > arr[largest]:
```

That means:

```text
Is 10 > 4?
```

Yes.

Therefore:

```python
largest = left
```

So:

```text
largest = 1
```

Then compare right child:

```text
Is 3 > 10?
```

No.

Therefore the largest value is at index `1`.

Then:

```python
arr[i], arr[largest] = arr[largest], arr[i]
```

This swaps:

```text
4 and 10
```

Before:

```python
[4, 10, 3, 5, 1]
```

After:

```python
[10, 4, 3, 5, 1]
```

Tree:

```text
       10
      /  \
     4    3
    / \
   5   1
```

But there is another problem.

Look here:

```text
     4
    / \
   5   1
```

`5` is bigger than `4`.

So `heapify()` calls itself again:

```python
heapify(arr, n, largest)
```

Now it fixes that lower part.

After fixing:

```python
[10, 5, 3, 4, 1]
```

Tree:

```text
        10
       /  \
      5    3
     / \
    4   1
```

Now everything follows the Max Heap rule.

---

# 8. Now Heap Sort becomes surprisingly simple

Suppose we have the Max Heap:

```text
        10
       /  \
      5    3
     / \
    4   1
```

Array:

```python
[10, 5, 3, 4, 1]
```

Remember:

```text
largest value = root
```

So:

```text
largest = 10
```

We want ascending order:

```python
[1, 3, 4, 5, 10]
```

Where should `10` go?

At the end.

So swap the first and last elements.

Before:

```python
[10, 5, 3, 4, 1]
```

Swap `10` and `1`:

```python
[1, 5, 3, 4, 10]
```

Now:

```text
10 is finished.
```

Do not touch it anymore.

We only care about:

```python
[1, 5, 3, 4]
```

But this isn't a Max Heap anymore.

So we run:

```python
heapify()
```

After heapify:

```python
[5, 4, 3, 1, 10]
```

Tree of unsorted portion:

```text
        5
       / \
      4   3
     /
    1
```

Again biggest number:

```text
5
```

Move `5` to the end of the unsorted area.

```text
[5, 4, 3, 1, 10]

swap 5 and 1

[1, 4, 3, 5, 10]
```

Now:

```text
5 and 10 are finished.
```

Heapify again:

```python
[4, 1, 3, 5, 10]
```

Then repeat.

Eventually:

```python
[1, 3, 4, 5, 10]
```

Sorted.

---

# 9. Complete Heap Sort Python code

```python
def heapify(arr, n, i):
    # Assume the current node is the largest
    largest = i

    # Find children
    left = 2 * i + 1
    right = 2 * i + 2

    # Check left child
    if left < n and arr[left] > arr[largest]:
        largest = left

    # Check right child
    if right < n and arr[right] > arr[largest]:
        largest = right

    # If one of the children is bigger
    if largest != i:
        # Swap parent with biggest child
        arr[i], arr[largest] = arr[largest], arr[i]

        # Fix the affected subtree
        heapify(arr, n, largest)


def heap_sort(arr):
    n = len(arr)

    # Step 1: Build Max Heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # Step 2: Move largest number to the end
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]

        # Restore Max Heap
        heapify(arr, i, 0)


arr = [4, 10, 3, 5, 1]

heap_sort(arr)

print(arr)
```

Output:

```text
[1, 3, 4, 5, 10]
```

---

# 10. One confusing line you should understand

You might see:

```python
for i in range(n // 2 - 1, -1, -1):
```

Don't worry about memorizing it yet.

Why `n // 2 - 1`?

Because roughly the second half of the array contains nodes with **no children**.

For:

```python
[4, 10, 3, 5, 1]
```

Tree:

```text
        4       index 0
       / \
     10   3     index 1, 2
    / \
   5   1        index 3, 4
```

Indices `3` and `4` have no children.

There is nothing to heapify there.

So we start from index `1`, the last parent:

```text
index 1 = 10
```

Then:

```text
index 0 = 4
```

We fix the tree from bottom to top.

---

# 11. Visualize the whole example

Start:

```python
arr = [4, 10, 3, 5, 1]
```

Tree:

```text
        4
       / \
     10   3
    / \
   5   1
```

Build Max Heap:

```python
[10, 5, 3, 4, 1]
```

```text
        10
       /  \
      5    3
     / \
    4   1
```

Move `10`:

```text
[1, 5, 3, 4, 10]
```

Heapify:

```text
[5, 4, 3, 1, 10]
```

Move `5`:

```text
[1, 4, 3, 5, 10]
```

Heapify:

```text
[4, 1, 3, 5, 10]
```

Move `4`:

```text
[3, 1, 4, 5, 10]
```

Move `3`:

```text
[1, 3, 4, 5, 10]
```

Finished.

---

# 12. The easiest mental model

Think of Heap Sort like a tournament.

Imagine these numbers are children competing:

```text
4, 10, 3, 5, 1
```

The heap makes sure the **strongest child is standing at the top**:

```text
        10
```

We say:

```text
"Okay 10, you are the biggest. Go to the final position."
```

Then remove `10` from the competition.

Now:

```text
5
```

becomes the strongest.

Send `5` to its final position.

Then `4`.

Then `3`.

Then `1`.

Result:

```text
1 3 4 5 10
```

---

## What you should understand before trying to memorize the code

You only need these ideas:

1. An array/list uses indices: `0, 1, 2, 3...`
2. An array can represent a binary tree.
3. For index `i`, children are `2*i+1` and `2*i+2`.
4. In a Max Heap, the parent is bigger than its children.
5. Therefore the root contains the biggest value.
6. Heap Sort repeatedly moves that biggest value to the end.

Once those six ideas make sense, the Python implementation becomes much easier.

A very good next step is to implement **only `heapify()` first**, using `[4, 10, 3, 5, 1]`, before trying the full Heap Sort.

---
Here `n` simply means:

```python
n = len(arr)
```

If:

```python
arr = [4, 10, 3, 5, 1]
```

then:

```python
n = 5
```

because there are 5 elements.

---

# 1. What does `n` mean inside `heapify()`?

Look at this:

```python
def heapify(arr, n, i):
```

There are three things:

```python
arr
```

The array itself.

```python
n
```

How much of the array we are currently treating as the heap.

```python
i
```

The index of the parent/node we currently want to fix.

For example:

```python
arr = [10, 5, 3, 4, 1]
```

Initially:

```python
n = 5
```

So all 5 elements are part of the heap.

Later, during sorting:

```text
[5, 4, 3, 1, 10]
             ↑
           sorted
```

`10` is already finished.

So now we only want to heapify:

```text
[5, 4, 3, 1]
```

Therefore:

```python
n = 4
```

Even though:

```python
len(arr) == 5
```

That distinction is very important.

`len(arr)` means:

> total array size

while the `n` passed to `heapify()` means:

> current active heap size

---

# 2. Class version of Heap Sort

Here is a clean class-based version:

```python
class HeapSort:

    def heapify(self, arr, n, i):
        largest = i

        left = 2 * i + 1
        right = 2 * i + 2

        if left < n and arr[left] > arr[largest]:
            largest = left

        if right < n and arr[right] > arr[largest]:
            largest = right

        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]

            self.heapify(arr, n, largest)

    def sort(self, arr):
        n = len(arr)

        # Build Max Heap
        for i in range(n // 2 - 1, -1, -1):
            self.heapify(arr, n, i)

        # Sort
        for i in range(n - 1, 0, -1):
            arr[0], arr[i] = arr[i], arr[0]

            self.heapify(arr, i, 0)

        return arr


arr = [4, 10, 3, 5, 1]

heap = HeapSort()

result = heap.sort(arr)

print(result)
```

Output:

```text
[1, 3, 4, 5, 10]
```

Now let's understand the two confusing `range()` statements properly.

---

# 3. First understand Python `range()`

Python's:

```python
range(start, stop, step)
```

means:

```text
start here
↓
keep moving using step
↓
stop BEFORE stop
```

For example:

```python
range(5, 0, -1)
```

means:

```text
5
4
3
2
1
```

It does **not** include `0`.

Why?

Because `stop` is exclusive.

Another example:

```python
range(4, -1, -1)
```

produces:

```text
4
3
2
1
0
```

Notice something strange:

```python
stop = -1
```

We use `-1` because Python stops before `-1`.

Therefore `0` gets included.

---

# 4. What does `range(n // 2 - 1, -1, -1)` mean?

This is used here:

```python
for i in range(n // 2 - 1, -1, -1):
    self.heapify(arr, n, i)
```

Its job is:

> Visit every parent node from bottom to top.

Let's use:

```python
arr = [4, 10, 3, 5, 1]
```

So:

```python
n = 5
```

Calculate:

```python
n // 2
```

which is:

```python
5 // 2
```

Result:

```text
2
```

Then:

```python
n // 2 - 1
```

becomes:

```text
2 - 1 = 1
```

So this:

```python
range(n // 2 - 1, -1, -1)
```

becomes:

```python
range(1, -1, -1)
```

That produces:

```text
1
0
```

So:

```python
for i in range(1, -1, -1):
```

basically means:

```text
First heapify index 1
Then heapify index 0
```

---

# 5. Why only index `1` and `0`?

Look at our tree:

```text
Array:

index:  0   1   2   3   4
value:  4  10   3   5   1
```

Tree:

```text
                4
              index 0
             /       \
           10         3
        index 1    index 2
         /   \
        5     1
     index 3 index 4
```

Now ask:

Which nodes have children?

Index `0`:

```text
        4
       / \
     10   3
```

Yes.

Index `1`:

```text
      10
     /  \
    5    1
```

Yes.

What about index `2`?

```text
3
```

No children.

Index `3`?

```text
5
```

No children.

Index `4`?

```text
1
```

No children.

So only these need heapify:

```text
index 1
index 0
```

That's why:

```python
range(1, -1, -1)
```

---

# 6. Why does `n // 2 - 1` give us the last parent?

This is an important heap formula.

For an array containing `n` elements:

```python
last_parent_index = n // 2 - 1
```

Take:

```text
n = 5
```

Then:

```text
5 // 2 - 1
= 2 - 1
= 1
```

And yes:

```text
index 1
```

is the last node with children.

Look again:

```text
             index 0
              /   \
         index 1   index 2
          /   \
     index 3 index 4
```

The final parent is:

```text
index 1
```

Everything after that:

```text
index 2
index 3
index 4
```

is a leaf.

A **leaf** is simply a node with no children.

---

# 7. Why go backwards?

Why:

```python
range(n // 2 - 1, -1, -1)
```

instead of:

```python
range(0, n // 2)
```

Because we want to fix the tree **bottom-up**.

Consider:

```text
        4
       / \
     10   3
    / \
   5   20
```

If we start from the root immediately, there could still be broken heaps underneath.

Instead:

```text
Step 1: fix lower parents
Step 2: move upward
Step 3: finally fix root
```

So:

```text
bottom
 ↑
 |
top
```

For our example:

```text
index 1 → index 0
```

---

# 8. Now the second range

This:

```python
for i in range(n - 1, 0, -1):
```

is used to actually sort the array.

Again:

```python
arr = [4, 10, 3, 5, 1]
```

So:

```text
n = 5
```

Therefore:

```python
n - 1
```

is:

```text
4
```

So:

```python
range(n - 1, 0, -1)
```

becomes:

```python
range(4, 0, -1)
```

It produces:

```text
4
3
2
1
```

So the loop behaves like:

```python
i = 4
i = 3
i = 2
i = 1
```

---

# 9. Why start at `n - 1`?

Because Python arrays start at index `0`.

For 5 elements:

```text
Value:  4   10   3   5   1
Index:  0    1   2   3   4
```

There are:

```text
5 elements
```

but the last index is:

```text
4
```

which is:

```python
n - 1
```

So:

```python
i = n - 1
```

means:

> Start from the final position of the array.

That's exactly where we want to place the largest number.

---

# 10. Understand the sorting loop visually

After building the Max Heap, suppose we have:

```text
[10, 5, 3, 4, 1]
```

Now:

```python
for i in range(4, 0, -1):
```

### First iteration

```text
i = 4
```

We swap:

```python
arr[0], arr[4] = arr[4], arr[0]
```

Before:

```text
[10, 5, 3, 4, 1]
 ↑             ↑
arr[0]       arr[4]
```

After:

```text
[1, 5, 3, 4, 10]
```

Now `10` is in its correct final position.

Think:

```text
[1, 5, 3, 4 | 10]
 ↑ active heap   ↑ finished
```

Then we call:

```python
heapify(arr, 4, 0)
```

Notice:

```text
n = 4
```

not `5`.

Why?

Because we don't want to touch `10`.

After heapify:

```text
[5, 4, 3, 1 | 10]
```

---

# 11. Next iteration

Now:

```text
i = 3
```

Swap:

```python
arr[0], arr[3] = arr[3], arr[0]
```

Before:

```text
[5, 4, 3, 1 | 10]
```

After:

```text
[1, 4, 3, 5 | 10]
```

Now:

```text
5
```

is finished too.

So:

```text
[1, 4, 3 | 5, 10]
```

We heapify only:

```text
[1, 4, 3]
```

using:

```python
heapify(arr, 3, 0)
```

After heapify:

```text
[4, 1, 3 | 5, 10]
```

---

# 12. Next

```text
i = 2
```

Swap:

```text
[3, 1, 4, 5, 10]
```

Now:

```text
4, 5, 10
```

are done.

---

# 13. Last iteration

```text
i = 1
```

Swap:

```text
[1, 3, 4, 5, 10]
```

Finished.

---

# 14. Why doesn't the second range include `0`?

We use:

```python
range(n - 1, 0, -1)
```

not:

```python
range(n - 1, -1, -1)
```

because when only one element remains:

```text
[1 | 3, 4, 5, 10]
```

there is nothing left to sort.

A single number is automatically sorted.

So there is no need for:

```text
i = 0
```

---

# 15. Put both ranges side-by-side

These two loops perform completely different jobs.

### Loop 1: Create the heap

```python
for i in range(n // 2 - 1, -1, -1):
```

Meaning:

```text
Start at last parent
↓
move backward
↓
finish at root index 0
```

Example:

```text
n = 5

range(1, -1, -1)

1, 0
```

Purpose:

> Build a valid Max Heap.

---

### Loop 2: Sort the heap

```python
for i in range(n - 1, 0, -1):
```

Meaning:

```text
Start at last array index
↓
move backward
↓
finish at index 1
```

Example:

```text
n = 5

range(4, 0, -1)

4, 3, 2, 1
```

Purpose:

> Repeatedly move the biggest value to its final position.

---

# 16. The class code with print statements

This version is excellent for learning because you can watch it work:

```python
class HeapSort:

    def heapify(self, arr, n, i):
        largest = i

        left = 2 * i + 1
        right = 2 * i + 2

        print(f"\nHeapifying index {i}")
        print(f"Current heap size: {n}")

        if left < n:
            print(f"Left child: arr[{left}] = {arr[left]}")

        if right < n:
            print(f"Right child: arr[{right}] = {arr[right]}")

        if left < n and arr[left] > arr[largest]:
            largest = left

        if right < n and arr[right] > arr[largest]:
            largest = right

        if largest != i:
            print(
                f"Swapping {arr[i]} and {arr[largest]}"
            )

            arr[i], arr[largest] = arr[largest], arr[i]

            print("Array:", arr)

            self.heapify(arr, n, largest)

    def sort(self, arr):
        n = len(arr)

        print("Original array:")
        print(arr)

        print("\n--- Building Max Heap ---")

        for i in range(n // 2 - 1, -1, -1):
            self.heapify(arr, n, i)

        print("\nMax Heap:")
        print(arr)

        print("\n--- Sorting ---")

        for i in range(n - 1, 0, -1):

            print(f"\nMove largest {arr[0]} to index {i}")

            arr[0], arr[i] = arr[i], arr[0]

            print("After swap:")
            print(arr)

            self.heapify(arr, i, 0)

        return arr


numbers = [4, 10, 3, 5, 1]

sorter = HeapSort()

sorted_numbers = sorter.sort(numbers)

print("\nFinal sorted array:")
print(sorted_numbers)
```

The most important thing to remember is:

```text
n // 2 - 1
     ↓
last parent


n - 1
  ↓
last array index
```

And:

```text
range(start, stop, -1)
```

means:

```text
Start here
move backward one at a time
stop BEFORE the stop value
```

So:

```python
range(1, -1, -1)
```

is:

```text
1, 0
```

while:

```python
range(4, 0, -1)
```

is:

```text
4, 3, 2, 1
```
