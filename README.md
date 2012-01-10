# rsxgl-samples

This is a collection of sample programs for use with the
[RSXGL](http://github.com/gzorin/RSXGL) project.

The samples include:

* fluids - Jos Stam's stable fluids.
* glassview - 3D model viewer

## Building

This project requires the following:

* A PS3 homebrew development toolchain (such as
  [ps3toolchain](http://github.com/ps3dev/ps3toolchain)).
* The [PSL1GHT](http://github.com/ps3dev/PSL1GHT homebrew SDK.
* [RSXGL itself](http://github.com/gzorin/RSXGL).
* Some [third-party libraries](http://github.com/gzorin/rsxgl-samples).

With these different projects built, the following commands will build
the samples:

```
./configure
make
```

The result will be some NPDRM packages (.pkg files) built in each
sample's directory (e.g., src/fluids).
