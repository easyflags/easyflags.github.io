function logElementEvent(eventName, element) {
	function formatDate(date) {
		let d = new Date(date);
		
		d_array = [
			'0' + d.getHours(),
			'0' + d.getMinutes(),
			'0' + d.getSeconds(),
		].map(component => component.slice(-2)); 
		d_array.push(d.getMilliseconds());
		// соединить компоненты в дату
		return d_array.slice(0, 4).join(':');
	}
	console.log(formatDate(Date.now()), eventName, element.getAttribute("data-src"));
}

var callback_error = function (element) {
	logElementEvent("💀 ERROR", element);
};

var ll = new LazyLoad({
	threshold: 0,
	// Assign the callbacks defined above
	callback_error: callback_error
});