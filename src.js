const src = String.raw`
a b 
«
  {
    run : function () {
      var h = 'hello';
        «
          var w = 'world';
        »
          «return (h + ' ' + w);»
    }
  }
»
c d
`;
const simple_src = String.raw`"abc"`;
