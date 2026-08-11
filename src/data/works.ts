import work01 from '../assets/works/work-01.png';
import work02 from '../assets/works/work-02.jpg';
import work03 from '../assets/works/work-03.jpg';
import work04 from '../assets/works/work-04.jpg';
import work05 from '../assets/works/work-05.jpg';
import work06 from '../assets/works/work-06.png';
import work07 from '../assets/works/work-07.jpg';
import work08 from '../assets/works/work-08.jpg';
import work09 from '../assets/works/work-09.jpg';
import work10 from '../assets/works/work-10.jpg';
import work11 from '../assets/works/work-11.jpg';
import work12 from '../assets/works/work-12.jpg';
import work13 from '../assets/works/work-13.jpg';
import work14 from '../assets/works/work-14.jpg';
import work15 from '../assets/works/work-15.png';
import work16 from '../assets/works/work-16.png';
import work17 from '../assets/works/work-17.png';
import work18 from '../assets/works/work-18.jpg';
import work19 from '../assets/works/work-19.png';
import work20 from '../assets/works/work-20.jpg';
import work21 from '../assets/works/work-21.jpg';
import work22 from '../assets/works/work-22.jpg';
import work23 from '../assets/works/work-23.jpg';

export type Category = '平面設計' | '展示設計' | '產品設計' | '繪本創作';

export interface Work {
	id: string;
	title: string;
	category: Category;
	year: string;
	description: string;
	image: ImageMetadata;
}

export const works: Work[] = [
	{
		id: '01',
		title: '作品集封面設計',
		category: '平面設計',
		year: '2026',
		description: '以黑白色調與極簡編排呈現個人品牌識別，作為「Design Portfolio 2026」的視覺開場。',
		image: work01,
	},
	{
		id: '02',
		title: '海報設計',
		category: '平面設計',
		year: '2025',
		description: '透過層疊文字與圖像構成傳達活動氛圍，實驗不同字級對比下的版面節奏。',
		image: work02,
	},
	{
		id: '03',
		title: '字體排版設計',
		category: '平面設計',
		year: '2025',
		description: '以字體為主體進行排版實驗，探索字距、行距與留白如何重塑閱讀動線。',
		image: work03,
	},
	{
		id: '04',
		title: '展覽空間設計',
		category: '展示設計',
		year: '2024',
		description: '規劃展覽動線與展品陳列，讓觀者在移動與停駐之間逐步認識展覽敘事。',
		image: work04,
	},
	{
		id: '05',
		title: '平面視覺設計',
		category: '平面設計',
		year: '2025',
		description: '整合圖像與文字的視覺系統，將概念轉化為清晰而具辨識度的溝通畫面。',
		image: work05,
	},
	{
		id: '06',
		title: '印刷應用設計',
		category: '平面設計',
		year: '2024',
		description: '從選紙、工藝到成品落地的印刷設計，重視材質與光澤在實體上的呈現。',
		image: work06,
	},
	{
		id: '07',
		title: '服飾品牌設計',
		category: '產品設計',
		year: '2024',
		description: '為服飾與配件建立一致的品牌視覺，從圖案到吊牌延展完整的商品體驗。',
		image: work07,
	},
	{
		id: '08',
		title: '視覺識別設計',
		category: '平面設計',
		year: '2025',
		description: '以識別系統整合多元應用場景，讓單一視覺語言在平面與數位上保持一致。',
		image: work08,
	},
	{
		id: '09',
		title: '紙品文具設計',
		category: '平面設計',
		year: '2023',
		description: '從書信、紙張到文具的系列設計，探討紙製品如何承載日常的情感連結。',
		image: work09,
	},
	{
		id: '10',
		title: '繪本創作',
		category: '繪本創作',
		year: '2023',
		description: '以手繪插畫與故事鋪陳的情感繪本，讓圖像與文字共同說一個溫暖的故事。',
		image: work10,
	},
	{
		id: '11',
		title: '家具產品設計',
		category: '產品設計',
		year: '2024',
		description: '從生活需求出發的家具設計，平衡形式、機能與空間中的比例關係。',
		image: work11,
	},
	{
		id: '12',
		title: '字體排版設計',
		category: '平面設計',
		year: '2025',
		description: '延續字體實驗的排版練習，在極簡版面中追求文字的秩序與韻律。',
		image: work12,
	},
	{
		id: '13',
		title: '交通工具視覺設計',
		category: '產品設計',
		year: '2024',
		description: '為交通工具建立辨識度高的視覺語言，讓設計貼合使用情境與品牌調性。',
		image: work13,
	},
	{
		id: '14',
		title: '字體排版設計',
		category: '平面設計',
		year: '2025',
		description: '以字體構成的版面練習，聚焦單一視覺元素所能展開的多種排列可能。',
		image: work14,
	},
	{
		id: '15',
		title: '字體排版設計',
		category: '平面設計',
		year: '2025',
		description: '探索數字與文字共存時的排版秩序，建立清晰而耐看的訊息層級。',
		image: work15,
	},
	{
		id: '16',
		title: '戶外標誌與指標設計',
		category: '展示設計',
		year: '2024',
		description: '規劃空間中的戶外標誌與指標系統，讓資訊在環境中自然地被閱讀。',
		image: work16,
	},
	{
		id: '17',
		title: '電子配件設計',
		category: '產品設計',
		year: '2024',
		description: '針對隨身電子配件提出造型與收納方案，兼顧手感、機能與美感。',
		image: work17,
	},
	{
		id: '18',
		title: '字體排版設計',
		category: '平面設計',
		year: '2025',
		description: '以彩虹色系進行的字體構成實驗，測試色彩在版面中的張力與平衡。',
		image: work18,
	},
	{
		id: '19',
		title: '汽車零件設計',
		category: '產品設計',
		year: '2024',
		description: '將工程細節轉化為具辨識度的造型語言，在機能限制中尋找設計表現。',
		image: work19,
	},
	{
		id: '20',
		title: '平面視覺設計',
		category: '平面設計',
		year: '2025',
		description: '透過圖像與文字的重新組合，為訊息賦予明確且具記憶點的視覺面貌。',
		image: work20,
	},
	{
		id: '21',
		title: '字體排版設計',
		category: '平面設計',
		year: '2025',
		description: '字體與幾何圖形交織的版面練習，探索抽象元素如何輔助文字傳達。',
		image: work21,
	},
	{
		id: '22',
		title: '字體排版設計',
		category: '平面設計',
		year: '2025',
		description: '以圖文並置構成的實驗性版面，在衝突與協調之間找到視覺平衡。',
		image: work22,
	},
	{
		id: '23',
		title: '平面視覺設計',
		category: '平面設計',
		year: '2025',
		description: '以字體為主的圖形化表現，將概念濃縮為一張具張力的視覺畫面。',
		image: work23,
	},
];

export const categories: Category[] = ['平面設計', '展示設計', '產品設計', '繪本創作'];
