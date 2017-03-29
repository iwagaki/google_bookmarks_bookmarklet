javascript:(
  function() {
    var url = location.href;
    console.log(url);
    
    if (location.href.match(/http[s]:\/\/www\.amazon\..*\/dp\/([^\/]+)\/.*/) ||
        location.href.match(/http[s]:\/\/www\.amazon\..*\/ASIN\/([^\/]+)\/.*/) ||
        location.href.match(/http[s]:\/\/www\.amazon\..*\/product\/([^\/]+)\/.*/)) {
      url = "http://www.amazon.co.jp/gp/product/" + RegExp.$1 + "/";
    }

    var notes = (document.all)? document.selection.createRange().text : window.getSelection();
    if (notes != "") {
      if (document.all) {
        notes = encodeURIComponent('『' + notes + '』');
      } else {
        notes = encodeURIComponent('%E3%80%8E' + notes + '%E3%80%8F');
      }
    }

    var d = window.open("http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=" + encodeURIComponent(url) +
                        "&title=" + encodeURIComponent(document.title) +
                        "&annotation=" + notes,
                        "bkmk_popup",
                        "left=" + ((window.screenX || window.screenLeft) + 10) +
                        ",top=" + ((window.screenY || window.screenTop) + 10) +
                        ",height=550px,width=550px,resizable=1,alwaysRaised=1");

    window.setTimeout( function() {d.focus()}, 300);
  }
)()
