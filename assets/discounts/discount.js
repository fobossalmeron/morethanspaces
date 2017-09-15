---
---
{% for disc in site.discounts %}
{
  "discountOn":"{{ disc.discount }}",
  "discountNumber":{{ disc.number }},
  "discountType":"{{ disc.type }}",
  "discountText":"{{ disc.text }}",
  "discountSmallText":"{{ disc.smallText }}",
  "discountBanner":"{{ dics.banner }}"
}
{% endfor %}
