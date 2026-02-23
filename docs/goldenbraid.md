---
description: Learn how GoldenBraid, a popular modular cloning syntax generally used in plants, works.
---

# Understanding GoldenBraid Assembly

GoldenBraid is a modular cloning syntax generally used in plants. The first time you use it, it may take a second to understand how it works. This page aims to help with that, and how to use it in OpenCloning.


## GoldenBraid parts

GoldenBraid parts are domesticated into vectors related to [pUPD](https://www.addgene.org/68161/). Their main feature is that they have two type IIS restriction sites (for `BsaI` and `BtgZI`) flanking the part, so regardless of which enzyme you use to cut the vector, you get the same overhangs (`1234` and `5678` in the example below).

<div markdown style="max-width: 800px" class="img-container">
![Diagram showing the GoldenBraid vector structure](../assets/goldenbraid/parts.png)
<div markdown class="img-footer">
Adapted from [10.1104/pp.113.217661](https://doi.org/10.1104/pp.113.217661)
</div>
</div>

## GoldenBraid Backbones and sequential assembly

* GoldenBraid is a "binary" assembly system, basically meaning that you assemble two things at a time.
* Backbones are classified into categories:
    * alpha / omega:
        * alpha has kanamycin resistance, and you use BsaI to clone into it.
        * omega has streptomycin resistance, and you use BsmBI (and BtgZI for TU, see below) to clone into it.
    * 1 / 2:
        * 1 will be on the left side of the assembly, and 2 will be on the right side.
    * R / not R (reversed, not reversed).
        * The R indicates that the Transcription Unit (TU) is reversed.

Not all kits support TU cloning into alpha and omega, for example.