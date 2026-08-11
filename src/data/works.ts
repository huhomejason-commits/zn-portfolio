import type { ImageMetadata } from 'astro';

export type Category = '繪本創作' | '產品設計' | '展示設計';

export interface Work {
	id: string;
	title: string;
	category: Category;
	year: string;
	description: string;
	cover: ImageMetadata;
	images: ImageMetadata[];
}

function sorted(modules: Record<string, { default: ImageMetadata }>): ImageMetadata[] {
	return Object.values(modules)
		.map((m) => m.default)
		.sort((a, b) => a.src.localeCompare(b.src));
}

const redBalloon = sorted(
	import.meta.glob<{ default: ImageMetadata }>('../assets/works/red-balloon/*.{jpg,png}', { eager: true }),
);
const oceanResin = sorted(
	import.meta.glob<{ default: ImageMetadata }>('../assets/works/ocean-resin/*.{jpg,png}', { eager: true }),
);
const suspendedArt = sorted(
	import.meta.glob<{ default: ImageMetadata }>('../assets/works/suspended-art/*.{jpg,png}', { eager: true }),
);
const bewiz = sorted(
	import.meta.glob<{ default: ImageMetadata }>('../assets/works/bewiz/*.{jpg,png}', { eager: true }),
);

export const works: Work[] = [
	{
		id: 'red-balloon',
		title: '繪本創作《貝爾頭上的紅氣球》',
		category: '繪本創作',
		year: '2026',
		description:
			'以療癒與自我接納為主題的原創繪本，透過象徵性的視覺敘事，將「紅氣球」作為疤痕與外界目光的隱喻，引導讀者重新理解差異、同理他人，並學會接納真實的自己。作品以溫暖的插畫風格與簡潔的故事情節，傳遞理解、陪伴與勇氣，讓閱讀成為一段充滿療癒力量的旅程。\n\n本作於《無邊共創》研究所聯合畢展中展出，結合繪本、展示設計與互動展示，讓作品從閱讀延伸至現場體驗，增加讀者對故事主題與情感的理解。',
		cover: redBalloon[0],
		images: redBalloon,
	},
	{
		id: 'ocean-resin',
		title: 'Ocean Resin｜海洋樹脂鋼筆',
		category: '產品設計',
		year: '2026',
		description:
			'以海浪為靈感的書寫工具設計，透過觀察浪花、海流與漂流木等自然元素，萃取其線條、色彩與材質特徵，將海洋的流動紋理融入筆身，結合胡桃木、樹脂與不鏽鋼三種元素，呈現剛柔並濟的視覺語彙。\n\n經由車床加工、手工拋磨與精細組裝，保留材料最真實的質感，使每支鋼筆都擁有獨一無二的紋理與書寫體驗。',
		cover: oceanResin[0],
		images: oceanResin,
	},
	{
		id: 'suspended-art',
		title: '《懸浮藝識》展覽識別設計',
		category: '展示設計',
		year: '2026',
		description:
			'《懸浮藝識》為輔仁大學應用美術學系研究所聯合個展，以多元創作媒材與視角探索藝術、設計與生活之間的連結。展覽匯聚研究生的創作成果，透過不同形式的作品，展現設計思考與藝術實踐的多樣可能。',
		cover: suspendedArt[0],
		images: suspendedArt,
	},
	{
		id: 'bewiz',
		title: 'BEWIZ 寵物座艙車',
		category: '產品設計',
		year: '2026',
		description:
			'Bewiz 是一款以人與寵物共同生活為出發點的概念產品，重新思考寵物外出運輸方式，結合電動載具與寵物座艙設計，兼顧安全性、便利性與互動體驗。\n\nBEWIZ 源自 “Be With” 的概念，象徵人與寵物彼此陪伴、共同生活的情感連結，品牌名稱延伸出「Be with us」的意涵，希望重新定義人與寵物的移動方式，讓每一次出發都成為共享生活的美好旅程。',
		cover: bewiz[0],
		images: bewiz,
	},
];
