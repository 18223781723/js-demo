Page({
	data: {},
	onLoad: function () {
		this.renderTable();
	},
	renderTable: function () {
		let html = '';
		for (let item of tableList) {
			html += `
			<tr>
				<td>${item.title}</td>
				<td>${item.description}</td>
				<td>${item.createDate}</td>
				<td><a href="${item.href}">detail</a></td>
			</tr>`;
		}
		document.getElementById('content').innerHTML = html;
	},
});
function Page(options) {
	options.onLoad();
}