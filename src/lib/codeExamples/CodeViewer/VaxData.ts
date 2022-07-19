export const getVaxDataTypeCode = (): string =>
	`export interface VaxData {
\tpersonId: number;
\tname: string;
\tage: number;
\tbirthdate: Date;
\tvaccinated: boolean;
}
`;
