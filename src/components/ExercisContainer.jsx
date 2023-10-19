import './common.css';
import PropTypes from 'prop-types';

const ExerciseContainer = ({ exercise, ref }) => {
	return (
		<div className="exercise-container" ref={ref}>
			<div className="exercise-title">{exercise.name}</div>
			<div className="exercise-information">
				<span className="time">{exercise.time + 'x'}</span>
				<span className="info">{exercise.info}</span>
			</div>
		</div>
	);
};
export default ExerciseContainer;

ExerciseContainer.propTypes = {
	exercise: PropTypes.object,
	ref: PropTypes.element,
};
