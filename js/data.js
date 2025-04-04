const tableList = [
	{
		title: 'Canvas',
		description: 'Canvas缩放保持清晰度',
		href: 'html/canvas.html',
		createDate: '2025-03-28'
	},
	{
		title: 'verificationCodeInput',
		description: '验证码输入框',
		href: 'html/verificationCodeInput.html',
		createDate: '2022-09-20'
	},
	{
		title: 'ripple',
		description: '仿Material UI点击水波纹效果',
		href: 'html/ripple.html',
		createDate: '2022-07-13'
	},
	{
		title: 'pullToRefresh',
		description: '仿Ant Desgin Mobile UI下拉刷新',
		href: 'html/pullToRefresh.html',
		createDate: '2022-07-11'
	},
	{
		title: 'placeholderShown',
		description: 'input悬浮提示',
		href: 'html/placeholderShown.html',
		createDate: '2022-07-04'
	},
	{
		title: 'control',
		description: '旋转拖拽拉伸',
		href: 'html/control.html',
		createDate: '2022-06-14'
	},
	{
		title: 'affix',
		description: '图钉',
		href: 'html/affix.html',
		createDate: '2022-02-12'
	},
	{
		title: 'sticky',
		description: '粘贴定位',
		href: 'html/sticky.html',
		createDate: '2022-02-12'
	},
	{
		title: 'pickerTransition',
		description: 'picker选择器',
		href: 'html/pickerTransition.html',
		createDate: '2021-11-29'
	},
	{
		title: 'dragAndDrop',
		description: '拖拽排序，仿angular cdk',
		href: 'html/dragAndDrop.html',
		createDate: '2021-11-01'
	},
	/* 
	镜像翻转的逻辑暂未实现
	{
		title: 'ps transform',
		description: '仿ps变换操作',
		href: 'html/psTransform.html',
		createDate: '2021-10-19'
	}, */
	{
		title: 'div resize',
		description: 'div拖拽拉伸',
		href: 'html/divResize.html',
		createDate: '2021-10-12'
	},
	{
		title: 'my model',
		description: 'Object.defineProperty，Proxy实现简单双向绑定',
		href: 'html/myModel.html',
		createDate: '2021-09-16'
	},
	{
		title: 'draggable',
		description: '拖拽排序，仿Sortable.js',
		href: 'html/draggable.html',
		createDate: '2021-09-14'
	},
	{
		title: 'bounce',
		description: '滚动回弹',
		href: 'html/bounce.html',
		createDate: '2021-09-08'
	},
	{
		title: 'get transition value',
		description: 'js获取transition过渡期间的值',
		href: 'html/getTransitionValue.html',
		createDate: '2021-09-06'
	},
	{
		title: 'virtual scroll',
		description: '虚拟滚动列表，承载大量数据',
		href: 'html/virtualScroll.html',
		createDate: '2021-09-02'
	},
	{
		title: 'transition',
		description: '使用transition过渡translate，width，height。在微信浏览器中，动画存在抖动以及轨迹偏移的问题',
		href: 'html/transition.html',
		createDate: '2021-08-20'
	},
	{
		title: 'wheel rotate',
		description: '以鼠标位置为中心滚轮旋转图片',
		href: 'html/wheelRotate.html',
		createDate: '2021-08-20'
	},
	{
		title: 'particles',
		description: 'canvas 粒子特效',
		href: 'html/particles.html',
		createDate: '2021-08-11'
	},
	{
		title: 'wheel zoom',
		description: '以鼠标位置为中心滚轮缩放图片',
		href: 'html/wheelZoom.html',
		createDate: '2021-08-08'
	},
	{
		title: 'magnifier',
		description: '图片放大镜',
		href: 'html/magnifier.html',
		createDate: '2021-08-04'
	},
	{
		title: 'pinch',
		description: '双指缩放图片',
		href: 'html/pinch.html',
		createDate: '2021-08-02'
	},
	{
		title: 'async await',
		description: 'async await基本用法',
		href: 'html/asyncAwait.html',
		createDate: '2021-07-23'
	},
	{
		title: 'carousel',
		description: '轮播图',
		href: 'html/carousel.html',
		createDate: '2021-07-09'
	},
	{
		title: '3D photo',
		description: '3D旋转相册',
		href: 'html/3DPhoto.html',
		createDate: '2021-07-08'
	},
	{
		title: 'pointer event',
		description: '指针事件多触摸点实现',
		href: 'html/pointerEvent.html',
		createDate: '2021-07-07'
	},
	{
		title: 'message',
		description: '实现类似ant design全局提示信息',
		href: 'html/message.html',
		createDate: '2021-07-06'
	},
	{
		title: 'download file',
		description: '下载文件并重命名',
		href: 'html/downloadFile.html',
		createDate: '2021-07-01'
	},
	{
		title: 'cube',
		description: 'CSS3实现正方体',
		href: 'html/cube.html',
		createDate: '2021-06-18'
	},
	{
		title: 'intersection observer',
		description: 'Intersection Observer例子',
		href: 'html/intersectionObserver.html',
		createDate: '2021-06-10'
	},
	{
		title: 'nav title',
		description: '使用Intersection Observer实现的标题与导航联动',
		href: 'html/navTitle.html',
		createDate: '2021-06-10'
	},
	{
		title: 'infinite scroll',
		description: '使用Intersection Observer实现的无限滚动',
		href: 'html/infiniteScroll.html',
		createDate: '2021-06-08'
	},
	{
		title: 'image lazy load',
		description: '使用Intersection Observer实现的图片懒加载',
		href: 'html/imageLazyLoad.html',
		createDate: '2021-06-07'
	},
	{
		title: 'input format',
		description: '格式化输入内容',
		href: 'html/inputFormat.html',
		createDate: '2021-06-01'
	},
	{
		title: 'paste image',
		description: 'Ctrl+V粘贴图片或者截图',
		href: 'html/pasteImage.html',
		createDate: '2021-05-24'
	},
	{
		title: 'onion model',
		description: '洋葱模型实现',
		href: 'html/onionModel.html',
		createDate: '2021-05-12'
	},
	{
		title: 'event delegate',
		description: '事件委托原理',
		href: 'html/eventDelegate.html',
		createDate: '2020-11-03'
	},
	{
		title: 'slider',
		description: 'slider滑块实现',
		href: 'html/slider.html',
		createDate: '2020-10-30'
	},
	{
		title: 'apply',
		description: 'apply基本原理',
		href: 'html/apply.html',
		createDate: '2020-10-30'
	},
	{
		title: 'call',
		description: 'call基本原理',
		href: 'html/call.html',
		createDate: '2020-10-30'
	},
	{
		title: 'throttle',
		description: '节流函数基本原理',
		href: 'html/throttle.html',
		createDate: '2020-10-30'
	},
	{
		title: 'debounce',
		description: '防抖函数基本原理',
		href: 'html/debounce.html',
		createDate: '2020-10-30'
	},
	{
		title: 'picker',
		description: 'picker选择器实现',
		href: 'html/picker.html',
		createDate: '2020-10-29'
	},
	{
		title: 'forEach',
		description: '数组forEach方法基本原理',
		href: 'html/forEach.html',
		createDate: '2020-10-29'
	},
	{
		title: 'calendar',
		description: '日历实现',
		href: 'html/calendar.html',
		createDate: '2020-10-29'
	},
	{
		title: 'image compress',
		description: '图片压缩基本原理',
		href: 'html/imageCompress.html',
		createDate: '2020-10-29'
	},
	{
		title: 'date range',
		description: '日期区间选择器，常见于酒店选择"入住 - 退房"日期',
		href: 'html/dateRange.html',
		createDate: '2020-10-28'
	}
];