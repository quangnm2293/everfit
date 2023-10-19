import { useEffect, useState } from 'react';
import './App.css';
import DayContainer from './components/DayContainer';
import { data } from './helper';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
	const [dataSet, setDataSet] = useState([]);
	const [isFlg, setIsFlg] = useState(false);

	const onDragEnd = result => {
		if (!result.destination) return;

		const dataLocal = JSON.parse(localStorage.getItem('data'));

		if (result.source.droppableId === result.destination.droppableId) {
			const list1 = dataLocal.filter(workout => workout.value === result.destination.droppableId)[0];
			const indexList1 = dataLocal.findIndex(workout => workout.value === result.destination.droppableId);

			const reorderedList = [...list1.workouts];
			const [movedItem] = reorderedList.splice(result.source.index, 1);
			reorderedList.splice(result.destination.index, 0, movedItem);
			dataLocal[indexList1].workouts = reorderedList;

			localStorage.setItem('data', JSON.stringify(dataLocal));

			setDataSet(dataLocal);
			setIsFlg(!isFlg);
			// window.location.reload(false);
		} else {
			const sourceList = dataLocal.filter(workout => workout.value === result.source.droppableId)[0];
			const destinationList = dataLocal.filter(
				workout => workout.value === result.destination.droppableId
			)[0];
			const [movedItem] = sourceList.workouts.splice(result.source.index, 1);
			destinationList.workouts.splice(result.destination.index, 0, movedItem);

			const indexList1 = dataLocal.findIndex(workout => workout.value === result.source.droppableId);
			const indexList2 = dataLocal.findIndex(workout => workout.value === result.destination.droppableId);

			dataLocal[indexList1].workouts = sourceList.workouts;
			dataLocal[indexList2].workouts = destinationList.workouts;
			localStorage.setItem('data', JSON.stringify(dataLocal));

			setDataSet(dataLocal);
			setIsFlg(!isFlg);
			// window.location.reload(false);
		}
	};

	useEffect(() => {
		const dataLocal = localStorage.getItem('data');
		if (!dataLocal) {
			localStorage.setItem('data', JSON.stringify(data));
			setDataSet(data);
		} else {
			setDataSet(JSON.parse(dataLocal));
		}
	}, []);
	return (
		<div className="container">
			{dataSet.map(item => (
				<div className="name-date" key={item.name}>
					{item.name}
				</div>
			))}
			<DragDropContext onDragEnd={onDragEnd}>
				{dataSet.map(item => (
					<DayContainer key={item.name} date={item.value} workouts={item.workouts} isFlg={isFlg} />
				))}
			</DragDropContext>
		</div>
	);
}

export default App;
