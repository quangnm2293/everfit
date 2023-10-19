import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { fakExerciseNames, fakInfoNames, fakeWorkoutNames, getDateFromDayName } from '../helper';
import WorkoutContainer from './WorkoutContainer';
import './common.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const DayContainer = ({ date, isFlg }) => {
	const [workouts, setWorkouts] = useState([]);
	const [show, setShow] = useState(true);

	const [flag, setFlag] = useState(false);
	const [index, setIndex] = useState(0);
	const today = new Date();
	const currentDay = today.getDate();
	const addWorkout = date => {
		const dataLocal = JSON.parse(localStorage.getItem('data'));
		const index = dataLocal.findIndex(item => item.value === date);

		dataLocal[index].workouts = [
			...dataLocal[index].workouts,
			{
				id: crypto.randomUUID(),
				name: fakeWorkoutNames[Math.round(Math.random() * 9)],
				exercises: [
					{
						id: crypto.randomUUID(),
						name: fakExerciseNames[Math.round(Math.random() * 9)],
						time: 2,
						info: fakInfoNames[Math.round(Math.random() * 9)],
					},
				],
			},
		];
		localStorage.setItem('data', JSON.stringify(dataLocal));

		setWorkouts(dataLocal[index].workouts);
	};

	const onDragEnd = result => {
		if (!result.destination) return;

		const dataLocal = JSON.parse(localStorage.getItem('data'));
		const index = dataLocal.findIndex(item => item.value === date);

		if (result.source.droppableId === result.destination.droppableId) {
			const list1 = dataLocal[index].workouts.filter(
				workout => workout.id === result.destination.droppableId
			)[0];
			const indexList1 = dataLocal[index].workouts.findIndex(
				workout => workout.id === result.destination.droppableId
			);

			const reorderedList = [...list1.exercises];
			const [movedItem] = reorderedList.splice(result.source.index, 1);
			reorderedList.splice(result.destination.index, 0, movedItem);
			dataLocal[index].workouts[indexList1].exercises = reorderedList;
			localStorage.setItem('data', JSON.stringify(dataLocal));

			setFlag(!flag);
		} else {
			const sourceList = dataLocal[index].workouts.filter(
				workout => workout.id === result.source.droppableId
			)[0];
			const destinationList = dataLocal[index].workouts.filter(
				workout => workout.id === result.destination.droppableId
			)[0];
			const [movedItem] = sourceList.exercises.splice(result.source.index, 1);
			destinationList.exercises.splice(result.destination.index, 0, movedItem);

			const indexList1 = dataLocal[index].workouts.findIndex(
				workout => workout.id === result.source.droppableId
			);
			const indexList2 = dataLocal[index].workouts.findIndex(
				workout => workout.id === result.destination.droppableId
			);

			dataLocal[index].workouts[indexList1].exercises = sourceList.exercises;
			dataLocal[index].workouts[indexList2].exercises = destinationList.exercises;
			localStorage.setItem('data', JSON.stringify(dataLocal));

			setFlag(!flag);
		}
	};

	useEffect(() => {
		const dataLocal = JSON.parse(localStorage.getItem('data'));
		const index = dataLocal.findIndex(item => item.value === date);
		setIndex(index);
		if (dataLocal[index]?.workouts) {
			setWorkouts(dataLocal[index]?.workouts);
		} else {
			setWorkouts([]);
		}
	}, [date, flag, isFlg]);
	return (
		<div className="item">
			<div className="day">
				<span className={currentDay === getDateFromDayName(date) ? 'current-day' : ''}>
					{getDateFromDayName(date)}
				</span>
				<div onClick={() => addWorkout(date)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
					>
						<ellipse cx="6" cy="5.91925" rx="6" ry="5.91925" fill="#A0A8B1" />
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M7 4.93271V2.95963H5V4.93271H3V6.90579H5V8.87887H7V6.90579H9V4.93271H7Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>

			<Droppable droppableId={date}>
				{provided => (
					<div {...provided.droppableProps} ref={provided.innerRef} className="test">
						{provided.placeholder}

						{show ? (
							<DragDropContext onDragEnd={onDragEnd}>
								{workouts.map((workout, i) => (
									<Draggable key={workout.id} draggableId={workout.id} index={i}>
										{provided => (
											<WorkoutContainer
												workout={workout}
												name={workout.name}
												id={workout.id}
												index={index}
												date={date}
												flag={flag}
												draggableProps={provided.draggableProps}
												dragHandleProps={provided.dragHandleProps}
												refE={provided.innerRef}
												setShow={setShow}
											/>
										)}
									</Draggable>
								))}
							</DragDropContext>
						) : (
							<>
								{workouts.map((workout, i) => (
									<Draggable
										key={workout.name}
										draggableId={workout.name}
										index={i}
									>
										{provided => (
											<WorkoutContainer
												key={workout.name}
												workout={workout}
												name={workout.name}
												index={index}
												date={date}
												flag={flag}
												draggableProps={provided.draggableProps}
												dragHandleProps={provided.dragHandleProps}
												refE={provided.innerRef}
												setShow={setShow}
											/>
										)}
									</Draggable>
								))}
							</>
						)}
					</div>
				)}
			</Droppable>
		</div>
	);
};
export default DayContainer;

DayContainer.propTypes = {
	date: PropTypes.string,
	drop: PropTypes.any,
	isFlg: PropTypes.bool,
};
