/**
 *
 * @param e
 * @param setActiveTabContent
 * @param setActiveClass
 */
export default function(e, setActiveTabContent, setActiveClass) {
    let elem = e.target;
    console.log(elem,id,current)
    let id = parseInt(elem.getAttribute('data-id'));
    let current = document.querySelector('#tab-link_'+id);
    if(current.classList.contains('active')) {
        setActiveTabContent(null);
        setActiveClass(null);
    } else {
        setActiveTabContent(id);
        setActiveClass(id);
    }
}
