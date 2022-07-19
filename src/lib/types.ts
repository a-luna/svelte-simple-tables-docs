import { HSL_COLOR_REGEX } from './constants';

export type WithTarget<Event, Target> = Event & { currentTarget: Target };
export type DataSet = 'vax' | 'pfx';
export type AlertState = 'none' | 'info' | 'success' | 'warning' | 'error';
export type ActiveContent = 'docs' | 'table-settings' | 'code-viewer' | 'theme-editor';
export type CodeExample = 'table-component' | 'column-settings' | 'data' | 'pitchfx' | 'vaxdata';

export type ButtonColor =
	| 'red'
	| 'pink'
	| 'orange'
	| 'teal'
	| 'green'
	| 'blue'
	| 'gray'
	| 'yellow'
	| 'indigo';

export class HslColor {
	constructor(public hue: number, public saturation: number, public lightness: number) {}
	public toString = (): string => `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
	public changeHue = (newHue: number): HslColor =>
		new HslColor(newHue, this.saturation, this.lightness);
	public adjustSaturation = (dim: number): HslColor =>
		new HslColor(this.hue, Math.floor(this.saturation * dim), this.lightness);
	public adjustLightness = (dim: number): HslColor =>
		new HslColor(this.hue, this.saturation, Math.floor(this.lightness * dim));
	public static fromString = (hsl_color: string): HslColor => {
		const match = HSL_COLOR_REGEX.exec(hsl_color);
		return match
			? new HslColor(
					parseInt(match.groups.hue),
					parseInt(match.groups.saturation),
					parseInt(match.groups.lightness)
			  )
			: new HslColor(0, 0, 0);
	};
}

export interface SelectMenuItem<T> {
	value: keyof T;
	label: string;
}

export interface Alert {
	state: AlertState;
	message: string;
}

export interface SizeLengthCssVariables {
	fontSize: string;
	tableWrapperBorderWidth: string;
	tableWrapperBorderStyle: string;
	tableWrapperPadding: string;
	tableWrapperMargin: string;
	sortDescriptionFontSize: string;
	tableHeaderFontSize: string;
	tableBorderRadius: string;
	colHeaderPadding: string;
	colHeaderTextWeight: string;
	colHeaderHighlightTextWeight: string;
	bodyCellPadding: string;
	buttonGroupBorderRadius: string;
}

export interface TableWrapperColorsCssVariables {
	tableWrapperBgColor: string;
	tableWrapperBorderColor: string;
}

export interface FontBorderColorsCssVariables {
	textColor: string;
	linkTextColor: string;
	linkHoverTextColor: string;
	tableOuterBorderColor: string;
	tableHeaderTextColor: string;
	sortDescriptionTextColor: string;
	pageRangeDescriptionTextColor: string;
}

export interface ColumnHeaderColorsCssVariables {
	colHeaderBgColor: string;
	colHeaderTextColor: string;
	colHeaderVertBorderColor: string;
	colHeaderHorizBorderColor: string;
	colHeaderHighlightSortBgColor: string;
	colHeaderHighlightSortTextColor: string;
	colHeaderHighlightSortVertBorderColor: string;
	colHeaderHighlightSortHorizBorderColor: string;
}

export interface TableBodyColorsCssVariables {
	bodyEvenRowBgColor: string;
	bodyOddRowBgColor: string;
	bodyInnerVertBorderColor: string;
	bodyInnerHorizBorderColor: string;
	bodyHighlightSortBgColor: string;
	bodyHighlightSortTextColor: string;
	bodyHighlightSortBorderColor: string;
}

export interface ButtonColorsCssVariables {
	buttonTextColor: string;
	buttonBgColor: string;
	buttonBorderColor: string;
	buttonHoverTextColor: string;
	buttonHoverBgColor: string;
	buttonHoverBorderColor: string;
	buttonActiveTextColor: string;
	buttonActiveBgColor: string;
	buttonActiveBorderColor: string;
	buttonDisabledTextColor: string;
	buttonDisabledBgColor: string;
	buttonDisabledBorderColor: string;
	buttonFocusBorderColor: string;
}

export type ThemeCssVariables = SizeLengthCssVariables &
	TableWrapperColorsCssVariables &
	FontBorderColorsCssVariables &
	ColumnHeaderColorsCssVariables &
	TableBodyColorsCssVariables &
	ButtonColorsCssVariables;
