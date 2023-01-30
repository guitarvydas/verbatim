# Demo of Verbatims
run: make

The source file contains bits of JavaScript as Verbatims.

This demo macro-processes the file, then strips the Verbatim brackets.

It is imagined that a compiler could be built as a pipeline that incrementally produces code and inserts the generated code snippets into the pipeline stream as Verbatims.

Verbatims are like spaces - ignored by the parser, but, unlike spaces, not deleted.  The final result is a file of glued-together bits of code - mostly as Verbatim pieces - which can then be stripped and run.

Ohm-JS - PEG - makes it possible to build parsers that skip over certain items recursively without deleting them.

Unicode makes it possible to devote a certain pair of characters for bracketing Verbatims, and nothing else.  ASCII has to few characters to allow such extravagance.