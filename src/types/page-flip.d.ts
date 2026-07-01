declare module 'page-flip/dist/js/page-flip.module.js' {
	type Corner = 'top' | 'bottom';
	type Orientation = 'portrait' | 'landscape';

	interface PageFlipSettings {
		width: number;
		height: number;
		size?: 'fixed' | 'stretch';
		minWidth?: number;
		maxWidth?: number;
		minHeight?: number;
		maxHeight?: number;
		autoSize?: boolean;
		showCover?: boolean;
		usePortrait?: boolean;
		drawShadow?: boolean;
		maxShadowOpacity?: number;
		flippingTime?: number;
		mobileScrollSupport?: boolean;
		clickEventForward?: boolean;
		showPageCorners?: boolean;
	}

	export class PageFlip {
		constructor(element: HTMLElement, settings: PageFlipSettings);
		loadFromHTML(pages: HTMLElement[] | NodeListOf<HTMLElement>): void;
		on(event: 'flip', callback: (event: { data: number }) => void): this;
		on(event: 'changeOrientation', callback: (event: { data: Orientation }) => void): this;
		getCurrentPageIndex(): number;
		getOrientation(): Orientation;
		flipNext(corner?: Corner): void;
		flipPrev(corner?: Corner): void;
		destroy(): void;
	}
}
