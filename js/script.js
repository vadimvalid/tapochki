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

const observer = new IntersectionObserver(observe);
const images = document.querySelectorAll("img.lazy");
images.forEach((image) => observer.observe(image));
