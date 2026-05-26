const AMAZON_ASSOCIATE_TAG = "YOURTAG-20";

function amazonSearchUrl(query) {
  const params = new URLSearchParams({
    k: query,
    tag: AMAZON_ASSOCIATE_TAG,
  });
  return `https://www.amazon.com/s?${params.toString()}`;
}

document.querySelectorAll("[data-amazon-search]").forEach((link) => {
  const query = link.getAttribute("data-amazon-search");
  link.setAttribute("href", amazonSearchUrl(query));
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "sponsored noopener");
});
