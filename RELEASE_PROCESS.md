# Release Process 

Crayons will be having 3 branches:

1) **master** - release branch
2) **next** - pre-release branch (experimental branch)
3) **canary** - dev branch

**Steps**:

1. Any new PRs will be merged to the `canary` branch after approval. Feature, refactor, and bug fix branches are created from `canary`

3. **Weekly pre-release**

   1. The `canary` branch will be merged to the `next` branch.
   2. The `next` branch will be used for pre-release. (3.1.1-beta.1).
   3. It will be published to npm with dist-tag as `next` - 3.1.1-beta.1@next.

4. **Stable release**
   1. The `next` branch will be merged to the `master` branch.
   2. The pre-release version will be graduated to a stable release version (3.1.2).
   3. It will be published to npm with dist-tag as `latest` - 3.1.2

The above release process is described as below:

<img alt="Release Process" src=".github/assets/crayons-release.svg">