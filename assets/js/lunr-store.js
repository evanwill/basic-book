---
# create lunr store of book content 
layout: null
---
var store = [ 
    {% for item in site.documents %} 
    { 
        "url": {{ item.url | jsonify }},
        "title": {{ item.title | jsonify }},
        "text": {{ item.content | strip_html | replace: "\n"," " | jsonify }}
    }{%- unless forloop.last -%},{%- endunless -%}
    {%- endfor -%}
];