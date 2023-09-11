# R&D Toolchain website

Sources for R&D Toolchain website. 

## Build

Install [Jekyll](https://jekyllrb.com/docs/installation/)

Website can be built with one of two configurations:
* public
* internal

#### Public
Run `build-scripts/build-public.sh`.

#### Internal

Internal build configuration enables internal content that is mounted from other Git repository.

1. Clone Git repository `toolchain-website-internal` into root folder. Ask for correct link from Sudu team leads.
2. Run `build-scripts/mount-internal.sh` to mount internal content.
3. Run `build-scripts/build-internal.sh`.

Build output will be in [_site](_site) folder

## Edit website content

List of RnD toolchain projects is stored in [_projects](_projects) folder.

### Edit oproperties

Project properties are stored in [Jekyll Front Matter](https://jekyllrb.com/docs/step-by-step/03-front-matter/) at the top of every project page.

```
---
title: Project title
description: Project description
permalink: /projects/project.html
---
```
and can be used inside the page:

```
{{ page.title }}
```
Mandatory project properties:
* title
* descripton

See [Jekyll documentation](https://jekyllrb.com/docs/variables/)

### Add internal content

To insert content that should be rendered only in `internal` build mode use the following syntax:
```
{% if jekyll.environment == "internal" %}
Internal content goes here
{% endif %}
```

### Split content

Parts of page can be extracted into shared files stored in [_includes](_includes) folder.

1. Put `.md` or `.html` file in [_includes](_includes) folder
2. Insert content into page: ```{% include <name>.md %}```

See [Jekyll documentation](https://jekyllrb.com/docs/includes/). 

### Insert image

1. Put image into [assets/images](assets/images) folder
2. Reference image:
   * in Markdown file: ```![Image title](/assets/images/image.jpg)```
   * in HTML file: ```<img src=>```

See [Jekyll documentation](https://jekyllrb.com/docs/step-by-step/07-assets/)
