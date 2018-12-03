---
layout: page
title: Search
---

<input type="text" id="search" class="search-form" placeholder="Enter your search term..." aria-label="search">

<table id="results"></table>

<hr>

This page provides a basic fuzzy search of book content powered by [Lunr.js](https://lunrjs.com/)
(p.s. you can also try [Google CSE]({{ "/search/google.html" | absolute_url }})).
*Note: it may take a few seconds to load!* 

> Lunr Search Operators:
> 
> - Specific fields (e.g. title:foo, text:foo)
> - Wildcards (e.g. foo*, *oo)
> - Fuzzy match, helps with misspelling (e.g. foo~1)
> - Boost term (e.g. foo^10)

<script src="{{ '/assets/js/lunr.min.js' | absolute_url }}"></script>
<script src="{{ '/assets/js/lunr-store.js' | absolute_url }}"></script>
<script>
/* initialize lunr */
var idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('text')

  //this.pipeline.remove(lunr.trimmer)

  for (var item in store) {
    this.add({
      title: store[item].title,
      text: store[item].text,
      id: item
    })
  }
});

var searchInput = document.getElementById('search');
searchInput.onkeyup = function() {
  /* lunr search function */
  var query = document.getElementById('search').value;
  var resultdiv = document.getElementById('results');
  /* basic search that supports operators */
  var result = idx.search(query); 
  /* more fuzzy search, but doesn't support operators:
  var result =
    idx.query(function (q) {
      query.split(lunr.tokenizer.separator).forEach(function (term) {
        q.term(term, { boost: 100 })
        if(query.lastIndexOf(" ") != query.length-1){
          q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
        }
        if (term != ""){
          q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
        }
      })
    });*/
  resultdiv.innerHTML = "";
  resultdiv.innerHTML = '<p class="">' + result.length + ' Result(s) found</p>';
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem =
      '<tr>'+
          '<td class="">' +
            '<p class=""><a href="{{ site.baseurl }}' + store[ref].url + '">' + store[ref].title+ '</a></p>' +
            '<p class="">' +
            store[ref].text.substring(0,150) + '... </p></td>' +
      '</tr>';
    resultdiv.innerHTML += searchitem;
  }
}

</script>
