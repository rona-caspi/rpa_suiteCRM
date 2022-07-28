(function isApplicationMatch() {
    const isApplicationMatched =  window.location.href.startsWith("https://suitecrm.jacadademos.com/");
    console.log(`Is SuiteCRM application matched - ${isApplicationMatched}`);
    return isApplicationMatched;
})();