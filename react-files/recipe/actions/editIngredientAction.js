export const NEW_INGREDIENT = 'NEW_INGREDIENT';
export function newIngredient(sectionIndex) {
	return {
		type: NEW_INGREDIENT,
		payload: {
			sectionIndex,
		},
	};
}

export const EDIT_INGREDIENT_NAME = 'EDIT_INGREDIENT_NAME';
export function editIngredientName(sectionIndex, ingredientIndex, newName) {
	return {
		type: EDIT_INGREDIENT_NAME,
		payload: {
			sectionIndex,
			ingredientIndex,
			newName,
		},
	};
}

export const EDIT_INGREDIENT_AMOUNT = 'EDIT_INGREDIENT_AMOUNT';
export function editIngredientAmount(sectionIndex, ingredientIndex, newAmount) {
	return {
		type: EDIT_INGREDIENT_AMOUNT,
		payload: {
			sectionIndex,
			ingredientIndex,
			newAmount,
		},
	};
}

export const EDIT_INGREDIENT_UNIT = 'EDIT_INGREDIENT_UNIT';
export function editIngredientUnit(sectionIndex, ingredientIndex, newUnit) {
	return {
		type: EDIT_INGREDIENT_UNIT,
		payload: {
			sectionIndex,
			ingredientIndex,
			newUnit,
		},
	};
}

export const REORDER_INGREDIENT = 'REORDER_INGREDIENT';
export function reorderIngredient(
	sectionIndex,
	oldIngredientIndex,
	newIngredientIndex,
) {
	return {
		type: REORDER_INGREDIENT,
		payload: {
			sectionIndex,
			oldIngredientIndex,
			newIngredientIndex,
		},
	};
}

export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export function deleteIngredient(sectionIndex, ingredientIndex) {
	return {
		type: DELETE_INGREDIENT,
		payload: {
			sectionIndex,
			ingredientIndex,
		},
	};
}
