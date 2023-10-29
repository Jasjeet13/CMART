let currentTab = 0;
const tabs = document.querySelectorAll('.tabs input[type="radio"]');
const tabCount = tabs.length;

function selectNextTab() {
    tabs[currentTab].checked = false;
    currentTab = (currentTab + 1) % tabCount;
    tabs[currentTab].checked = true;
}

// Change tabs every 5 seconds (5000ms)
setInterval(selectNextTab, 300);
