---
title: "The Geometry of Echoes: Solving Savchenko 1.1.18"
summary: "Determining the displacement of a vehicle relative to a moving sound wavefront using vector geometry and the law of cosines."
date: 2026-02-17
authors:
  - me
tags:
  - Physics
  - Kinematics
  - Applied Mathematics
# Enable LaTeX rendering
math: true
cover:
  image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000"
  caption: 'Kinematic Analysis and Wave Propagation'
  overlay:
    enabled: true
    type: "gradient"
    opacity: 0.4
---

In my career as an **Applied Mathematician (UBA)** and **AI Architect**, I have learned that classic physics problems often hide geometric elegances that "brute force" methods tend to overlook. Today, we analyze problem **1.1.18*** from the renowned I.E. Savchenko, a kinematics challenge that demands precise handling of wave propagation and vector geometry.

## The Problem

> A car moves with speed $v$ away from a long wall, moving at an angle $\alpha$ to it. At the moment when the distance to the wall equals $l$, the driver gives a short beep. How far will the car travel before the chauffeur hears the echo? The speed of sound in the air is $c$.

![asdfasf](./statement.png)



## Geometric Interpretation

To solve this, we must identify the precise moment the sound wavefront, after reflecting off the wall, intersects the trajectory of the car. Instead of dealing with reflections directly, we can use the **method of images**. 


Imagine a "virtual source" of sound located behind the wall. The distance the sound travels to the wall and back to the car is equivalent to the straight-line distance from this virtual source to the point where the car receives the echo.

### 1. Setting up the Coordinate System

Let the point where the beep is emitted be $P_0$. At this moment, the distance to the wall is $l$. 
* The car travels a distance $s$ at speed $v$.
* The sound travels a total distance $ct$ at speed $c$.
* Since the time $t$ is the same for both: $t = s/v$, meaning the sound travels a distance $D = \frac{c}{v}s$.

![](./image_method.png)

### 2. Applying the Law of Cosines

Let $P_1$ be the position of the car when it hears the echo. We can construct a triangle between:
1.  The image of the initial position ($P_0'$) across the wall.
2.  The initial position $P_0$.
3.  The final position $P_1$.

The distance between $P_0$ and its image $P_0'$ is $2l$ (perpendicular to the wall). The angle between the car's path and the perpendicular to the wall is $(\pi/2 - \alpha)$. Therefore, the angle $\theta$ between the segment $P_0 P_0'$ and the car's path $P_0 P_1$ is:
$$\theta = \pi - (\pi/2 - \alpha) = \pi/2 + \alpha$$

Using the Law of Cosines in the triangle $\triangle P_0' P_0 P_1$:

$$(ct)^2 = s^2 + (2l)^2 - 2s(2l)\cos(\pi/2 + \alpha)$$



### 3. Solving for the Displacement $s$

Recalling that $\cos(\pi/2 + \alpha) = -\sin \alpha$ and substituting $t = s/v$:

$$\left(\frac{cs}{v}\right)^2 = s^2 + 4l^2 + 4sl \sin \alpha$$

Rearranging into a quadratic equation for $s$:

$$s^2 \left( \frac{c^2}{v^2} - 1 \right) - 4sl \sin \alpha - 4l^2 = 0$$

Multiplying by $v^2$ to simplify:

$$s^2(c^2 - v^2) - 4slv^2 \sin \alpha - 4l^2v^2 = 0$$

Using the quadratic formula $s = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ and taking the positive root:

$$s = \frac{4lv^2 \sin \alpha + \sqrt{16l^2v^4 \sin^2 \alpha + 16l^2v^2(c^2 - v^2)}}{2(c^2 - v^2)}$$

Simplifying the expression inside the square root:
$$\sqrt{16l^2v^2 [v^2 \sin^2 \alpha + c^2 - v^2]} = 4lv \sqrt{c^2 - v^2(1 - \sin^2 \alpha)} = 4lv \sqrt{c^2 - v^2 \cos^2 \alpha}$$

## Final Solution

Factoring out the common terms, we arrive at the final displacement:

$$\boxed{s = \frac{2lv(v \sin \alpha + \sqrt{c^2 - v^2 \cos^2 \alpha})}{c^2 - v^2}}$$

This result demonstrates how the car's speed and the angle of departure relative to the wall dictate the delay of the echo.