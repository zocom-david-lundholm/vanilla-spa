const pages = {
    'page-1': {
        element: document.querySelector('.page-1'),
        title: 'Page 1'
    },
    'page-2': {
        element: document.querySelector('.page-2'),
        title: 'Page 2'
    },
    'page-3': {
        element: document.querySelector('.page-3'),
        title: 'Page 3'
    },
}

function initNavigation(){
    const keys = Object.keys(pages)
    const nav = document.querySelector("nav")
    for(let pageKey of keys){
        const pageObject = pages[pageKey]
        let anchor = document.createElement("a")
        anchor.addEventListener("click", () => {
            renderView(pageKey)
        })
        anchor.innerText = pageObject.title
        nav.append(anchor)
    }
}

function renderView(page){
    if(!pages[page]){ throw new Error('Page not found')}
    const pageObjects= Object.values(pages)
    for(let page of pageObjects){
        page.element.classList.add("hidden")
    }
    pages[page].element.classList.remove("hidden")
}

function init(){
    initNavigation()
    renderView('page-1')
}
init()