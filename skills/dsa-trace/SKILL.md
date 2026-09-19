---
name: dsa-trace
purpose: Turn a small DSA operation into a paper-first state trace.
prerequisites: The learner has a topic and a tiny input.
invocation: /dsa-trace
version: 1.0.0
---

# DSA Trace

Create a deliberately small input for the learner's topic. Ask the learner to predict the state before revealing the next state.

## Response contract

1. State the operation and input.
2. Ask the learner to draw or tabulate the initial state.
3. Reveal one transition at a time only after the learner answers.
4. Keep references, pointers, stack frames, queue order, heap order, or DP state explicit.
5. End by asking the learner to name the invariant and complexity.

Do not jump straight to code. If the learner is stuck, ask a smaller tracing question rather than supplying the whole trace.
