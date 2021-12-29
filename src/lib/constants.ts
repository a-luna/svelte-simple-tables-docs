import type { ThemeCssVariables } from '$lib/types';

export const HSL_COLOR_REGEX =
	/hsl\((?<hue>\d{1,3}), (?<saturation>\d{1,3})%, (?<lightness>\d{1,3})%\)/;

export const LightThemeCssVariables: ThemeCssVariables = {
	fontSize: '13px',
	tableWrapperBorderWidth: '2px',
	tableWrapperBorderStyle: 'dotted',
	tableWrapperPadding: '13px',
	sortDescriptionFontSize: '0.85em',
	tableHeaderFontSize: '1.25em',
	tableBorderRadius: '4px',
	colHeaderPadding: '2px 4px',
	colHeaderTextWeight: '500',
	colHeaderHighlightTextWeight: '500',
	bodyCellPadding: '2px 4px',
	buttonGroupBorderRadius: '0.375em',
	tableWrapperBgColor: 'hsl(0, 0%, 95%)',
	tableWrapperBorderColor: 'hsl(218, 100%, 25%)',
	textColor: 'hsl(0, 0%, 5%)',
	linkTextColor: 'hsl(218, 100%, 25%)',
	linkHoverTextColor: 'hsl(218, 100%, 25%)',
	tableOuterBorderColor: 'hsl(218, 100%, 25%)',
	tableHeaderTextColor: 'hsl(0, 0%, 15%)',
	sortDescriptionTextColor: 'hsl(113, 100%, 30%)',
	pageRangeDescriptionTextColor: 'hsl(113, 100%, 30%)',
	colHeaderBgColor: 'hsl(218, 100%, 25%)',
	colHeaderTextColor: 'hsl(0, 0%, 85%)',
	colHeaderVertBorderColor: 'hsl(218, 100%, 25%)',
	colHeaderHorizBorderColor: 'hsl(218, 100%, 25%)',
	colHeaderHighlightSortBgColor: 'hsl(218, 100%, 25%)',
	colHeaderHighlightSortTextColor: 'hsl(0, 0%, 85%)',
	colHeaderHighlightSortVertBorderColor: 'hsl(218, 100%, 25%)',
	colHeaderHighlightSortHorizBorderColor: 'hsl(218, 100%, 25%)',
	bodyEvenRowBgColor: 'hsl(0, 0%, 85%)',
	bodyOddRowBgColor: 'hsl(0, 0%, 80%)',
	bodyInnerVertBorderColor: 'hsl(0, 0%, 45%)',
	bodyInnerHorizBorderColor: 'hsl(0, 0%, 50%)',
	bodyHighlightSortBgColor: 'hsl(113, 100%, 70%)',
	bodyHighlightSortTextColor: 'hsl(0, 0%, 5%)',
	bodyHighlightSortBorderColor: 'hsl(0, 0%, 50%)',
	buttonTextColor: 'hsl(0, 0%, 100%)',
	buttonBgColor: 'hsl(113, 100%, 30%)',
	buttonBorderColor: 'hsl(113, 100%, 30%)',
	buttonHoverTextColor: 'hsl(0, 0%, 100%)',
	buttonHoverBgColor: 'hsl(113, 100%, 20%)',
	buttonHoverBorderColor: 'transparent',
	buttonActiveTextColor: 'hsl(0, 0%, 100%)',
	buttonActiveBgColor: 'hsl(113, 100%, 40%)',
	buttonActiveBorderColor: 'transparent',
	buttonDisabledTextColor: 'hsl(0, 0%, 80%)',
	buttonDisabledBgColor: 'hsl(0, 0%, 60%)',
	buttonDisabledBorderColor: 'transparent',
	buttonFocusBorderColor: 'transparent'
};

export const LighterThemeCssVariables: ThemeCssVariables = {
	fontSize: '13px',
	tableWrapperBorderWidth: '2px',
	tableWrapperBorderStyle: 'dotted',
	tableWrapperPadding: '13px',
	sortDescriptionFontSize: '0.85em',
	tableHeaderFontSize: '1.25em',
	tableBorderRadius: '4px',
	colHeaderPadding: '2px 4px',
	colHeaderTextWeight: '500',
	colHeaderHighlightTextWeight: '500',
	bodyCellPadding: '2px 4px',
	buttonGroupBorderRadius: '0.375em',
	tableWrapperBgColor: 'hsl(0, 0%, 100%)',
	tableWrapperBorderColor: 'hsl(212, 76%, 80%)',
	textColor: 'hsl(213, 13%, 16%)',
	linkTextColor: 'hsl(216, 97%, 36%)',
	linkHoverTextColor: 'hsl(216, 97%, 36%)',
	tableOuterBorderColor: 'hsl(212, 12%, 21%)',
	tableHeaderTextColor: 'hsl(213, 13%, 16%)',
	sortDescriptionTextColor: 'hsl(7, 84%, 61%)',
	pageRangeDescriptionTextColor: 'hsl(7, 84%, 61%)',
	colHeaderBgColor: 'hsl(207, 23%, 92%)',
	colHeaderTextColor: 'hsl(213, 13%, 16%)',
	colHeaderVertBorderColor: 'hsl(212, 12%, 21%)',
	colHeaderHorizBorderColor: 'hsl(212, 12%, 21%)',
	colHeaderHighlightSortBgColor: 'hsl(207, 23%, 92%)',
	colHeaderHighlightSortTextColor: 'hsl(213, 13%, 16%)',
	colHeaderHighlightSortVertBorderColor: 'hsl(212, 12%, 21%)',
	colHeaderHighlightSortHorizBorderColor: 'hsl(212, 12%, 21%)',
	bodyEvenRowBgColor: 'hsl(0, 0%, 96%)',
	bodyOddRowBgColor: 'hsl(0, 0%, 100%)',
	bodyInnerVertBorderColor: 'hsl(212, 12%, 21%)',
	bodyInnerHorizBorderColor: 'hsl(212, 12%, 21%)',
	bodyHighlightSortBgColor: 'hsl(191, 90%, 92%)',
	bodyHighlightSortTextColor: 'hsl(7, 84%, 61%)',
	bodyHighlightSortBorderColor: 'hsl(212, 12%, 21%)',
	buttonTextColor: 'hsl(213, 13%, 16%)',
	buttonBgColor: 'hsl(207, 23%, 92%)',
	buttonBorderColor: 'hsl(213, 13%, 16%)',
	buttonHoverTextColor: 'hsl(213, 13%, 16%)',
	buttonHoverBgColor: 'hsl(210, 17%, 84%)',
	buttonHoverBorderColor: 'hsla(218, 80%, 2%, 0.8)',
	buttonActiveTextColor: 'hsl(213, 13%, 16%)',
	buttonActiveBgColor: 'hsl(210, 14%, 71%)',
	buttonActiveBorderColor: 'hsl(213, 13%, 16%)',
	buttonDisabledTextColor: 'hsl(211, 10%, 57%)',
	buttonDisabledBgColor: 'hsl(207, 23%, 92%)',
	buttonDisabledBorderColor: 'hsl(211, 10%, 57%)',
	buttonFocusBorderColor: 'hsla(218, 80%, 2%, 0.8)'
};

export const DarkThemeCssVariables: ThemeCssVariables = {
	fontSize: '13px',
	tableWrapperBorderWidth: '2px',
	tableWrapperBorderStyle: 'dotted',
	tableWrapperPadding: '13px',
	sortDescriptionFontSize: '0.85em',
	tableHeaderFontSize: '1.25em',
	tableBorderRadius: '4px',
	colHeaderPadding: '2px 4px',
	colHeaderTextWeight: '500',
	colHeaderHighlightTextWeight: '500',
	bodyCellPadding: '2px 4px',
	buttonGroupBorderRadius: '0.375em',
	tableWrapperBgColor: 'hsl(226, 27%, 10%)',
	tableWrapperBorderColor: 'hsl(251, 74%, 30%)',
	textColor: 'hsl(0, 0%, 5%)',
	linkTextColor: 'hsl(251deg 74% 40%)',
	linkHoverTextColor: 'hsl(251deg 74% 50%)',
	tableOuterBorderColor: 'hsl(251, 74%, 30%)',
	tableHeaderTextColor: 'hsl(0, 0%, 95%)',
	sortDescriptionTextColor: 'hsl(165, 100%, 45%)',
	pageRangeDescriptionTextColor: 'hsl(165, 100%, 45%)',
	colHeaderBgColor: 'hsl(251, 74%, 30%)',
	colHeaderTextColor: 'hsl(0, 0%, 95%)',
	colHeaderVertBorderColor: 'hsl(251, 74%, 30%)',
	colHeaderHorizBorderColor: 'hsl(251, 74%, 30%)',
	colHeaderHighlightSortBgColor: 'hsl(251, 74%, 30%)',
	colHeaderHighlightSortTextColor: 'hsl(0, 0%, 95%)',
	colHeaderHighlightSortVertBorderColor: 'hsl(251, 74%, 30%)',
	colHeaderHighlightSortHorizBorderColor: 'hsl(251, 74%, 30%)',
	bodyEvenRowBgColor: 'hsl(0, 0%, 50%)',
	bodyOddRowBgColor: 'hsl(0, 0%, 45%)',
	bodyInnerVertBorderColor: 'hsl(0, 0%, 30%)',
	bodyInnerHorizBorderColor: 'hsl(0, 0%, 35%)',
	bodyHighlightSortBgColor: 'hsl(165, 100%, 55%)',
	bodyHighlightSortTextColor: 'hsl(0, 0%, 5%)',
	bodyHighlightSortBorderColor: 'hsl(0, 0%, 35%)',
	buttonTextColor: 'hsl(0, 0%, 10%)',
	buttonBgColor: 'hsl(165, 100%, 45%)',
	buttonBorderColor: 'hsl(165, 100%, 45%)',
	buttonHoverTextColor: 'hsl(0, 0%, 0%)',
	buttonHoverBgColor: 'hsl(165, 100%, 35%)',
	buttonHoverBorderColor: 'transparent',
	buttonActiveTextColor: 'hsl(0, 0%, 0%)',
	buttonActiveBgColor: 'hsl(165, 100%, 75%)',
	buttonActiveBorderColor: 'transparent',
	buttonDisabledTextColor: 'hsl(0, 0%, 30%)',
	buttonDisabledBgColor: 'hsl(0, 0%, 50%)',
	buttonDisabledBorderColor: 'transparent',
	buttonFocusBorderColor: 'transparent'
};

export const DarkerThemeCssVariables: ThemeCssVariables = {
	fontSize: '13px',
	tableWrapperBorderWidth: '2px',
	tableWrapperBorderStyle: 'dotted',
	tableWrapperPadding: '13px',
	sortDescriptionFontSize: '0.85em',
	tableHeaderFontSize: '1.25em',
	tableBorderRadius: '4px',
	colHeaderPadding: '2px 4px',
	colHeaderTextWeight: '500',
	colHeaderHighlightTextWeight: '500',
	bodyCellPadding: '2px 4px',
	buttonGroupBorderRadius: '0.375em',
	tableWrapperBgColor: 'hsl(220, 13%, 3%)',
	tableWrapperBorderColor: 'hsl(215, 22%, 41%)',
	textColor: 'hsl(210, 25%, 95%)',
	linkTextColor: 'hsl(210, 100%, 72%)',
	linkHoverTextColor: 'hsl(210, 100%, 72%)',
	tableOuterBorderColor: 'hsl(215, 22%, 41%)',
	tableHeaderTextColor: 'hsl(210, 25%, 95%)',
	sortDescriptionTextColor: 'hsl(210, 100%, 72%)',
	pageRangeDescriptionTextColor: 'hsl(210, 100%, 72%)',
	colHeaderBgColor: 'hsl(220, 13%, 18%)',
	colHeaderTextColor: 'hsl(210, 25%, 95%)',
	colHeaderVertBorderColor: 'hsl(216, 8%, 32%)',
	colHeaderHorizBorderColor: 'hsl(215, 22%, 41%)',
	colHeaderHighlightSortBgColor: 'hsl(220, 13%, 18%)',
	colHeaderHighlightSortTextColor: 'hsl(210, 25%, 95%)',
	colHeaderHighlightSortVertBorderColor: 'hsl(216, 8%, 32%)',
	colHeaderHighlightSortHorizBorderColor: 'hsl(215, 22%, 41%)',
	bodyEvenRowBgColor: 'hsl(220, 23%, 5%)',
	bodyOddRowBgColor: 'hsl(220, 23%, 8%)',
	bodyInnerVertBorderColor: 'hsl(216, 8%, 32%)',
	bodyInnerHorizBorderColor: 'hsl(216, 8%, 32%)',
	bodyHighlightSortBgColor: 'current',
	bodyHighlightSortTextColor: 'hsl(65, 100%, 50%)',
	bodyHighlightSortBorderColor: 'hsl(216, 8%, 32%)',
	buttonTextColor: 'hsl(210, 25%, 95%)',
	buttonBgColor: 'hsl(220, 13%, 18%)',
	buttonBorderColor: 'hsl(216, 8%, 52%)',
	buttonHoverTextColor: 'hsl(210, 25%, 95%)',
	buttonHoverBgColor: 'hsl(217, 10%, 36%)',
	buttonHoverBorderColor: 'hsl(212, 13%, 77%)',
	buttonActiveTextColor: 'hsl(210, 25%, 95%)',
	buttonActiveBgColor: 'hsl(217, 10%, 33%)',
	buttonActiveBorderColor: 'hsl(214, 12%, 66%)',
	buttonDisabledTextColor: 'hsl(0, 0%, 50%)',
	buttonDisabledBgColor: 'hsl(0, 0%, 25%)',
	buttonDisabledBorderColor: 'hsl(0, 0%, 50%)',
	buttonFocusBorderColor: 'hsl(212, 13%, 77%)'
};
