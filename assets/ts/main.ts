const lazyLoad = () => {
    const lazyloadWrappers = document.querySelectorAll('.lazyload-wrapper') as NodeListOf<HTMLDivElement>;

    let observer = new IntersectionObserver(entries => {
        if (!entries.length) return;

        for (const entry of entries) {
            if (!entry.isIntersecting) continue;

            /// Intersecting now. Load the image.
            const image = entry.target.querySelector('img') as HTMLImageElement;
            const wrapper = entry.target as HTMLDivElement;
            if (!image.dataset.src && !image.dataset.srcset) {
                image.classList.add("loaded");
                wrapper.classList.add('loaded');
                continue;
            }

            /// Create a new image object to load
            const imageTemp = new Image;
            imageTemp.src = image.dataset.src;

            if (image.dataset.srcset) imageTemp.srcset = image.dataset.srcset;

            imageTemp.onload = () => {
                /// Change original image object src
                if (image.dataset.src) {
                    image.src = image.dataset.src;
                    delete image.dataset.src;
                }

                if (image.dataset.srcset) {
                    image.srcset = image.dataset.srcset;
                    delete image.dataset.srcset;
                }
                image.classList.add("loaded");
                wrapper.classList.add('loaded');
            }

            observer.unobserve(image);
        }
    });

    for (const wrapper of lazyloadWrappers) {
        observer.observe(wrapper);
    }
};

const initTOC = () => {
    const toc = document.querySelector('.table-of-contents');
    if (!toc) return;

    const header = toc.querySelector('.toc-header');
    if (!header) return;

    header.addEventListener('click', () => {
        toc.classList.toggle('collapsed');
    });
};

document.addEventListener("DOMContentLoaded", () => {
    lazyLoad();
    initTOC();
});