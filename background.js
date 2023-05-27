async function toggleTheme(tab) {
    try {
        await browser.scripting.executeScript({
            target: {
                tabId: tab.id,
            },
            func: () => {
                document.body.classList.toggle("theme-amoled");
            },
        });
    } catch (err) {
        console.error(`failed to execute script: ${err}`);
    }
}

browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
    if (tab.url != undefined) {
        browser.pageAction.show(tab.id);
    }
});

browser.pageAction.onClicked.addListener(toggleTheme);