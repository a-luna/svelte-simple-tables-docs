import type { ColumnSettings } from '@a-luna/svelte-simple-tables/types';
import { BROOKS_BBREF_TEAM_ID_MAP, PITCH_TYPE_ABBREV_TO_NAME_MAP } from './constants';
import type { PitchFx } from './PitchFx';
import { capitalize, formatNumber, getHomeTeamIdFromBrooksGameId } from './util';

const batterNameLink = (pfx: PitchFx): string =>
	`<a href="/player/${pfx.batter_id_mlb}/batting">${pfx.batter_name} (${getBatterTeamId(pfx)})</a>`;

const pitcherTeamLink = (pfx: PitchFx): string =>
	`<a href="/game?id=${pfx.bbref_game_id}&show=box">${getPitcherTeamId(pfx)}</a>`;

const pitcherNameLink = (pfx: PitchFx): string =>
	`<a href="/player/${pfx.pitcher_id_mlb}/pitching">${pfx.pitcher_name}</a>`;

const formatLaunchSpeed = (pfx: PitchFx): string => formatNumber(pfx.launch_speed, 1);
const formatLaunchAngle = (pfx: PitchFx): string => `${formatNumber(pfx.launch_angle, 0)}&deg;`;
const formatLaunchDistance = (pfx: PitchFx): string => formatNumber(pfx.total_distance, 0);
const formatPitchType = (pfx: PitchFx): string =>
	capitalize(PITCH_TYPE_ABBREV_TO_NAME_MAP[pfx.mlbam_pitch_name]);
const formatPitchSpeed = (pfx: PitchFx): string => formatNumber(pfx.start_speed, 1);
const formatInOutZone = (pfx: PitchFx): string =>
	pfx.inside_strike_zone === 1 ? 'Inside' : 'Outside';

function getBatterTeamId(pfx: PitchFx): string {
	const brooksTeamId = pfx.opponent_team_id_bb.toUpperCase();
	return BROOKS_BBREF_TEAM_ID_MAP[brooksTeamId] ?? brooksTeamId;
}

function getPitcherTeamId(pfx: PitchFx): string {
	const brooksTeamId = pfx.pitcher_team_id_bb.toUpperCase();
	const pitcherTeamId = BROOKS_BBREF_TEAM_ID_MAP?.[brooksTeamId] ?? brooksTeamId;
	return isHomeTeam(pfx) ? `vs${pitcherTeamId}` : `@${pitcherTeamId}`;
}

function isHomeTeam(pfx: PitchFx): boolean {
	const homeTeamId = getHomeTeamIdFromBrooksGameId(pfx.bb_game_id).toUpperCase();
	return pfx.opponent_team_id_bb === homeTeamId;
}

export const pfxDataColumnSettings: ColumnSettings<PitchFx>[] = [
	{
		propName: 'batter_name',
		tooltip: 'Batter Name',
		classList: ['text-left'],
		colValue: batterNameLink
	},
	{
		propName: 'opponent_team_id_bb',
		headerText: 'Opp',
		tooltip: 'Opponent',
		classList: ['text-center'],
		colValue: pitcherTeamLink,
		sortable: false
	},
	{
		propName: 'launch_speed',
		headerText: 'Speed',
		tooltip: 'Launch Speed (mph)',
		colValue: formatLaunchSpeed
	},
	{
		propName: 'launch_angle',
		headerText: 'Angle',
		tooltip: 'Launch Angle',
		colValue: formatLaunchAngle
	},
	{
		propName: 'total_distance',
		headerText: 'Distance',
		tooltip: 'Total Distance',
		colValue: formatLaunchDistance
	},
	{
		propName: 'ab_outcome',
		headerText: 'Outcome',
		tooltip: 'Play Description'
	},
	{
		propName: 'pitcher_name',
		headerText: 'Pitcher',
		tooltip: 'Pitcher Name',
		colValue: pitcherNameLink
	},
	{
		propName: 'mlbam_pitch_name',
		headerText: 'Pitch Type',
		tooltip: 'Pitch Type',
		colValue: formatPitchType
	},
	{
		propName: 'start_speed',
		headerText: 'Speed',
		tooltip: 'Pitch Speed',
		colValue: formatPitchSpeed
	},
	{
		propName: 'inning',
		headerText: 'Inn',
		tooltip: 'Inning'
	},
	{
		propName: 'count',
		tooltip: 'Count'
	},
	{
		propName: 'inside_strike_zone',
		headerText: 'In/Out',
		tooltip: 'Inside/Outside Strike Zone',
		colValue: formatInOutZone
	}
];
