---
title: "Topological Data Analysis and RAG: Building an Architectural Chatbot for Large Legacy .NET Repositories"
summary: "A deep dive into transforming deeply coupled legacy .NET systems into mathematically mapped, queryable ecosystems. We explore Topological Data Analysis (TDA), community detection via the Louvain algorithm, and the integration of local Retrieval-Augmented Generation (GraphRAG) to automate software architecture recovery."
date: 2026-02-21
authors:
  - me
tags:
  - Software Architecture
  - Legacy Systems
  - Topological Data Analysis
  - Clustering
  - D3.js
  - Agentic AI
  - RAG
  - .NET
math: true
cover:
  image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000"
  caption: 'Topological mapping and semantic retrieval of legacy codebases'
  overlay:
    enabled: true
    type: "gradient"
    opacity: 0.6
---

### 1. The Abyss of Legacy Systems: A Topological Perspective

In the enterprise software industry, few engineering challenges are as risk-laden as confronting a massive legacy monolith. We frequently deal with immense .NET solutions that have accumulated years of technical debt, comprising dozens of projects and thousands of classes entangled in a coupling that defies human comprehension. In such environments, proposing a blind migration to microservices is a recipe for catastrophic regressions.

Approaching this challenge as an Applied Mathematician and AI Architect, it becomes clear that traditional methods like manual code reviews are insufficient. To operate effectively and improve Developer Experience (DevEx), we must automate the discovery process. The goal is to construct a system that autonomously extracts the underlying architecture and presents it as an interactive Architectural Dependency Graph (ADG). This shifts the paradigm from reading code line-by-line to querying a mathematically mapped ecosystem.



### 2. Abstract Static Analysis: The Code-to-Data Translation

The foundational layer of this architectural retrieval pipeline requires bridging the gap between raw source code and structured topological data. Relying on simple text searches is inadequate; instead, the system must perform deep abstract static analysis.

By tapping into compiler APIs like the Roslyn platform for .NET, we traverse the Abstract Syntax Trees (ASTs) of the entire solution. This extraction engine dissects the true functional coupling at a granular level, tracking how classes instantiate one another and how methods invoke cross-boundary logic. 

The output is a highly detailed dataset that models the software as a vast network where every namespace, class, and method is a discrete node, and every invocation is a directed edge. However, this raw topological data is overwhelmingly dense.

### 3. Topological Data Analysis (TDA) and Functional Communities

When you plot a graph of a massive legacy system, the visual result is typically a chaotic, unreadable structure—often referred to as a *hairball*. To extract actionable architectural insights, we must treat software engineering as a Topological Data Analysis (TDA) problem.

To break down this hairball, we implement the **Louvain Algorithm**, a greedy optimization method for community detection that maximizes the *modularity* of a network. Rather than clustering based on arbitrary spatial distances, it identifies dense subgraphs that represent the actual functional domains hidden within the monolith.

To guide the clustering, we engineered a custom heuristic affinity function to calculate the connection weight $W(u,v)$ between two specific projects ($u$ and $v$):

$$W(u,v) = V_{traffic} + 1.5 \cdot \delta_{layer} + 0.5 \cdot S_{jaccard}$$

* **Traffic Volume ($V_{traffic}$):** The foundational weight, representing the raw coupling or the exact number of times project $u$ calls members in project $v$.
* **Layer Gravity ($\delta_{layer}$):** A multiplier applied if both projects belong to the same architectural stratum, forcing the algorithm to respect vertical stratification.
* **Technological DNA ($S_{jaccard}$):** Calculated using the Jaccard similarity coefficient of external dependencies (like shared NuGet packages) to group modules with similar infrastructure profiles.

By parameterizing this affinity function, the pipeline dynamically generates multiple clustering configurations, allowing an architect to view the system through purely structural, functional, or hybrid lenses. 

### 4. Semantic Enrichment via Large Language Models

Structural data alone tells us *how* the code is connected, but not *why*. To achieve true architectural intelligence, the pipeline integrates a semantic enrichment layer powered by Large Language Models (LLMs).

Instead of dumping massive files into an LLM's context window, the system iterates through the isolated nodes generated during static analysis. For each critical member, the LLM analyzes the localized source code and generates a structured description containing its primary purpose, sequential logic steps, and core keywords. 

This enrichment engine is backed by a robust caching layer to optimize token expenditure and execution time during subsequent runs.

### 5. The Unified Knowledge Base and GraphRAG Chatbot

With both topological data and semantic metadata in hand, the system compiles a Unified Knowledge Base (KB). Using multilingual sentence transformers, the semantic summaries of the codebase are converted into dense vector embeddings. This perfectly aligns the physical location of the code with its structural relationships and semantic meaning.



The culmination of this pipeline is an immersive frontend built with D3.js that hosts a local Retrieval-Augmented Generation (RAG) assistant directly in the browser. When an architect asks a complex question, the GraphRAG pipeline executes a precise sequence:

1.  **Vectorization:** The user's query is converted into an embedding in the client using the Xenova library.
2.  **Semantic Search:** A cosine similarity search is performed across the vector database.
3.  **Cross-Encoder Reranking:** A secondary model reranks the retrieved code candidates to discard irrelevant matches.
4.  **Code Fetching:** The system dynamically fetches the exact real-time lines of source code.
5.  **Synthesis:** The compiled context is injected into the LLM to output a definitive architectural assessment.

### Conclusion

This TDA-based methodology completely redefines how we approach technical debt. By discarding manual code review in favor of abstract static analysis, sophisticated graph clustering, and AI-driven semantic retrieval, we can tame deteriorated codebases. The legacy monolith transforms from an impenetrable black box into a fully mapped and interactively queryable ecosystem.