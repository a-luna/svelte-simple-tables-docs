import type { DataSet } from '$lib/types';

export const getColumnSettingsCode = (dataSet: DataSet): string =>
	dataSet === 'vax' ? getVaxColumnSettingsCode() : getPfxColumnSettingsCode();

const getVaxColumnSettingsCode = (): string =>
	`import type { ColumnSettings } from '@a-luna/svelte-simple-tables/types';
import type { VaxData } from './data';

export const vaxDataColumnSettings: ColumnSettings<VaxData>[] = [
\t{
\t\tpropName: 'name',
\t\tpropType: 'string',
\t\ttooltip: 'First Name',
\t\tclassList: ['text-left'],
\t\tcolValue: (data: VaxData): string => \`<a href="/person/\${data.personId}">\${data.name}</a>\`
\t},
\t{
\t\tpropName: 'birthdate',
\t\tpropType: 'date',
\t\tcolValue: (data: VaxData): string => data.birthdate.toDateString()
\t},
\t{
\t\tpropName: 'age',
\t\tpropType: 'number'
\t},
\t{
\t\tpropName: 'vaccinated',
\t\tpropType: 'boolean',
\t\theaderText: 'Vax?',
\t\ttooltip: 'Vaccination Status',
\t\tclassList: ['text-center'],
\t\tcolValue: (data: VaxData): string => (data.vaccinated ? '✅' : '❌')
\t},
\t{
\t\tpropName: 'personId',
\t\tpropType: 'number',
\t\theaderText: 'ID',
\t\tsortable: false
\t}
];
`;

const getPfxColumnSettingsCode = (): string =>
	`import type { ColumnSettings } from '@a-luna/svelte-simple-tables/types';
import type { PitchFx } from './PitchFx';

export const PITCH_TYPE_ABBREV_TO_NAME_MAP: { [key: string]: string } = {
\t'N/A': 'none',
\tCH: 'changeup',
\tCU: 'curveball',
\tEP: 'eephus',
\tFA: 'fastball',
\tFC: 'cutter',
\tFF: 'four-seam fastball',
\tFS: 'splitter',
\tFT: 'two-seam fastball',
\tFO: 'forkball',
\tIN: 'ball (intentional)',
\tKC: 'knuckle ball curve',
\tKN: 'knuckle ball',
\tPO: 'pitch out',
\tSC: 'screwball',
\tSI: 'sinker',
\tSL: 'slider',
\tUN: 'unknown',
};

export const BROOKS_BBREF_TEAM_ID_MAP = {
\tCHA: 'CHW',
\tCHN: 'CHC',
\tKCA: 'KCR',
\tANA: 'LAA',
\tLAN: 'LAD',
\tNYA: 'NYY',
\tNYN: 'NYM',
\tSDN: 'SDP',
\tSFN: 'SFG',
\tSLN: 'STL',
\tTBA: 'TBR',
\tWAS: 'WSN',
};

function getHomeTeamIdFromBrooksGameId(game_id: string): string {
\tconst BB_GAME_ID_REGEX =
\t\t/gid_(?<year>\d{4,4})_(?<month>\d{2,2})_(?<day>\d{2,2})_(?<away_team>[a-z]+)mlb_(?<home_team>[a-z]+)mlb_(?<game_num>\d)/;
\tconst match = BB_GAME_ID_REGEX.exec(game_id);
\treturn match?.groups?.home_team ?? '';
}

const capitalize = (string: string): string =>
\tstring.charAt(0).toUpperCase() + string.substring(1);

function formatNumber(input: number | string, precision = 0): string {
\tconst unformatted = typeof input === 'number' ? input : parseFloat(input);
\treturn unformatted.toLocaleString('en-US', {
\t\tminimumFractionDigits: precision,
\t\tmaximumFractionDigits: precision
\t});
}

const batterNameLink = (pfx: PitchFx): string =>
\t\`<a href="/player/\${pfx.batter_id_mlb}/batting">\${
\t\tpfx.batter_name
\t} (\${getBatterTeamId(pfx)})</a>\`;

const pitcherTeamLink = (pfx: PitchFx): string =>
\t\`<a href="/game?id=\${pfx.bbref_game_id}&show=box">\${getPitcherTeamId(
\t\tpfx
\t)}</a>\`;

const pitcherNameLink = (pfx: PitchFx): string =>
\t\`<a href="/player/\${pfx.pitcher_id_mlb}/pitching">\${pfx.pitcher_name}</a>\`;

const formatLaunchSpeed = (pfx: PitchFx): string => formatNumber(pfx.launch_speed, 1);
const formatLaunchAngle = (pfx: PitchFx): string => \`\${formatNumber(pfx.launch_angle, 0)}&deg;\`;
const formatLaunchDistance = (pfx: PitchFx): string => formatNumber(pfx.total_distance, 0);
const formatPitchType = (pfx: PitchFx): string =>
\tcapitalize(PITCH_TYPE_ABBREV_TO_NAME_MAP[pfx.mlbam_pitch_name]);
const formatPitchSpeed = (pfx: PitchFx): string => formatNumber(pfx.start_speed, 1);
const formatInOutZone = (pfx: PitchFx): string =>
\tpfx.inside_strike_zone === 1 ? 'Inside' : 'Outside';

function getBatterTeamId(pfx: PitchFx): string {
\tconst brooksTeamId = pfx.opponent_team_id_bb.toUpperCase();
\treturn BROOKS_BBREF_TEAM_ID_MAP[brooksTeamId] ?? brooksTeamId;
}

function getPitcherTeamId(pfx: PitchFx): string {
\tconst brooksTeamId = pfx.pitcher_team_id_bb.toUpperCase();
\tconst pitcherTeamId = BROOKS_BBREF_TEAM_ID_MAP?.[brooksTeamId] ?? brooksTeamId;
\treturn isHomeTeam(pfx) ? \`vs\${pitcherTeamId}\` : \`@\${pitcherTeamId}\`;
}

function isHomeTeam(pfx: PitchFx): boolean {
\tconst homeTeamId = getHomeTeamIdFromBrooksGameId(pfx.bb_game_id).toUpperCase();
\treturn pfx.opponent_team_id_bb === homeTeamId;
}

export const columnSettings: ColumnSettings<PitchFx>[] = [
\t{
\t\tpropName: 'batter_name',
\t\tpropType: 'string',
\t\ttooltip: 'Batter Name',
\t\tclassList: ['text-left'],
\t\tcolValue: batterNameLink
\t},
\t{
\t\tpropName: 'opponent_team_id_bb',
\t\tpropType: 'string',
\t\theaderText: 'Opp',
\t\ttooltip: 'Opponent',
\t\tclassList: ['text-center'],
\t\tcolValue: pitcherTeamLink,
\t\tsortable: false
\t},
\t{
\t\tpropName: 'launch_speed',
\t\tpropType: 'number',
\t\theaderText: 'Speed',
\t\ttooltip: 'Launch Speed (mph)',
\t\tcolValue: formatLaunchSpeed
\t},
\t{
\t\tpropName: 'launch_angle',
\t\tpropType: 'number',
\t\theaderText: 'Angle',
\t\ttooltip: 'Launch Angle',
\t\tcolValue: formatLaunchAngle
\t},
\t{
\t\tpropName: 'total_distance',
\t\tpropType: 'number',
\t\theaderText: 'Distance',
\t\ttooltip: 'Total Distance',
\t\tcolValue: formatLaunchDistance
\t},
\t{
\t\tpropName: 'ab_outcome',
\t\tpropType: 'string',
\t\theaderText: 'Outcome',
\t\ttooltip: 'Play Description'
\t},
\t{
\t\tpropName: 'pitcher_name',
\t\tpropType: 'string',
\t\theaderText: 'Pitcher',
\t\ttooltip: 'Pitcher Name',
\t\tcolValue: pitcherNameLink
\t},
\t{
\t\tpropName: 'mlbam_pitch_name',
\t\tpropType: 'string',
\t\theaderText: 'Pitch Type',
\t\ttooltip: 'Pitch Type',
\t\tcolValue: formatPitchType
\t},
\t{
\t\tpropName: 'start_speed',
\t\tpropType: 'number',
\t\theaderText: 'Speed',
\t\ttooltip: 'Pitch Speed',
\t\tcolValue: formatPitchSpeed
\t},
\t{
\t\tpropName: 'inning',
\t\tpropType: 'number',
\t\theaderText: 'Inn',
\t\ttooltip: 'Inning'
\t},
\t{
\t\tpropName: 'count',
\t\tpropType: 'string',
\t\ttooltip: 'Count'
\t},
\t{
\t\tpropName: 'inside_strike_zone',
\t\tpropType: 'number',
\t\theaderText: 'In/Out',
\t\ttooltip: 'Inside/Outside Strike Zone',
\t\tcolValue: formatInOutZone
\t}
];
`;
