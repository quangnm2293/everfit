import { useEffect, useState } from 'react';
// import ExerciseContainer from './ExercisContainer';
import './common.css';
import PropTypes from 'prop-types';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { fakExerciseNames, fakInfoNames } from '../helper';

const WorkoutContainer = ({ index, name, flag, draggableProps, refE, dragHandleProps, setShow, id }) => {
	const [exercises, setExercises] = useState([]);
	const addExercise = name => {
		const dataLocal = JSON.parse(localStorage.getItem('data'));
		const indexE = dataLocal[index]?.workouts.findIndex(data => data.name === name);
		if (indexE !== -1) {
			dataLocal[index].workouts[indexE].exercises = [
				...dataLocal[index].workouts[indexE].exercises,

				{
					id: crypto.randomUUID(),
					name: fakExerciseNames[Math.round(Math.random() * 9)],
					time: Math.round(Math.random() * 9),
					info: fakInfoNames[Math.round(Math.random() * 9)],
				},
			];
			setExercises(dataLocal[index].workouts[indexE].exercises);
		}
		localStorage.setItem('data', JSON.stringify(dataLocal));
	};

	useEffect(() => {
		const dataLocal = JSON.parse(localStorage.getItem('data'));
		const w = dataLocal[index]?.workouts.filter(data => data.name === name);

		if (w) {
			setExercises(w[0]?.exercises);
		} else {
			setExercises([]);
		}
	}, [index, name, flag]);
	return (
		<div className="workout-container" ref={refE} {...draggableProps} {...dragHandleProps}>
			<div
				className="workout-title-container"
				onMouseDown={() => setShow(false)}
				onMouseUp={() => setShow(true)}
			>
				<span className="workout-title">{name}</span>

				<svg xmlns="http://www.w3.org/2000/svg" width="11" height="4" viewBox="0 0 11 4" fill="none">
					<ellipse cx="1.5" cy="1.60498" rx="1.5" ry="1.47981" fill="#726EE4" />
					<ellipse cx="5.5" cy="1.60498" rx="1.5" ry="1.47981" fill="#726EE4" />
					<ellipse cx="9.5" cy="1.60498" rx="1.5" ry="1.47981" fill="#726EE4" />
				</svg>
			</div>

			<Droppable droppableId={id}>
				{provided => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						{provided.placeholder}

						{exercises.map((exercise, i) => (
							<Draggable key={exercise.id} draggableId={exercise.id} index={i}>
								{provided => (
									<div
										className="exercise-container"
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										ref={provided.innerRef}
									>
										<div className="exercise-title">{exercise.name}</div>
										<div className="exercise-information">
											<span className="time">{exercise.time + 'x'}</span>
											<span className="info">{exercise.info}</span>
										</div>
									</div>
								)}
							</Draggable>
						))}
					</div>
				)}
			</Droppable>

			<div className="icon">
				<div onClick={() => addExercise(name)}>
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
		</div>
	);
};
export default WorkoutContainer;

WorkoutContainer.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	index: PropTypes.number,
	flag: PropTypes.bool,
	draggableProps: PropTypes.any,
	refE: PropTypes.any,
	dragHandleProps: PropTypes.any,
	setShow: PropTypes.any,
};
