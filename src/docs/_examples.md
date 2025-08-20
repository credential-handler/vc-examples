---
pagination:
  data: examples
  alias: example
  size: 1
permalink: /docs/{{ example }}/
---

[< Back](/docs/)

# {{ example }}

{% comment %}
Render example README here
{% endcomment %}

## Credential

<div class="ui fluid input">
  <textarea rows="10">{{ examples[example].credential | json: 2 }}</textarea>
</div>

## Queries

<div class="ui fluid input">
  <textarea rows="10">{{ examples[example].queries | json: 2 }}</textarea>
</div>
