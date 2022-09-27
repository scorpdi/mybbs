
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<label for=\"enableQuickSearch\">Enable Quick Search</label>\r\n<input type=\"checkbox\" class=\"form-control\" id=\"enableQuickSearch\" name=\"enableQuickSearch\" />\r\n\r\n<label for=\"showInControl\">Show In Control</label>\r\n<input type=\"checkbox\" class=\"form-control\" id=\"showInControl\" name=\"showInControl\" />\r\n\r\n<label for=\"defaultIn\">Default In</label>\r\n<select class=\"form-control\" id=\"defaultIn\" name=\"defaultIn\">\r\n\t<option value=\"titles\">[[search:titles]]</option>\r\n\t<option value=\"titlesposts\">[[search:titles-posts]]</option>\r\n\t<option value=\"posts\">[[global:posts]]</option>\r\n\t<option value=\"categories\">[[global:header.categories]]</option>\r\n\t<option value=\"users\">[[global:users]]</option>\r\n\t<option value=\"tags\">[[tags:tags]]</option>\r\n</select>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
