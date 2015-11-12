var OSC={}

OSC.html_escape = function(str) {
    
  var escaped = str
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

     return String(escaped);
};

OSC.html_unescape = function(str) {
    
  var unescaped = str
              .replace(/&amp;/g, '&')
              .replace(/&quot;/g, '"')
              .replace(/&#39;/g, '\'')
              .replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>');

      return String(unescaped);
}
