Page({
	data: {
		pageSize: 20,
		pageIndex: 1,
		pageLength: 1,
		content: document.getElementById('content'),
		pagination: document.querySelector('.pagination')
	},
	onLoad: function () {
		this.renderTable();
		this.renderPagination();
		this.bindEvent();
	},
	/**
	 * 渲染列表
	 */
	renderTable: function () {
		let html = '';
		let start = (this.data.pageIndex - 1) * this.data.pageSize;
		let end = this.data.pageIndex * this.data.pageSize;
		if (end > tableList.length) {
			end = tableList.length;
		}
		for (let i = start; i < end; i++) {
			html += `
			<tr>
				<td>${tableList[i].title}</td>
				<td>${tableList[i].description}</td>
				<td>${tableList[i].createDate}</td>
				<td><a href="${tableList[i].href}">detail</a></td>
			</tr>`;
		}
		this.data.content.innerHTML = html;
	},
	/**
	 * 渲染分页
	 */
	renderPagination: function () {
		let html = `<button type="button" data-index="prev" disabled>&lt;</button>`;
		let length = Math.trunc(tableList.length / this.data.pageSize);
		if (tableList.length % this.data.pageSize !== 0) {
			length += 1;
		}
		for (let i = 0; i < length; i++) {
			html += `<button type="button" data-index="${i + 1}"${i === 0 ? ' class="active"' : ''}>${i + 1}</button>`;
		}
		html += `<button type="button" data-index="next"${length === 1 ? ' disabled' : ''}>&gt;</button>`;
		this.data.pagination.innerHTML = html;
		this.data.pageLength = length;
	},
	/**
	 * 绑定事件
	 */
	bindEvent: function () {
		const self = this;
		this.data.pagination.addEventListener('click', function (e) {
			if (e.target.tagName === 'BUTTON' && e.target.className === '') {
				const index = e.target.dataset.index;
				const active = document.querySelector('button.active');
				const prev = document.querySelector('button[data-index="prev"]');
				const next = document.querySelector('button[data-index="next"]');
				active.classList.remove('active');
				if (index === 'prev') {
					next.disabled = false;
					if (self.data.pageIndex > 1) {
						active.previousElementSibling.classList.add('active');
						self.data.pageIndex--;
						if (self.data.pageIndex === 1) {
							prev.disabled = true;
						}
					}
				} else if (index === 'next') {
					prev.disabled = false;
					if (self.data.pageIndex < self.data.pageLength) {
						active.nextElementSibling.classList.add('active');
						self.data.pageIndex++;
						if (self.data.pageIndex === self.data.pageLength) {
							next.disabled = true;
						}
					}
				} else {
					e.target.classList.add('active');
					self.data.pageIndex = Number(e.target.dataset.index);
					if (self.data.pageIndex === 1) {
						prev.disabled = true;
						next.disabled = false;
					} else if (self.data.pageIndex === self.data.pageLength) {
						prev.disabled = false;
						next.disabled = true;
					} else {
						prev.disabled = false;
						next.disabled = false;
					}
				}
				self.renderTable();
			}
		});
	}
});
function Page(options) {
	options.onLoad();
}