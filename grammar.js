const grammar = String.raw`
Verbatim {
  Main = "<unused - override this in descendant grammars (:= instead of =)>"
  verbatimspace = lv verbatim+ rv spaces
  verbatim = 
    | lv verbatim+ rv -- nested
    | anychar         -- leaf
  anychar= ~lv ~rv any

  lv = "\u{00ab}" // "«"
  rv = "\u{00bb}" // "»"
}

Tester <: Verbatim {
  Main := (verbatimspace | ignore)+
  ignore = anychar
}
`;

