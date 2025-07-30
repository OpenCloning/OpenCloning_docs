## How the static site generator works

Full documentation on the theme and static site generator used (Material for MkDocs) can be found in the [official documentation](https://squidfunk.github.io/mkdocs-material/). Some very basic things are shown below

## Adding pages, and menu items

> **NOTE:** the markdown interpreter is a bit weird, specially with indentation, so sometimes things won't render as expected. Look at the existing examples, and always run the site locally to see how changes look.

* Create a markdown file inside the model `docs`.
* In the file `mkdocs.yml`, in the section `nav`, add an element to the list, the left side is what will appear in the menu, the right side is the markdown file it should link to.
* To create a nested menu, see the example `How to annotate`.

By default, pages come with a table of contents on the right side (see the [FAQs page](https://docs.opencloning.org/faqs/), that still has the table of contents). For other pages, it has been disabled adding this at the top of the markdown file:

```markdown
---
hide:
  - toc
---
```

The message banners like the one below:

<img width="605" alt="Screenshot 2023-09-29 at 09 33 45" src="https://github.com/pombase/canto_tutorial/assets/22526102/0cfe0aba-65a8-4153-bbd7-06e6526a0a26">

Are generated with the following code:

```markdown
<!-- Use ! if they are not foldable-->
!!! info "To make phenotype annotations, you need to add genotypes first: see [how to add genotypes](./genes_alleles_genotypes.md)"


<!-- Use ? if they are foldable-->
??? info "Banner title"
    foldable content
```

## Adding images and youtube videos

See the examples in the markdown files in the `docs` folder. Do not use `index.md` as the example, because the paths to things in that file work differently from others.

For a youtube video, replace the last bit of the url (`zyB7wpZypRQ` in the example below) by the id of the video. You can get this id from the youtube url, for instance, for the url `https://www.youtube.com/watch?v=K5DmS35mw40&t=268s&ab_channel=PomBase`, the id is `K5DmS35mw40`.

```html
<div class="video-sizer">
    <div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/zyB7wpZypRQ" frameborder="0" allowfullscreen></iframe>
    </div>
</div>
```

To set the size of images, the best solution I have found is below. Note the usage of the `markdown` attribute in the div, this is so that the markdown inside the div is rendered as markdown and not plain text.

<div markdown style="max-width: 400px">
      ![](assets/diploid_genotype.png)
</div>

## Adding a tip to the footer

The footer of the page shows random tips. The tips are defined in the file [extra.js]({{ config.repo_url }}/tree/master/docs/javascript/extra.js). Simply add a string to the `allMessages` array, and it will be ranomdly picked to be shown in the footer. Note how html is allowed inside, for the links. See that the internal links have the path starting from `{{ config.site_url }}`, so they will not point to the right place when running them locally.

## Formatting for search

Headers are useful when formatting for search. For instance, headers of level 3 (`###` in markdown), and show up on a search like this:

<img width="701" alt="Screenshot 2023-08-30 at 20 17 21" src="https://github.com/pombase/canto_tutorial/assets/22526102/351e4e47-11f0-4db2-89c2-b92ce78ab673">

## Adding style and javascript code

In the files `docs/javascript/extra.js` and `docs/stylesheets/extra.css`. They must be listed in `mkdocs.yml`.
