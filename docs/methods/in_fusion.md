# In-Fusion Cloning

## What is In-Fusion Cloning?

In-Fusion is an overlap-based assembly method that joins DNA fragments sharing short terminal homologies of at least 15bp. The principle is similar to [Gibson Assembly](./gibson.md):

- A 3'→5' exonuclease exposes single-stranded overhangs at the ends of the fragments
- Complementary overhangs anneal
- The product is transformed into bacteria that anneal and repair the fragments, producing a circular plasmid.

## How to plan In-Fusion using OpenCloning

Like any other cloning method, click on the plus icon below a sequence in the `Cloning` tab and select `In-Fusion Cloning`. Then, select the sequences to combine in the `Assembly inputs` field. OpenCloning evaluates adjacent fragments for sufficient homologous overlaps in the intended orientation and proposes valid assemblies.

<div markdown style="max-width: 700px" class="img-container">
![](../assets/methods/in_fusion.gif)
</div>

If you need to add overlaps by PCR before assembly, see [Primer design for Gibson assembly](../primer_design.md#primer-design-for-gibson-assembly). The same style of terminal overlaps is used for In‑Fusion.
