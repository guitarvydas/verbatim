const identity_fmt = String.raw`
Verbatim {
  Main [dontcare] = ‛’
  verbatimspace [lv verbatim+ rv ws] = ‛«lv»«verbatim»«rv»«ws»’
  verbatim_nested [lv verbatim+ rv] = ‛«lv»«verbatim»«rv»’
  verbatim_leaf [x] = ‛«x»’

  anychar [c] = ‛«c»’

  lv [c] = ‛«c»’
  rv [c] = ‛«c»’
}

Tester {
  Main [x+] = ‛«x»’
}
`;

const fmt = String.raw`
Verbatim {
  Main [dontcare] = ‛’
  verbatimspace [lv verbatim+ rv ws] = ‛«lv»«verbatim»«rv»«ws»’
  verbatim_nested [lv verbatim+ rv] = ‛«lv»«verbatim»«rv»’
  verbatim_leaf [x] = ‛«x»’

  anychar [c] = ‛«c»’
  ignore [x] = ‛’

  lv [c] = ‛«c»’
  rv [c] = ‛«c»’
}

Tester {
  Main [x+] = ‛«x»’
}
`;

