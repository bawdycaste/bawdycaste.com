# bawdycaste.com

hosted on github pages, built w/ [jekyll](https://jekyllrb.com/) and [bootstrap](https://getbootstrap.com).


## Virgins of the Night Photo

If you want to display the most recent photo of our virgins, set `virginsofthenight` to the url of the photo in `index.html`

```liquid
---
layout: main
last_modified_at: 2025/08/11
chat: false
newsletter: false
virginsofthenight: {{$URL-OF-PHOTO}}
---
```