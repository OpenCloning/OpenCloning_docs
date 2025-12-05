---
description: Complete guide to restriction and ligation cloning in OpenCloning. Learn how to cut DNA with restriction enzymes and ligate fragments with complementary overhangs.
---

# Restriction / Ligation

## What is restriction and ligation cloning?

Restriction and ligation cloning is a one of the first cloning methods used in molecular biology. It is a two step process:

1. **Restriction:** The DNA is cut with a restriction enzyme, which is a protein that cuts the DNA at specific sequences, often leaving an overhang or sticky end.
2. **Ligation:** Cut DNA fragments with complementary overhangs come together, and then a ligase joins the nick between the fragments.


<div markdown style="max-width: 500px" class="img-container">
<img src="https://cdn.kastatic.org/ka-perseus-images/549bca00b56675da6bddc24ee6f58eb80bc97652.png" alt="Restriction and ligation cartoon" />
<div markdown class="img-footer">
Adapted from [Khan Academy](https://www.khanacademy.org/test-prep/mcat/biomolecules/dna-technology/a/restriction-enzymes-dna-ligase) under [CC BY-NC-SA 3.0 license](https://creativecommons.org/licenses/by-nc-sa/3.0/us/).
</div>
</div>

Golden Gate Assembly relies on restriction and ligation, read more about it [here](./golden_gate.md).

## How to plan restriction and ligation in a single step using OpenCloning?

{%
    include-markdown "./golden_gate.md"
    start="<!--description-start-->"
    end="<!--description-end-->"
%}

## How to separately perform restriction and ligation using OpenCloning?

You can separate the restriction and ligation steps into two different reactions. This can be useful if:

* You want to make sure you are picking the right subfragment of DNA for ligation.
* You want to use a restriction fragment for something else. For instance, to transform a cell.

For that, click on the plus icon below a sequence in the `Cloning` tab and select `Restriction`. Then, select the input sequences in the `Restriction inputs` field, as well as the enzyme you want to use (you can use more than one). If there are multiple products from the restriction, you will be shown a selector like below. Select the product you want to use and click `Choose product`.

<div class="row" style="display: flex; justify-content: center; align-items: center;">
    <div class="col-md-6">
        <img src="/assets/methods/restriction_figure.png" alt="Restriction figure" class="img-fluid" style="max-width: 300px;" />
    </div>
    <div markdown class="col-md-6">
    <ol>
        <li>Click on the arrows to select between products</li>
        <li>First sequence viewer shows parent sequence</li>
        <li>The subfragment is highlighted in the parent sequence viewer</li>
        <li>Second sequence viewer shows the subfragment</li>
        <li>The overhangs (if any) are shown below the second sequence viewer</li>
    </ol>
    </div>
</div>

## Extra info

If you want to design primers with restriction sites, see the [primer design](../primer_design.md) page.

