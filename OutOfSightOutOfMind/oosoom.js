console.debug(" [ YandernayaVodaTvoyaMamaBlyat:oosoom.js ] 眼不见心不烦系统已加载")

const MutationObserver = window.MutationObserver || window.WebKitMutationObserver
const target = document.querySelector("#comment")
const config = {
	childList: true,
	subtree: true
}

/* 宁可错杀一千绝不放过一个 */
const MentalRetardationVocab  = [
	/* 我估计能有一半的人不知道这几样东西到底是什么
	   另一半的人里面有一大半不知道氚是氢的同位素、存在于水分子中这一事实
	   顺带一大半的人能把 2012 年预测的铯扩散图当成 2021 年的废水排放图用 */
	"氚", "锶", "铯", "元素周期表",

	/* 先去看完数据表，综合一下各方面的信息再瞎 bb，请 */
	"处理水", "核废水", "核污水", "泄漏", "放射", "辐射", "原子", "核子", "盖革",
	"排放大海", "排海", "海里倒", "堆芯", "稀释", "核电", "海的那边", "福岛", "偷排",
	"偷倒", "核废料", "排放污水", ["污水", "太平洋"],

	/* 拿切尔诺贝利和福岛比，是在比烂吗？先去看下历史书好吧 */
	"切尔诺", "三里岛", ["级", "事故"], "死士", ["日本", "苏联"],

	/* 不分场合没礼貌乱刷梗的小鬼全都死一户口本 */
	"鞠躬", "哥斯拉", "变异", "中和", "马桶", "小节", "大义", "松下新之助", "松下幸之助",
	"躬酱", "躬匠", "生化", "核打击", "核理", ["桑", "樱花"], "原子吐息", "环保少女",

	/* 核废水会不会毁灭人类，各国专家自有定论；但民粹主义和种族主义引起的核战争一定会毁灭人类 */
	"倭人", "倭国", "鬼子", "倭子国", ["日本", "担当"], ["日本", "责任"], ["日本", "赢家"],
	["日本", "狗"], "🇯🇵",

	/* 要想别人尊重你，你就要先尊重自己 */
	"恨国蛆", "恨国qu", "精日", "精神日本人", "霉逼", "美分",

	/* 真正卖国的人很少，卖国是需要能力的 */
	"卖国",

	/* 搞清基因突变的原理再扯这个吧 */
	["奥特曼", "纪录片"], ["苹果", "日本"], "另一个头", "加坦杰厄", ["奥特曼", "海洋"],

	/* 全面核战争真有那么好玩？想清楚再拿原子弹口嗨吧 */
	["俄罗斯", "发射"], ["俄罗斯", "方案"], "东风", "核弹", "氢弹", "大伊万", "蘑菇蛋", "蘑菇弹",

	/* 很多段子都到处 xjb 转发 */
	"（转"
]

const hasMentalRetardation = function (content) {
	content.replace(" ", "")
	for (const vocab of MentalRetardationVocab) {
		if (typeof vocab === "string") {
			if (content.search(vocab) !== -1) {
				return true
			}
		} else {
			let ret = true
			for (const vocabPart of vocab) {
				ret = ret & (content.search(vocabPart) !== -1)
			}
			if (ret) {
				return ret
			}
		}
	}
	return false
}

let observer = new MutationObserver((mutations) => {
	console.debug(" [ YadernayaVodaTvoyaMamaBlyat:oosoom.js ] 检测到评论区数据更新，正在执行清扫")

	observer.disconnect()
	const comments = document.getElementsByClassName("reply-wrap")
	for (let comment of comments) {
		if (comment === null || comment === undefined || comment.hasAttribute("oosoom-inspected")) {
			continue
		}
		const text = comment.innerText
		if (hasMentalRetardation(text)) {
			comment.innerHTML = "<div style=\"all: revert; font-size: 14px; color: black; text-align: center; border: 1px solid black\"><b>脑残言论自动屏蔽</b></div>"
			console.debug("屏蔽脑残言论: ", text)
		}
		comment.setAttribute("oosoom-inspected", "1")
	}
	observer.observe(target, config)

	console.debug(" [ YadernayaVodaTvoyaMamaBlyat:oosoom.js ] 清洁工作已完成")
})

observer.observe(target, config)
console.debug(" [ YandernayaVodaTvoyaMamaBlyat:oosoom.js ] 眼不见心不烦系统启动完毕")
