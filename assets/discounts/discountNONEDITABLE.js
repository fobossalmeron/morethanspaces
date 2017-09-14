---
---


{% include_relative ./discounts.js %}
























{
  "discountOn":{% include {{ page.discount }} %},
  "discountNumber":{% include {{ page.number }} %},
  "discountType":"{% include {{ page.type }} %}",
  "discountText":"{% include {{ page.text }} %}",
  "discountSmallText":"{% include {{ page.smallText }} %}",
  "discountBanner":"{% include {{ page.banner }} %}"
}
