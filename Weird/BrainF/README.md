# Definion of BrainF

## Element

The language consists of eight commands. They are:

`>` : Increment the data pointer

`<` : Decrement the data pointer

`+` : Increment the byte at the data pointer

`-` : Decrement the byte at the data pointer

`,` : Accept one byte of input, storing in data pointer

`.` : Output the byte at the data pointer (ASCII)

`[` : If the byte at the data pointer is zero, jump forward to the matching `]`

`]` : If the byte at the data pointer is not zero,  go back to the matching `[`

## Loops

Use `[]` as loop. for example, use this program can print all ASCII chars.

```bf
+.[+.]
```
