(function(window, undefined) {
  var dictionary = {
    "4be65b05-1c9e-494f-9955-f2d8dca3c8c0": "Settings",
    "b56c4295-dd0e-4567-89dc-16af9faa6e32": "Analytics",
    "c24b10b7-5b16-48d4-a659-09d57c03d5ca": "Discount Cards ",
    "aff69ef9-6175-4124-9ba4-ddcdcf978581": "Success",
    "5c3309fe-b3d5-4fc4-9a8e-cc5db91de002": "Updating",
    "eb8640fd-e3d1-410b-bc95-98cce25462f5": "Calculator cash page",
    "81cb6109-9723-4243-9fea-06e6bd242ab3": "Accounts",
    "98c2eb22-569f-44be-ac97-0d9398897c56": "Add cash",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "b2a50fe9-ea7e-4bed-9980-b41e5085054a": "Loyal Card Page",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "c3dd0131-f40d-41a3-834d-eb438a801e08": "clean",
    "5cd856b6-288d-45fa-9f23-eaaf559e047d": "naviation",
    "687199c2-9186-4112-8c34-7332ca36e33e": "menu",
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