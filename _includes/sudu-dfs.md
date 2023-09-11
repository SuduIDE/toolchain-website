Distributed file system service optimized for IDE usage, supporting

* immutable filesystem snapshots 
* non-linear history 
* content de-deduplication 
* custom metadata storage 
* immediate switching between snapshots 
* contineous sync with external git repositories

![dfs-arch-scheme](/assets/images/sudu/dfs-arch-scheme.png)

Can be integrated to development workflow via VsCode extension or FUSE driver.

![dfs-vscode](/assets/images/sudu/dfs-vscode.png)

![dfs-fuse](/assets/images/sudu/dfs-fuse.png)

