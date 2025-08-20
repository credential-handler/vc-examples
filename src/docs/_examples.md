---
pagination:
  data: examples
  alias: example
  size: 1
permalink: /docs/{{ example }}/
---

[< Back](/docs/)

{% if examples[example].readme.length > 0 %}
{{ examples[example].readme | renderContent }}
{% else %}
# {{ example | replace: '-', ' ' |  capitalize }}
{% endif %}

## Credential

<div class="ui fluid input">
  <textarea rows="10">{{ examples[example].credential | json: 2 }}</textarea>
</div>

## Queries

<div class="ui fluid input">
  <textarea rows="10">{{ examples[example].queries | json: 2 }}</textarea>
</div>
