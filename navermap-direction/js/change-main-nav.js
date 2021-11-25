goToMainPage.addEventListener("click", function () {
    // DESKTOP
    indexNav.classList.toggle(HIDDEN_CLASSNAME);
    MainNav.classList.toggle(HIDDEN_CLASSNAME);

    // MOBILE
    mainDesc.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    practiceArea.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    navHeader.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
});

goToIndexPage.addEventListener("click", function () {
    indexNav.classList.toggle(HIDDEN_CLASSNAME);
    MainNav.classList.toggle(HIDDEN_CLASSNAME);
});

mobileGoToIndexPage.addEventListener("click", function () {
    indexNav.classList.toggle(HIDDEN_CLASSNAME);
    MainNav.classList.toggle(HIDDEN_CLASSNAME);

    mainDesc.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    practiceArea.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    navHeader.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
});
