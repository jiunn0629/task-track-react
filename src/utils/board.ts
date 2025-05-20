import {
	BOARD_SECTIONS,
	type BoardSectionsType,
	type Status,
	type Task,
} from '../types/Task.ts';
import { getTasksByStatus } from './task';

export const initializeBoard = (tasks: Task[]) => {
	const boardSections: BoardSectionsType = {};

	Object.keys(BOARD_SECTIONS).forEach((boardSectionKey) => {
		boardSections[boardSectionKey] = getTasksByStatus(
			tasks,
			boardSectionKey as Status
		);
	});

	return boardSections;
};

export const findBoardSectionContainer = (
	boardSections: BoardSectionsType,
	id: string
) => {
	if (id in boardSections) {
		return id;
	}

	const container = Object.keys(boardSections).find((key) =>
		boardSections[key].find((item) => item.id === id)
	);
	return container;
};
