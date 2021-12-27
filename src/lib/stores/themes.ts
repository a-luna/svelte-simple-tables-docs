import type { ThemeCssVariables } from '$lib/types';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export function createThemeCssVariablesStore(
	settings: ThemeCssVariables
): Writable<ThemeCssVariables> {
	const { set, subscribe, update } = writable<ThemeCssVariables>({
		fontSize: settings.fontSize,
		tableWrapperBorderWidth: settings.tableWrapperBorderWidth,
		tableWrapperBorderStyle: settings.tableWrapperBorderStyle,
		tableWrapperPadding: settings.tableWrapperPadding,
		sortDescriptionFontSize: settings.sortDescriptionFontSize,
		tableHeaderFontSize: settings.tableHeaderFontSize,
		tableBorderRadius: settings.tableBorderRadius,
		colHeaderPadding: settings.colHeaderPadding,
		colHeaderTextWeight: settings.colHeaderTextWeight,
		colHeaderHighlightTextWeight: settings.colHeaderHighlightTextWeight,
		bodyCellPadding: settings.bodyCellPadding,
		buttonGroupBorderRadius: settings.buttonGroupBorderRadius,
		tableWrapperBgColor: settings.tableWrapperBgColor,
		tableWrapperBorderColor: settings.tableWrapperBorderColor,
		textColor: settings.textColor,
		linkTextColor: settings.linkTextColor,
		linkHoverTextColor: settings.linkHoverTextColor,
		tableOuterBorderColor: settings.tableOuterBorderColor,
		tableHeaderTextColor: settings.tableHeaderTextColor,
		sortDescriptionTextColor: settings.sortDescriptionTextColor,
		pageRangeDescriptionTextColor: settings.pageRangeDescriptionTextColor,
		colHeaderBgColor: settings.colHeaderBgColor,
		colHeaderTextColor: settings.colHeaderTextColor,
		colHeaderVertBorderColor: settings.colHeaderVertBorderColor,
		colHeaderHorizBorderColor: settings.colHeaderHorizBorderColor,
		colHeaderHighlightSortBgColor: settings.colHeaderHighlightSortBgColor,
		colHeaderHighlightSortTextColor: settings.colHeaderHighlightSortTextColor,
		colHeaderHighlightSortVertBorderColor: settings.colHeaderHighlightSortVertBorderColor,
		colHeaderHighlightSortHorizBorderColor: settings.colHeaderHighlightSortHorizBorderColor,
		bodyEvenRowBgColor: settings.bodyEvenRowBgColor,
		bodyOddRowBgColor: settings.bodyOddRowBgColor,
		bodyInnerVertBorderColor: settings.bodyInnerVertBorderColor,
		bodyInnerHorizBorderColor: settings.bodyInnerHorizBorderColor,
		bodyHighlightSortBgColor: settings.bodyHighlightSortBgColor,
		bodyHighlightSortTextColor: settings.bodyHighlightSortTextColor,
		bodyHighlightSortBorderColor: settings.bodyHighlightSortBorderColor,
		buttonTextColor: settings.buttonTextColor,
		buttonBgColor: settings.buttonBgColor,
		buttonBorderColor: settings.buttonBorderColor,
		buttonHoverTextColor: settings.buttonHoverTextColor,
		buttonHoverBgColor: settings.buttonHoverBgColor,
		buttonHoverBorderColor: settings.buttonHoverBorderColor,
		buttonActiveTextColor: settings.buttonActiveTextColor,
		buttonActiveBgColor: settings.buttonActiveBgColor,
		buttonActiveBorderColor: settings.buttonActiveBorderColor,
		buttonDisabledTextColor: settings.buttonDisabledTextColor,
		buttonDisabledBgColor: settings.buttonDisabledBgColor,
		buttonDisabledBorderColor: settings.buttonDisabledBorderColor,
		buttonFocusBorderColor: settings.buttonFocusBorderColor
	});

	return { set, subscribe, update };
}
