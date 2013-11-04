$(document).ready(function() {
	var stickyPanelSettings = {
		// Use this to set the top margin of the detached panel.
		topPadding: 0,

		// This class is applied when the panel detaches.
		afterDetachCSSClass: "",

		// When set to true the space where the panel was is kept open.
		savePanelSpace: true,

		// Event fires when panel is detached
		// function(detachedPanel, panelSpacer){....}
		onDetached: null,

		// Event fires when panel is reattached
		// function(detachedPanel){....}
		onReAttached: null,

		// Set this using any valid jquery selector to 
		// set the parent of the sticky panel.
		// If set to null then the window object will be used.
		parentSelector: null
	};
	$(".fixme").stickyPanel(stickyPanelSettings);

	$('.mask').click(function (e) {
		//testing events on cropped scans
		alert($(this).data('mask'));
	});
});