export type DataSet = 'vax' | 'pfx';
export type AlertState = 'none' | 'info' | 'success' | 'warning' | 'error';
export type CodeViewerContent =
	| 'settings'
	| 'svelte-component'
	| 'column-settings'
	| 'data'
	| 'pitchfx';

export interface SelectMenuItem {
	value: string;
	label: string;
	type: string;
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
