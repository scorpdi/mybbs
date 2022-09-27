
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
    return "<li component=\"topic/event\" class=\"timeline-event\" data-topic-event-id=\"" + 
      __escape(guard((context != null) ? context['id'] : null)) + 
      "\" data-topic-event-type=\"" + 
      __escape(guard((context != null) ? context['type'] : null)) + 
      "\">\n\t<div class=\"timeline-badge\">\n\t\t<i class=\"fa " + 
      (guard((context != null) ? context['icon'] : null) ?
        __escape(guard((context != null) ? context['icon'] : null)) :
        "fa-circle") + 
      "\"></i>\n\t</div>\n\t<span class=\"timeline-text\">\n\t\t" + 
      (guard((context != null) ? context['href'] : null) ?
        "\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          __escape(guard((context != null) ? context['href'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['text'] : null)) + 
          "</a>\n\t\t" :
        "\n\t\t" + 
          __escape(guard((context != null) ? context['text'] : null)) + 
          "\n\t\t") + 
      "\n\t\t&nbsp;\n\t</span>\n\t" + 
      (guard((context != null) ? context['user'] : null) ?
        "\n\t\t" + 
          (guard((context != null && context['user'] != null) ? context['user']['system'] : null) ?
            "\n\t\t<span class=\"timeline-text\">[[global:system-user]]</span>&nbsp;\n\t\t" :
            "\n\t\t<span><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "xs", guard((context != null) ? context['true'] : null)])) + 
              " &nbsp; " + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
              "</a></span>&nbsp;\n\t\t") + 
          "\n\t" :
        "") + 
      "\n\t<span class=\"timeago timeline-text\" title=\"" + 
      __escape(guard((context != null) ? context['timestampISO'] : null)) + 
      "\"></span>\n\n\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['isAdminOrMod'] : null) ?
        "\n\t\t&nbsp;<span component=\"topic/event/delete\" data-topic-event-id=\"" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "\" data-topic-event-type=\"" + 
          __escape(guard((context != null) ? context['type'] : null)) + 
          "\" class=\"timeline-text pointer\" title=\"[[topic:delete-event]]\"><i class=\"fa fa-trash\"></i></span>\n\t" :
        "") + 
      "\n</li>\n\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
