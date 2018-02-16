---
layout: notfound
title: Status of indexes
permalink: /mts_status/
---

<header id="pageNotFound">
<h2>Total of: {{ site.services.size }} Service Landing Pages</h2>
<ul class="mts_status">
  {% assign sorted_services = site.services | sort: 'title' %}
  {% for service in sorted_services %}
  <li>
  <h4>{{service.title}}</h4>
  <span><a href="{{service.url}}">{{service.url}}</a></span>
  <p> {{service.meta_description}}</p>
  <img src="../assets/img/services/{{service.image}}"> 
  </li>
  {% endfor %}
</ul>
<br><br><br>
<h2>Total of: {{ site.conventions.size }} Convention Landing Pages</h2>
<ul class="mts_status">
  {% assign sorted_conventions = site.conventions | sort: 'title' %}
  {% for convention in sorted_conventions %}
  <li>
  <h4>{{convention.title}}</h4>
  <span>{{convention.url}}</span>
  <p> {{convention.meta_description}}</p>
  <img src="../assets/img/conventions/{{convention.logo}}"> 
  </li>
  {% endfor %}
</ul>
</header>
