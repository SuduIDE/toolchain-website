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
