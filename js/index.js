Page({
	data: {
		pageSize: 20,
		pageIndex: 1,
		pageTotal: 1,
		lastPageIndex: 1,
		content: document.getElementById('content'),
		prev: document.querySelector('.pagination-prev'),
		next: document.querySelector('.pagination-next'),
		total: document.querySelector('.pagination-total'),
		input: document.querySelector('.pagination-input')
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
		let length = Math.trunc(tableList.length / this.data.pageSize);
		if (tableList.length % this.data.pageSize !== 0) {
			length += 1;
		}
		this.data.pageTotal = length;
		this.data.total.innerHTML = length;
		if (length === 1) {
			this.data.next.disabled = true;
		}
	},
	/**
	 * 绑定事件
	 */
	bindEvent: function () {
		const self = this;

		self.data.prev.addEventListener('click', function (e) {
			self.data.next.disabled = false;
			if (self.data.pageIndex > 1) {
				self.data.pageIndex--;
				if (self.data.pageIndex === 1) {
					this.disabled = true;
				}
			}
			self.data.input.value = self.data.pageIndex;
			self.renderTable();
		});

		self.data.next.addEventListener('click', function (e) {
			self.data.prev.disabled = false;
			if (self.data.pageIndex < self.data.pageTotal) {
				self.data.pageIndex++;
				if (self.data.pageIndex === self.data.pageTotal) {
					this.disabled = true;
				}
			}
			self.data.input.value = self.data.pageIndex;
			self.renderTable();
		});

		self.data.input.addEventListener('keydown', function (e) {
			if (e.keyCode === 13) {
				const index = Number(this.value);
				if (index !== self.data.pageIndex && index >= 1 && index <= self.data.pageTotal) {
					self.data.prev.disabled = false;
					self.data.next.disabled = false;
					if (index === 1) {
						self.data.prev.disabled = true;
					} else if (index === self.data.pageTotal) {
						self.data.next.disabled = true;
					}
					self.data.pageIndex = index;
					self.renderTable();
				} else {
					this.value = self.data.pageIndex;
				}
			}
		});
	}
});
function Page(options) {
	options.onLoad();
}