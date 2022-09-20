import type {
	ButtonColorsCssVariables,
	ColumnHeaderColorsCssVariables,
	EditableTableTheme,
	FontAndBorderColorsCssVariables,
	SizeLengthCssVariables,
	TableBodyColorsCssVariables,
	TableWrapperColorsCssVariables,
	ThemeCssVariables
} from '$lib/types';

export function importTableTheme(theme: ThemeCssVariables): EditableTableTheme {
	const tableLayout: SizeLengthCssVariables = {
		fontSize: theme.fontSize,
		tableWrapperBorderWidth: theme.tableWrapperBorderWidth,
		tableWrapperBorderStyle: theme.tableWrapperBorderStyle,
		tableWrapperPadding: theme.tableWrapperPadding,
		tableWrapperMargin: theme.tableWrapperMargin,
		sortDescriptionFontSize: theme.sortDescriptionFontSize,
		tableHeaderFontSize: theme.tableHeaderFontSize,
		tableBorderRadius: theme.tableBorderRadius,
		colHeaderPadding: theme.colHeaderPadding,
		colHeaderTextWeight: theme.colHeaderTextWeight,
		colHeaderHighlightTextWeight: theme.colHeaderHighlightTextWeight,
		bodyCellPadding: theme.bodyCellPadding,
		buttonGroupBorderRadius: theme.buttonGroupBorderRadius
	};
	const tableWrapperColors: TableWrapperColorsCssVariables = {
		tableWrapperBgColor: theme.tableWrapperBgColor,
		tableWrapperBorderColor: theme.tableWrapperBorderColor
	};
	const fontAndBorderColors: FontAndBorderColorsCssVariables = {
		textColor: theme.textColor,
		linkTextColor: theme.linkTextColor,
		linkHoverTextColor: theme.linkHoverTextColor,
		tableOuterBorderColor: theme.tableOuterBorderColor,
		tableHeaderTextColor: theme.tableHeaderTextColor,
		sortDescriptionTextColor: theme.sortDescriptionTextColor,
		pageRangeDescriptionTextColor: theme.pageRangeDescriptionTextColor
	};
	const columnHeaderColors: ColumnHeaderColorsCssVariables = {
		colHeaderBgColor: theme.colHeaderBgColor,
		colHeaderTextColor: theme.colHeaderTextColor,
		colHeaderVertBorderColor: theme.colHeaderVertBorderColor,
		colHeaderHorizBorderColor: theme.colHeaderHorizBorderColor,
		colHeaderHighlightSortBgColor: theme.colHeaderHighlightSortBgColor,
		colHeaderHighlightSortTextColor: theme.colHeaderHighlightSortTextColor,
		colHeaderHighlightSortVertBorderColor: theme.colHeaderHighlightSortVertBorderColor,
		colHeaderHighlightSortHorizBorderColor: theme.colHeaderHighlightSortHorizBorderColor
	};
	const tableBodyColors: TableBodyColorsCssVariables = {
		bodyEvenRowBgColor: theme.bodyEvenRowBgColor,
		bodyOddRowBgColor: theme.bodyOddRowBgColor,
		bodyInnerVertBorderColor: theme.bodyInnerVertBorderColor,
		bodyInnerHorizBorderColor: theme.bodyInnerHorizBorderColor,
		bodyHighlightSortBgColor: theme.bodyHighlightSortBgColor,
		bodyHighlightSortTextColor: theme.bodyHighlightSortTextColor,
		bodyHighlightSortBorderColor: theme.bodyHighlightSortBorderColor
	};
	const buttonColors: ButtonColorsCssVariables = {
		buttonTextColor: theme.buttonTextColor,
		buttonBgColor: theme.buttonBgColor,
		buttonBorderColor: theme.buttonBorderColor,
		buttonHoverTextColor: theme.buttonHoverTextColor,
		buttonHoverBgColor: theme.buttonHoverBgColor,
		buttonHoverBorderColor: theme.buttonHoverBorderColor,
		buttonActiveTextColor: theme.buttonActiveTextColor,
		buttonActiveBgColor: theme.buttonActiveBgColor,
		buttonActiveBorderColor: theme.buttonActiveBorderColor,
		buttonDisabledTextColor: theme.buttonDisabledTextColor,
		buttonDisabledBgColor: theme.buttonDisabledBgColor,
		buttonDisabledBorderColor: theme.buttonDisabledBorderColor,
		buttonFocusBorderColor: theme.buttonFocusBorderColor
	};

	return {
		tableLayout,
		colorPalletes: {
			tableWrapperColors,
			fontAndBorderColors,
			columnHeaderColors,
			tableBodyColors,
			buttonColors
		}
	};
}
