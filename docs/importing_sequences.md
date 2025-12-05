---
description: Learn how to import DNA sequences into OpenCloning from various sources including drag-and-drop files, AddGene, NCBI genome databases, and manual entry. Supports FASTA, GenBank, SnapGene, and ApE file formats.
---

# Importing sequences

You can load sequences into OpenCloning from many places. You can either drag-and-drop files, or use the import sequence form. If you want to load more than one sequence via sequence form, you can add more "lanes" by clicking on the + button.

<div markdown style="max-width: 500px" class="img-container">
![Animation showing how to add multiple sequence import lanes in OpenCloning](../assets/importing_sequences_add_lanes.gif)
</div>

## Loading your own files

### Drag-and-drop

The easiest way to load your files is to drag and drop your files into the application. You can drop:

* Multiple sequence files: FASTA (`.fasta`, `.fa`), GenBank (`.gb`, `.gbk`), SnapGene (`.dna`), ApE (`.ape`).
 > ⚠️ If a FASTA or GenBank file dropped contains multiple sequences, only the first one will be loaded.
* A single `.json` or `.zip` file containing a cloning strategy (see [exporting docs](./exporting.md#download-cloning-history)).

<div markdown style="max-width: 500px" class="img-container">
![Animation demonstrating drag-and-drop file import functionality in OpenCloning](../assets/importing_sequences_drop.gif)
</div>

### Use "Submit file"

You can load an individual file, by selecting "Submit file" in "Source type". This allows some extra options:

* If you tick the option `Circularize`, the sequence will be circularized. This can be useful if you are loading a plasmid from a FASTA file, where topology is not specified, or if you have a genbank file with a plasmid with wrong topology in the metadata.
* If you tick the option `Extract subsequence`, you can load a part of the sequence provided in the file by indicating the start and end positions. This is particularly useful if you are using a file that contains a large sequence, such as a chromosome.
* If the file contains multiple sequences, you will be able to select which one to load.

<div markdown style="max-width: 300px" class="img-container">
![Screenshot of sequence import form showing source type selection and options](../assets/importing_sequences_source.png)
</div>

### Use "File > Load cloning history from file"

If you want to load a `.json` or `.zip` file containing a cloning strategy, you can use the "File > Load cloning history from file" menu item.

<div markdown style="max-width: 200px" class="img-container">
![Screenshot showing File menu with Load cloning history from file option](../assets/importing_sequences_load_cloning_history.png)
</div>

## Loading sequences from a repository

OpenCloning can load sequences from multiple repositories. On `Source type`, select `Repository`, and choose from the list of available repositories.

* Some, like Addgene, will require you to provide an identifier. For Addgene, you can find that in the url of the plasmid page, for instance, in `https://www.addgene.org/39292/`, the id is `39292`.
* Others, like SEVA plasmids, will have a drop-down menu to select from options.

## Loading genome sequences from NCBI

On `Source type`, select `Genome Region`, which enables several options:

<div markdown style="max-width: 300px" class="img-container">
![Screenshot of genome region import form with species, assembly, and coordinate options](../assets/importing_sequences_genome_region.png)
</div>

* When using a reference genome, you can query by species and the reference genome assembly for that species will be used.
* If you are working with an assembly other than the reference genome, select `other assembly` and provide the assembly accession. To find your accession number, I recommend using the [NCBI datasets Genome page](https://www.ncbi.nlm.nih.gov/datasets/genome). You can type your species / taxon, and you will find all associated assemblies.
* If you select `Locus`, you will be able to use the genome annotation to find a locus of interest, for example querying by gene name. This relies on the annotation of the genome in the NCBI. If you can't find something, see if you can find it in the NCBI datasets Genome Annotation page for that assembly. For example, if you are working with assembly `GCA_000002945.3`, go to [https://www.ncbi.nlm.nih.gov/datasets/gene/GCA_000002945.3/](https://www.ncbi.nlm.nih.gov/datasets/gene/GCA_000002945.3/).
* If you select `Custom coordinates`, you will have to choose the chromosome or contig within the assembly, then select the start and end, and the strand (select `minus` if you want the reverse complement).
* If you want to use a sequence that is not part of an assembly (e.g. a viral genome), you can select `Custom coordinates in sequence accession`. Unfortunately so far you cannot query by annotation with this option.

!!! info "Problems with annotation?"

    If you can't find the annotation you expect in the assembly, it may be that the annotation is different in the RefSeq or GenBank genome 🔍. This is rare, but it can happen!

    For example, the GenBank genome `GCA_000744395.1` does not have annotations, but its equivalent RefSeq genome `GCF_000711245.1` does ✨. In a case like this, OpenCloning will give you a warning and suggest to use the RefSeq genome instead.

    However, RefSeq and NCBI assemblies may have different annotations, and in that case you won't get a warning. If you want to find the equivalent RefSeq / NCBI, use the NCBI datasets page by replacing the assembly accession in the url `https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_000711245/`. There, you will see both accessions! 🎯


## Manually adding sequences

On `Source type`, select `Enter manually`, and you will be able to add a sequence as text. It must only contain ACGT characters. You can choose whether the sequence is circular, and specify overhangs. Overhangs can contain positive and negative values. The following settings:

<div markdown style="max-width: 300px" class="img-container">
![Screenshot of manual sequence entry form with sequence text area and overhang options](../assets/importing_enter_manually.png)
</div>

Would produce the sequence below. For full documentation on the meaning of overhangs, check the meaning of `crick_ovhg` and `watson_ovhg` in the [pydna documentation](https://pydna-group.github.io/pydna/modules/pydna_all.html#pydna.all.Dseq.from_full_sequence_and_overhangs).

```
  ttttcat   
  |||||||   
tcaaaagtatag
```


