$("#MenuLine").on("mouseenter", "li", function (e) {
	let MenuClicked = $(this);
	ShowTopMenu(MenuClicked);
});

$("#MenuLine").on("click", "li", function (e) {
	let MenuClicked = $(this);
	ShowTopMenu(MenuClicked);
	ClickFirstEntry(MenuClicked);
});

function ClickFirstEntry(MenuClicked) {
	let MenuPanelID = MenuClicked.attr("id") + "Panel";
	let FirstMenuUrl = $("#" + MenuPanelID + " a").first();
	if (FirstMenuUrl.length > 0) {
		let url = FirstMenuUrl.attr("href");
		if (url.length > 0) {
			window.location.href = url;
		}
	}
}

$("#MenuArea").on("mouseleave", function (ev) {
	FadeTopMenu(ev);
});

function ShowTopMenu(MenuClicked) {
	let MenuPanelID = MenuClicked.attr("id") + "Panel";
	$("#MenuLine li").removeClass("Selected");
	$("#MenuLine li#" + MenuClicked.attr("id")).addClass("Selected");

	$("#MenuToolbar .menuPanel").hide();
	$("#MenuToolbar").show();
	$("#MenuToolbar #" + MenuPanelID).show();
}

function FadeTopMenu(ev) {
	let newTarget = ev.relatedTarget;
	let PageY = ev.pageY;

	//Shouldn't be needed but getting some spurious mouseleave events while moving in the menu area
	if (PageY < 147 && PageY > 35) {
		return;
	}

	$("#MenuToolbar").slideUp(400);
	$("#MenuLine li").removeClass("Selected");
}

// alert("hello");