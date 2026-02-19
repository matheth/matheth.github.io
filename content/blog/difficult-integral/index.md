---
title: "Solving a Non-Elementary Integral: The Feynman Technique"
summary: "Using differentiation under the integral sign to solve the Dirichlet integral and its variations."
date: 2026-02-15
authors:
  - me
tags:
  - Calculus
  - Integration
  - Feynman Technique
  - Leibniz Rule
  - Inverse Tangent Integral
# Enable LaTeX rendering
math: true
cover:
  image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000" # A math/abstract themed image
  caption: 'Theoretical Rigor in Applied Mathematics'
  overlay:
    enabled: true
    type: "gradient"
    opacity: 0.4
---

I am glad to start this blog with a difficult integral. As an **Applied Mathematician (UBA)** and **AI Architect**, I often find that the most elegant solutions in engineering come from a deep understanding of mathematical fundamentals. Today, we explore the **Feynman Technique**, a powerful method for solving "impossible" integrals through parameter differentiation.

## The Problem

We aim to evaluate the following integral for $\psi \in [0, \pi]$:

$$I(\psi) = \int_{0}^{\frac{\pi}{2}} \ln (1+\sin x \sin \psi) dx$$

This was inspired by an AOPS post made by _Yimself_: [Integral 86](https://artofproblemsolving.com/community/u308862h1735425p11339032)

He states:

---
  Hi, calculate for $a\in \mathrm N$:
  $$\int_0^\frac{\pi}{2} \ln(a+\sin x)dx$$

---

This is equivalent to computing our original integral since we can establish a direct algebraic link between the two through a trigonometric substitution. 

If we let $a = \csc \psi = \frac{1}{\sin \psi}$ (where $a \ge 1$ implies $\psi \in (0, \pi)$), we can rewrite the argument of the logarithm in $J(a)$:

$$J(a) := \int_{0}^{\frac{\pi}{2}} \ln(a+\sin x) \, dx = \int_{0}^{\frac{\pi}{2}} \ln\left(\frac{1}{\sin \psi} + \sin x\right) dx$$

Finding a common denominator inside the logarithm yields:

$$J(a) = \int_{0}^{\frac{\pi}{2}} \ln\left(\frac{1 + \sin x \sin \psi}{\sin \psi}\right) \\
= \int_{0}^{\frac{\pi}{2}} \ln(1 + \sin x \sin \psi) \, dx - \frac{\pi}{2} \ln(\sin \psi)$$

So, therefore
$$J(a) = I(\psi) - \frac{\pi}{2} \ln(\sin \psi)$$

Thus, solving $I(\psi)$ gives us the complete solution to $J(a)$ for any $a \ge 1$, and in particular, any $a\in \mathbb{N}$.

## The Approach

We define a function $I(\psi)$ and use the Leibniz rule for differentiation under the integral sign to transform this logarithmic integral into a more manageable trigonometric form. 

### 1. Justifying the Leibniz Rule

Before blindly differentiating, we must ensure it is mathematically legal. The Leibniz Integral Rule states that we can swap the derivative and the integral if both the integrand $f(x, \psi)$ and its partial derivative $\frac{\partial f}{\partial \psi}$ are continuous over the region of integration.

Let $f(x, \psi) = \ln(1+\sin x \sin \psi)$. 
Since our bounds are $x \in [0, \frac{\pi}{2}]$ and we restrict $\psi \in [0, \pi]$, we know that $\sin x \ge 0$ and $\sin \psi \ge 0$. Therefore, the argument of the natural logarithm satisfies $1 + \sin x \sin \psi \ge 1 > 0$. 

Because the argument is strictly positive, $f(x, \psi)$ is continuous. The partial derivative with respect to $\psi$ is:

$$\frac{\partial f}{\partial \psi} = \frac{\sin x \cos \psi}{1 + \sin x \sin \psi}$$

This derivative is a rational function where the denominator is never zero on our compact interval $[0, \frac{\pi}{2}]$. Since both continuity conditions are strictly met, we are fully justified in passing the derivative inside the integral.

### 2. Differentiating under the integral sign

Taking the derivative of $I(\psi)$ with respect to $\psi$ gives:

$$I'(\psi) = \int_{0}^{\frac{\pi}{2}} \frac{\cos \psi \sin x}{1 + \sin \psi \sin x} dx$$

To integrate this, we can perform an algebraic manipulation. We multiply and divide by $\sin \psi$ to match the denominator, pulling out a cotangent:

$$I'(\psi) = \frac{\cos \psi}{\sin \psi} \int_{0}^{\frac{\pi}{2}} \frac{\sin \psi \sin x}{1 + \sin \psi \sin x} dx = \cot \psi \int_{0}^{\frac{\pi}{2}} \frac{\sin \psi \sin x}{1 + \sin \psi \sin x} dx$$

From where, 

$$I'(\psi) = \cot \psi \int_{0}^{\frac{\pi}{2}} \left( \frac{1 + \sin \psi \sin x - 1}{1 + \sin \psi \sin x} \right) dx = \cot \psi \int_{0}^{\frac{\pi}{2}} \left( 1 - \frac{1}{1 + \sin \psi \sin x} \right) dx$$

We split this into two integrals. The first is trivial: $\int_{0}^{\frac{\pi}{2}} 1 dx = \frac{\pi}{2}$. The second is a standard trigonometric integral that evaluates to $\frac{\frac{\pi}{2}-\psi}{\cos\psi}$ (typically solved via the Weierstrass tangent half-angle substitution $u = \tan(x/2)$). 

Substituting these back yields:

$$I'(\psi) = \cot \psi \left( \frac{\pi}{2} - \frac{\frac{\pi}{2} - \psi}{\cos \psi} \right) = \frac{\pi}{2} \frac{\cos \psi}{\sin \psi}  + \frac{\psi - \frac{\pi}{2}}{\sin \psi}$$

### 3. Integrating from the Origin

We now integrate our rewritten expression for $I'(u)$ with respect to $u$ from $0$ to $\psi$. Note that at the lower bound, $I(0) = \int_{0}^{\frac{\pi}{2}} \ln(1) \, dx = 0$.

$$I(\psi) - I(0) = \int_{0}^{\psi} \left( \frac{\pi}{2} \frac{\cos u}{\sin u}  + \frac{u - \frac{\pi}{2}}{\sin u} \right) du$$

At first glance, integrating this directly poses a problem because both $\frac{\cos u}{\sin u}$ and $\frac{-\pi/2}{\sin u}$ diverge to infinity as $u \to 0$. To resolve this, we distribute the numerator of the second term and group the constants strategically:

$$I(\psi) = \int_{0}^{\psi} \left[ \frac{\pi}{2} \left( \frac{\cos u}{\sin u} - \frac{1}{\sin u} \right) + \frac{u}{\sin u} \right] du$$

$$I(\psi) = \frac{\pi}{2} \int_{0}^{\psi} \left( \frac{\cos u - 1}{\sin u} \right) du + \int_{0}^{\psi} \frac{u}{\sin u} \, du$$

By grouping it this way, the singularity in the first integral is perfectly removable, since $\lim_{u \to 0} \frac{\cos u - 1}{\sin u} = 0$.

### 4. Evaluating the Trigonometric Integral

For the first integral, we can apply the tangent half-angle identity:
$$\frac{\cos u - 1}{\sin u} =\frac{- 2\sin^2 \frac{u}{2}}{2\sin \frac{u}{2} \cos \frac{u}{2}} =  -\tan\left(\frac{u}{2}\right)$$

Integrating this produces a clean logarithmic expression:
$$\frac{\pi}{2} \int_{0}^{\psi} -\tan\left(\frac{u}{2}\right) du = \frac{\pi}{2} \left[ 2\ln\left(\cos\frac{u}{2}\right) \right]_0^\psi = \pi \ln\left(\cos\frac{\psi}{2}\right)$$

### 5. The Inverse Tangent Integral

For the second integral, $\int_{0}^{\psi} \frac{u}{\sin u} \, du$, we use the Weierstrass half-angle substitution $t = \tan(\frac{u}{2})$. 
This implies $u = 2\arctan(t)$, $du = \frac{2}{1+t^2} dt$, and $\sin u = \frac{2t}{1+t^2}$. 
Substituting these transforms our integral into:

$$\int_{0}^{\psi} \frac{u}{\sin u} \, du = \int_{0}^{\tan(\frac{\psi}{2})} \frac{2\arctan t}{\left(\frac{2t}{1+t^2}\right)} \left(\frac{2}{1+t^2}\right) dt = 2 \int_{0}^{\tan(\frac{\psi}{2})} \frac{\arctan t}{t} dt$$

By definition, the integral $\int_0^z \frac{\arctan t}{t} dt$ is the Inverse Tangent Integral, denoted as $\operatorname{Ti}_2(z)$. 
Therefore, this segment evaluates strictly to $2\operatorname{Ti}_2\left(\tan\frac{\psi}{2}\right)$. 

Combining both parts, our function becomes:

$$I(\psi) = \pi \ln\left(\cos\frac{\psi}{2}\right) + 2\operatorname{Ti}_2\left(\tan\frac{\psi}{2}\right)$$

### 6. Series Expansion Connection

To express this result explicitly without relying on the special $\operatorname{Ti}_2$ function, we can use the identity connecting the inverse tangent integral of a tangent to its Fourier series expansion:

$$\operatorname{Ti}_2(\tan x) = x \ln \tan x + \sum_{n \ge 1, \text{odd}} \frac{\sin 2nx}{n^2}$$

_Note: This formula will be derived in a later post_

Letting $x = \frac{\psi}{2}$, we multiply by 2 to match our term:

$$2\operatorname{Ti}_2\left(\tan\frac{\psi}{2}\right) = \psi \ln \tan\left(\frac{\psi}{2}\right) + 2 \sum_{n \ge 1, \text{odd}} \frac{\sin(n\psi)}{n^2}$$

Substituting this back into our equation yields our final, elegant closed-form solution:

$$\boxed{\int_{0}^{\frac{\pi}{2}} \ln (1+\sin x \sin \psi) dx = \psi \ln \tan\left(\frac{\psi}{2}\right) + \pi \ln \cos\left(\frac{\psi}{2}\right) + 2 \sum_{n \ge 1, \text{odd}} \frac{\sin(n\psi)}{n^2}}$$


### 7. Evaluating at a Specific Phase: $\psi = \frac{\pi}{6}$

To see the true power of this closed-form expression, let's evaluate the integral at exactly $\psi = \frac{\pi}{6}$. Substituting this into our final equation gives:

$$I\left(\frac{\pi}{6}\right) = \frac{\pi}{6} \ln \tan\left(\frac{\pi}{12}\right) + \pi \ln \cos\left(\frac{\pi}{12}\right) + 2 \sum_{k=0}^{\infty} \frac{\sin\left((2k+1)\frac{\pi}{6}\right)}{(2k+1)^2}$$

The infinite series here, let's call it $S_6$, is particularly fascinating. Notice that the argument of the sine function can be rewritten as $\frac{\pi}{6} + \frac{k\pi}{3}$. To handle the periodicity of this sequence without relying on floating-point trigonometry, we can apply a discrete integer formula I recently derived:

$$\sin\left(\frac{\pi}{6} + \frac{k\pi}{3}\right) = \frac{(-1)^{\lfloor k/3 \rfloor}}{2^{1-(k \pmod 3) \pmod 2}}$$

This elegant formula captures both the alternating signs (via the numerator) and the magnitude switching between $1$ and $\frac{1}{2}$ (via the denominator). 

#### Calculating the Sum $S_6$

Using this formula, we can calculate the exact value of $S_6$ by partitioning the sum into residue classes modulo 3. Let $k = 3m + r$, where $r \in \{0, 1, 2\}$.

* For $r=0$: The argument is $6m+1$, the sign is $(-1)^m$, and the sine value is $\frac{1}{2}$.
* For $r=1$: The argument is $6m+3 = 3(2m+1)$, the sign is $(-1)^m$, and the sine value is $1$.
* For $r=2$: The argument is $6m+5$, the sign is $(-1)^m$, and the sine value is $\frac{1}{2}$.

We can split $S_6$ into these three components:

$$S_6 = \sum_{m=0}^{\infty} (-1)^m \left[ \frac{\frac{1}{2}}{(6m+1)^2} + \frac{1}{(3(2m+1))^2} + \frac{\frac{1}{2}}{(6m+5)^2} \right]$$

Extracting the middle term, we recognize Catalan's constant ($G = \sum_{m=0}^{\infty} \frac{(-1)^m}{(2m+1)^2}$):

$$\sum_{m=0}^{\infty} \frac{(-1)^m}{9(2m+1)^2} = \frac{1}{9}G$$

For the outer terms ($r=0$ and $r=2$), we factor out the $\frac{1}{2}$:

$$\frac{1}{2} \sum_{m=0}^{\infty} (-1)^m \left[ \frac{1}{(6m+1)^2} + \frac{1}{(6m+5)^2} \right]$$

This specific combination of terms corresponds exactly to all the elements of Catalan's constant *except* the multiples of 3. Thus, the inner sum is equal to $G - \left(-\frac{1}{9}G\right) = \frac{10}{9}G$. Multiplying by the factored $\frac{1}{2}$ gives $\frac{5}{9}G$. 

Adding these back together gives our beautiful, exact result:

$$S_6 = \frac{5}{9}G + \frac{1}{9}G = \frac{6}{9}G = \frac{2}{3}G$$

Thus, the exact value of our integral becomes:

$$I\left(\frac{\pi}{6}\right) = \frac{\pi}{6} \ln \tan\left(\frac{\pi}{12}\right) + \pi \ln \cos\left(\frac{\pi}{12}\right) + \frac{4}{3}G$$


### 8. Generalizing to Arbitrary $\psi = \frac{\pi}{n}$

We can generalize the evaluation of the series $S_n = \sum_{k=0}^{\infty} \frac{\sin\left((2k+1)\frac{\pi}{n}\right)}{(2k+1)^2}$ for any integer $n$ by connecting it to the **Trigamma function**, $\psi'(z) = \sum_{m=0}^{\infty} \frac{1}{(m+z)^2}$.

By grouping the sum into odd residue classes $r$ modulo $2n$, we can factor out the denominators to match the Trigamma definition. Applying symmetry to halve the summation range, we arrive at a powerful generalized closed form:

$$S_n = \frac{1}{4n^2} \sum_{r=1, \text{odd}}^{n-1} \sin\left(\frac{r\pi}{n}\right) \underbrace{\left[ \psi'\left(\frac{r}{2n}\right) - \psi'\left(1 - \frac{r}{2n}\right) \right]}_{\Delta(r)}$$

Using this general formula, we can rigorously prove our previous result for $n=6$. The odd integers in the range are $r \in \{1, 3, 5\}$. 
By evaluating the $\Delta$ functions and applying the highly powerful **Multiplication Theorem** for the Trigamma function ($m=3$), the terms perfectly collapse:

* $\Delta(3) = 16G$
* $\Delta(1) + \Delta(5) = 160G$

Plugging these back yields exactly $S_6 = \frac{1}{288} [160G + 2(16G)] = \frac{2}{3}G$.

