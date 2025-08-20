---
title: Example Credentials
---

<div class="ui warning message">

The Verifiable Credentials in this repository are primarily created for the
[Verifiable Credentials Playground](https://vcplayground.org/). Consequently,
they should _not_ be considered production ready credentials and they may be
missing many necessary production and stability focused features. Please only
use them for experimentation.

</div>

{% for example in examples %}
  * [{{ example[0] }}]({{ example[0]}}/)
{% endfor %}
