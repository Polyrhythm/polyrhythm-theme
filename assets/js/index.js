(function ($) {
    "use strict";

    $(document).ready(function(){
      $(' code').each(function(i, e) {
        hljs.highlightBlock(e);
      });
    });

}(jQuery));
