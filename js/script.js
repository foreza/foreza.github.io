
$(() => {
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();


    generateProjectDisplayItems(projects);

});


function generateProjectDisplayItems(projects) {

    toAppend = "";

    for (var i = 0; i < projects.length; ++ i) {
        toAppend += generateCollapsibleItemDOM(projects[i]);
    }

    $("#project-list").append(toAppend);

}


function generateCollapsibleItemDOM(item){

    return `<li>
                <div class="collapsible-header">
                    <span class="header-link">${item.itemName}</span>
                    <span class="header-date">${item.yearDelivered}</span>
                </div>
                <div class="collapsible-body row">
                    <div class="col s12">
                        <p>${item.itemDetail}</p>
                        <p>${item.itemImpact}</p>
                        <p><b>Link: </b><a href="${item.extLink}">${item.extLink}</a></p>
                    </div>
                </div>
            </li>`

}