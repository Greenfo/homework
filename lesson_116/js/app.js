(function () {
    /// burger

    document.addEventListener('click',  burgerInit)
    function burgerInit(e){

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')   
        
        if (document.documentElement.clientWidth > 900) return
        if (!burgerIcon && !burgerNavLink) return

        document.body.classList.toggle('body--opened-menu')
    }

    /// modal

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__image-button')

    modal.addEventListener('click' , modalCLose)
    modalButton.addEventListener('click' , modalOpen)

    function modalOpen(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }
    function modalCLose(e) {
        e.preventDefault()

        target = e.target

        if (target.closest('.modal__cancel') || target.contains(modal)) {
            document.body.classList.remove('body--opened-modal')
        }
    }

    /// tabs
    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e){
        const tabControl = e.target.closest('.tab-controls__link')

        if(!tabControl) return
        e.preventDefault()
        if(tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentId = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentId)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        
        if(activeContent){
            activeContent.classList.remove('tab-content--show')
        }
        if(activeControl){
        activeControl.classList.remove('tab-controls__link--active')
        }
        
        tabContent.classList.add('tab-content--show')
        tabControl.classList.add('tab-controls__link--active')
    }

    // accordion

    const accordoinLists = document.querySelectorAll('.accordion-list__control')

    // document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px'

    accordoinLists.forEach(el =>{
        el.addEventListener('click' , (e) =>{
            
            const accordionControl = e.target.closest('.accordion-list__control')

            const accordionOpenedItem = document.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = document.querySelector('.accordion-list__item--opened .accordion-list__content')

            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened')
                accordionOpenedContent.style.maxHeight = null
            }

            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null
            }
        })
    })
})()
