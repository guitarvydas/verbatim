const src = String.raw`
a b 
«
  {
    run : function () {
      «var h = 'hello';»
        «
          var w = 'world';
        »
          «return (h + ' ' + w);»
    }
  }
»
c d
`;
const src_42 = String.raw`«42»`;
const src_nothing = String.raw`42`;
