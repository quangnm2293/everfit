export const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function getDateFromDayName(dayName) {
	const today = new Date();
	const currentDay = today.getDay();

	const targetDay = daysOfWeek.indexOf(dayName);

	const daysDifference = targetDay - currentDay;

	return today.getDate() + 1 + daysDifference;
}

export const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export const fakeWorkoutNames = [
	'Core Crusher Challenge',
	'Cardio Blitz Circuit',
	'Power Plyo Intervals',
	'Flexibility Fusion Flow',
	'HIIT Heatwave Express',
	'Strength Surge Superset',
	'Zen Yoga Warrior Flow',
	'Agility Amplitude Ascent',
	'Endurance Elevation Extravaganza',
	'Tabata Torchlight Training',
];
export const fakExerciseNames = [
	'Push-Up',
	'Squat',
	'Plank',
	'Lunge',
	'Burpee',
	'Deadlift',
	'Mountain Climber',
	'Russian Twist',
	'Pull-Up',
	'Bicycle Crunch',
];
export const fakInfoNames = [
	'30 lb x 12',
	'40 lb x 8',
	'25 lb x 15',
	'35 lb x 10',
	'45 lb x 6',
	'20 lb x 20',
	'50 lb x 5',
	'15 lb x 25',
	'55 lb x 4',
	'10 lb x 30',
];

// export const data = [
// 	{
// 		name: 'MON',
// 		value: 'Monday',
// 		workouts: [],
// 	},
// 	{
// 		name: 'TUE',
// 		value: 'Tuesday',
// 		workouts: [
// 			{ name: 'Test2 Test2 Test2 Test2', exercises: [{ name: 'Test2-1', time: 2, info: '20lb' }] },
// 			{
// 				name: 'Test2-2 Test2-2 Test2-2',
// 				exercises: [
// 					{ name: 'Test2-2-1 Test2-2 Test2-2', time: 2, info: '20lb' },
// 					{ name: 'Test2-2-2', time: 2, info: '20lb 20lb 20lb 20lb 20lb 20lb 20lb 20lb' },
// 				],
// 			},
// 		],
// 	},
// 	{
// 		name: 'WED',
// 		value: 'Wednesday',
// 		workouts: [{ name: 'Test3', exercises: [{ name: 'Test3-1', time: 3, info: '30lb' }] }],
// 	},
// 	{
// 		name: 'THU',
// 		value: 'Thursday',
// 		workouts: [{ name: 'Test4', exercises: [{ name: 'Test4-1', time: 4, info: '40lb' }] }],
// 	},
// 	{
// 		name: 'FRI',
// 		value: 'Friday',
// 		workouts: [
// 			{
// 				name: 'Test5',
// 				exercises: [
// 					{ name: 'Test5-1', time: 5, info: '50lb' },
// 					{ name: 'Test5-2', time: 52, info: '52lb' },
// 				],
// 			},
// 		],
// 	},
// 	{
// 		name: 'SAT',
// 		value: 'Saturday',
// 		workouts: [{ name: 'Test6', exercises: [{ name: 'Test6-1', time: 6, info: '60lb' }] }],
// 	},
// 	{
// 		name: 'SUN',
// 		value: 'Sunday',
// 		workouts: [],
// 	},
// ];
export const data = [
	{
		name: 'MON',
		value: 'Monday',
		workouts: [],
	},
	{
		name: 'TUE',
		value: 'Tuesday',
		workouts: [],
	},
	{
		name: 'WED',
		value: 'Wednesday',
		workouts: [],
	},
	{
		name: 'THU',
		value: 'Thursday',
		workouts: [],
	},
	{
		name: 'FRI',
		value: 'Friday',
		workouts: [],
	},
	{
		name: 'SAT',
		value: 'Saturday',
		workouts: [],
	},
	{
		name: 'SUN',
		value: 'Sunday',
		workouts: [],
	},
];
// export const dataMon = {
// 	name: 'MON',
// 	value: 'Monday',
// 	workouts: [],
// };
// export const dataTue = {
// 	name: 'TUE',
// 	value: 'Tuesday',
// 	workouts: [],
// };
// export const dataWed = {
// 	name: 'WED',
// 	value: 'Wednesday',
// 	workouts: [],
// };
// export const dataThu = {
// 	name: 'THU',
// 	value: 'Thursday',
// 	workouts: [],
// };
// export const dataFri = {
// 	name: 'FRI',
// 	value: 'Friday',
// 	workouts: [],
// };
// export const dataSat = {
// 	name: 'SAT',
// 	value: 'Saturday',
// 	workouts: [],
// };
// export const dataSun = {
// 	name: 'SUN',
// 	value: 'Sunday',
// 	workouts: [],
// };
