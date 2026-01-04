const listSearch = async (i18n: { no_result: string; num_result: string }) => {    
    const archiveList = document.getElementById('archive-list') as HTMLDivElement,
        listSearch = document.querySelector('#list-search') as HTMLElement,
        listSearchCount = listSearch.querySelector('p') as HTMLParagraphElement;

    if (!listSearch || !listSearch.dataset.json) return;

    const DATA_JSON = listSearch.dataset.json;
    type SearchData = {
        content: string;
        id: string;
        title: string;
    }
    const searchDataRaw = await fetch(DATA_JSON).then(res => res.json() as Promise<SearchData[]>);
    /// Transform title and content into lowercase
    const searchData = searchDataRaw.map(item => {
        return {
            ...item,
            content: item.content.toLowerCase(),
            title: item.title.toLowerCase()
        }
    });

    type Archive = {
        el: HTMLElement;
        pages: Set<HTMLElement>;
    };

    let archive: { [key: string]: Archive } = {};
    let pages: { [key: string]: HTMLElement } = {};

    for (const group of archiveList.querySelectorAll('.archives-group')) {
        const pageSet = new Set<HTMLElement>();

        for (const page of group.querySelectorAll('article')) {
            pageSet.add(page);
            pages[page.id] = page;
        }

        archive[group.id] = {
            el: group as HTMLElement,
            pages: pageSet
        };
    }

    const display = (el: HTMLElement, show: boolean) => {
        if (show) {
            el.style.removeProperty('display');
        } else {
            el.style.display = 'none';
        }
    };

    const showAll = () => {
        for (const page of Object.values(pages)) {
            display(page, true);
        }

        for (const group of Object.values(archive)) {
            display(group.el, true);
        }
    }

    const search = (keyword: string) => {
        keyword = keyword.trim().toLowerCase();
        if (!keyword || keyword == "") {
            showAll();
            display(listSearchCount, false);
            return;
        }

        const searchResult = searchData.filter(item => {
            return item.title.includes(keyword) || item.content.includes(keyword);
        });

        const searchResultId = new Set(searchResult.map(item => item.id));
        for (const group of Object.values(archive)) {
            let hasMatch = false;
            for (const page of group.pages) {
                hasMatch = hasMatch || searchResultId.has(page.id);
                display(page, searchResultId.has(page.id));

            }
            display(group.el, hasMatch);
        };

        display(listSearchCount, true);
        if (searchResult.length == 0) {
            listSearchCount.innerText = i18n.no_result.replace('{keyword}', keyword);
        } else {
            listSearchCount.innerText = i18n.num_result.replace('{count}', searchResult.length.toString()).replace('{keyword}', keyword);
        }
    }

    const searchInput = listSearch.querySelector('input') as HTMLInputElement;
    searchInput.addEventListener('input', (e) => {
        const keyword = (e.target as HTMLInputElement).value;
        search(keyword);
    });
}

export default listSearch;