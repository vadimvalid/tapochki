const observe = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      const img = entry.target;
      const src = img.dataset.src;

      requestIdleCallback(() => {
        img.src = src;
      });

      observer.unobserve(img);
    }
  });
};
const options = {
  // Add root here so rootBounds in entry object is not null
  root: document.body,
  threshold: 0.000001,
};

const observer = new IntersectionObserver(observe, options);
const images = document.querySelectorAll("img.lazy");
images.forEach((image) => observer.observe(image));
