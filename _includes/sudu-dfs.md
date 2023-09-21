Distributed file system service optimized for IDE usage.

## Immutable file system snapshots

Directory structure and files contents are accessible as immutable consistent
snapshots of data. Distributed file system stores only changed files between
neighbour snapshots. Snapshots are ready-to-use for immediate switching to.

## Non-linear history

Immutable snapshots are organized in a non-linear history with branching which
doesn't certainly reflect external branching. Distributed file system can build
history tree suitable for its own needs in order to provide better user experience,
e.g., during population of huge git repos.

## Content de-deduplication

Distributed file system supports content de-duplication out of the box. Same contents
of different files even in different projects do not waste cloud storage space.
De-duplication lets detecting unchanged files even if they claimed as changed.

## Custom metadata storage

Distributed file system service provides rich tagging API for marking/searching for
projects/repos and particular snapshots. One can tag a snapshot with a tag or unique
tag, search for a snapshot by tag or by tag prefix.

## Snapshot contexts

Distributed file system service allows to define an isolated view on a filesystem in
some _context_. Snapshot contexts can be used to storing auxiliary files (build files,
generated files, indices, etc.) related and associated with particular file system snapshot.
 
## Continuous sync with external git repositories

Special git-syncer service creates new file system snapshots associated with git commits.  

![dfs-arch-scheme]({{ "/assets/images/sudu/dfs-arch-scheme.png" | relative_url }})

Can be integrated to development workflow via VsCode extension or FUSE driver.

![dfs-vscode]({{ "/assets/images/sudu/dfs-vscode.png" | relative_url }})

![dfs-fuse]({{ "/assets/images/sudu/dfs-fuse.png" | relative_url }})

