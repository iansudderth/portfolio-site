const recipe = {
	title: 'Tuna Confit',
	serving: { amount: 6, unit: 'servings' },
	recipe: [
		{
			ingredients: [
				{ name: 'Water', amount: 600, unit: 'g' },
				{ name: 'Salt', amount: 24, unit: 'g' },
				{ name: 'Sugar', amount: 12, unit: 'g' },
			],
			procedure: ['Combine, and stir until dissolved to make a brine.'],
		},
		{
			ingredients: [
				{
					name: 'Ahi tuna, cut into 2.5 cm/1 in pieces',
					amount: 500,
					unit: 'g',
				},
			],
			procedure: ['Place in the brine, and refrigerate for 24 hours.'],
		},
		{
			ingredients: [
				{ name: 'Olive oil', amount: 500, unit: 'g' },
				{ name: 'Salt', amount: null, unit: 'to taste' },
			],
			procedure: [
				'Preheat a water bath to 51°C/124°F.',
				'Drain the tuna, rinse it in cold water, and then pat it dry.',
				'Divide the tuna evenly into three 500mL/16oz canning jars, and add enough oil to cover the fish by half an inch. Seal the jars tightly.',
				'Place the sealed jars in the water bath, and cook sous vide to a core temperature of 50°C / 122°F, about1 hour.',
				'Serve the tuna warm, or store it, refrigerated, in the canning jars.',
			],
		},
	],
};

export default recipe;
