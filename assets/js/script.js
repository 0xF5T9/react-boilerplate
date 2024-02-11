var root = document.documentElement;

var isDisableHeader = getComputedStyle(root).getPropertyValue("--disable-header");
if (isDisableHeader == "")
    throw `Disable header variable not found.`;

if (isDisableHeader == "true" || isDisableHeader == "1") {
    var headerHeight = getComputedStyle(root).getPropertyValue("--header-height");
    if (headerHeight == "")
        throw `Header height variable not found.`;
    root.style.setProperty("--header-height", "0px")
    var headerElement = document.getElementById("header");
    if (headerElement == null)
        throw `Header element not found`;
    headerElement.style.display = "none";
}

console.log("All operations completed successfully.");