(function(window, undefined) {
  var dictionary = {
    "38e8f93b-665e-4910-95a6-61e77f4179e9": "report_fragment",
    "0467ae13-7d42-4787-a117-13d2a659bdc3": "Start_intro_activity",
    "0dcd58b4-b467-45a3-9d4b-43ee9db80e7e": "calendar_fragment",
    "336e6bd2-2c2a-4646-95fc-86ce7bf2d7f8": "settings_fragment",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "timeslot_fragment",
    "70a5bdcd-2706-4564-94a3-29b1c26b3685": "add_timeslot_activity",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);