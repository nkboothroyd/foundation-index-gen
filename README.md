# Index-Gen: Index file generator for Foundation for Emails 2

This is a small node-based cli tool intended for use with Foundation for Emails 2. Once installed globally, you can:
*navigate to the folder containing your various email pages (usually src/pages/) in your foundation project,
*enter `indexgen` into the command line.
This will generate an index.html file built in inky syntax that can be used with the out-of-the-box index-layout or default layouts of Foundation for Emails 2. The index file will contain a list of named links to all of the pages it found in the current working directory that will be the first thing that pops up when browser-sync finishes loading up the localhost server. Makes testing multiple emails a good bit more pleasant.

## Install

This needs to be installed globally to work, so from the command line:

```npm i -g foundation-index-gen```

## Usage

Navigate to the folder that you are keeping your individual email files in (usually src/pages/) in the command line. Once there enter `indexgen`. If there was a previous index.html file, it will be replaced by this tool, so if you had any previous code there, you may want to back it up. Then run your Foundation build process as normal and the new index.html will show up when localhost:3000 boots up.
