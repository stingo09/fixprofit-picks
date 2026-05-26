const AMAZON_ASSOCIATE_TAG = "fixprofitpick-20";

function amazonSearchUrl(query) {
  const params = new URLSearchParams({ k: query });
  if (AMAZON_ASSOCIATE_TAG && !AMAZON_ASSOCIATE_TAG.startsWith("YOUR")) {
    params.set("tag", AMAZON_ASSOCIATE_TAG);
  }
  return `https://www.amazon.com/s?${params.toString()}`;
}

document.querySelectorAll("[data-amazon-search]").forEach((link) => {
  const query = link.getAttribute("data-amazon-search");
  link.setAttribute("href", amazonSearchUrl(query));
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "sponsored noopener");
});
