# How Resources Are Curated and How to Study With Them

This guide explains why each learning resource appears in the DSA website and how to use it without getting overwhelmed.

The resource collection is curated from two source documents:

- [DSA for Data Science and ML Master Roadmap](DSA_for_Data_Science_ML_Master_Roadmap.md)
- [DSA Practice System and Free Resources](DSA_Practice_System_Free_Resources_Dependency_Safe.md)

The website should link learners back to these documents whenever they want the full context.

## Curation principles

Resources are included because they serve a specific learning job. They are not a list of everything available on the internet.

- Prefer free or openly accessible material. Skip locked paid or Pro content.
- Use a resource only after its required concepts are unlocked in the roadmap.
- Prefer official documentation for Python, NumPy, and SciPy tools.
- Use one primary resource and one backup resource for a topic. Do not try to consume every source.
- Use visual tools to build intuition, then close the tool and reproduce the idea yourself.
- Use problem platforms only with topic tags that match the concepts already studied.
- Treat advanced references as references, not as a beginner's first explanation.

## Resource types

### Learn the concept

Use the roadmap first. For deeper theory, use sources such as MIT 6.006, Princeton Algorithms, or Berkeley CS61B after the first intuitive pass.

### Learn Python tools

Use the official Python tutorial and standard-library documentation for `list`, `dict`, `set`, `deque`, `heapq`, `bisect`, and sorting. Use official NumPy and SciPy documentation for array memory, broadcasting, and sparse structures.

### Visualize state

Use Python Tutor for Python references, mutation, loops, recursion, and small structures. Use VisuAlgo or OpenDSA for operations such as sorting, heaps, trees, graphs, and traversals.

### Practice safely

Use beginner resources such as CodingBat and Exercism for early Python. Move to HackerRank, HackerEarth, GeeksforGeeks, LeetCode, CSES, CodeChef, or Codeforces only when the topic and its dependencies are unlocked.

### Go deeper later

Use CP-Algorithms, USACO Guide, NeetCode, and Striver A2Z after the roadmap has introduced the relevant foundation. They are useful references and revision material, not a requirement to begin.

## How to choose a resource

Before opening a practice problem or course page:

1. Find your current roadmap stage.
2. Read the topic explanation and write the key invariant or rule.
3. Choose one resource that matches your goal: learn, visualize, practice, or reference.
4. Check that the required tags do not include a future topic.
5. Use a time box. Do not browse endlessly for a perfect problem.
6. If the resource is too difficult, return to a smaller exercise or paper trace.

## A simple study session

For a normal 45 to 60 minute session:

1. Recall the topic from memory for five minutes.
2. Trace one example on paper or with a visualizer.
3. Implement the basic operation or algorithm yourself.
4. Solve one dependency-safe practice problem.
5. State the invariant, time complexity, extra space, and one edge case.
6. Save one useful mistake or insight for later review.

The full nine-mode practice cycle, completion gate, worksheets, and stage-specific exercises are in the [practice companion](DSA_Practice_System_Free_Resources_Dependency_Safe.md).

## Using AI without skipping the learning

First try to define the input, output, brute-force approach, likely pattern, and a first implementation. If stuck, ask for one hint instead of a full solution.

Useful AI requests include:

- explain an invariant,
- point out a complexity mistake,
- identify an edge case,
- compare two approaches,
- generate a similar practice problem, or
- ask guiding questions instead of revealing the solution.

The website's `Ask AI` action should share the current public topic-page link with a short beginner-friendly request. The source documents contain more detailed prompts for specific stages and practice activities.

### Shared Ask AI prompt

Use this shared prompt for the website's `Ask AI` action. Replace `{page_url}` with the current public topic-page link.

```text
Please open this public DSA study page and explain its topic clearly for a beginner:
{page_url}

Summarize the main idea, show one small example, explain the key invariant or rule,
and ask me two questions to check my understanding. Do not give full solutions to
practice problems unless I explicitly ask.
```

When this prompt is updated here, every `Ask AI` action in the website should use the updated text after the next static-site build and deployment.

## What to avoid

- Randomly choosing problems with unfamiliar tags.
- Moving to an advanced technique because an editorial uses it.
- Watching solutions before attempting a paper trace and implementation.
- Trying every resource listed for a topic.
- Treating a problem count as proof of mastery.

## Keeping the collection useful

When editing the resource collection, update the relevant source document first. Keep each resource's purpose, recommended stage, dependency warning, and free-access note clear. Prefer replacing a stale link with the official current page over adding more sources.
