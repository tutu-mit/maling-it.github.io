---
title: Archives
layout: page
order: 1
permalink: /archives/
desc: Kumpulan Archives
---
{% for ars in site.data.arsip.arsip %}
<details class="collapse-panel mt-5 w-full mw-full">
  <summary class="collapse-header">
    {{ ars.name }}
  </summary>
  <div class="collapse-content">
  	<ul class="arsip">
  		<li class="data">
  			Name: <span>{{ ars.name }}</span>
  		</li>
  		<li class="data">
  			type: <span>{{ ars.type }}</span>
  		</li>
  		<li class="data">
  			Description: <span>{{ ars.desc }}</span>
  		</li>
  		<li class="data">
  			Link: <span>{{ ars.link }}</span>
  		</li>
  	</ul>
  </div>
</details>
{% endfor %}