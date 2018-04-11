const recipe = {
  title: 'Warm Potato and Pistachio Pesto Salad',
  serving: { amount: 8, unit: 'servings' },
  recipe: [
    {
      ingredients: [
        { name: 'Italian basil leaves', amount: 80, unit: 'g' },
        { name: 'Cilantro leaves', amount: 70, unit: 'g' },
        { name: 'Chives', amount: 70, unit: 'g' },
        { name: 'Scallion greens', amount: 70, unit: 'g' },
      ],
      procedure: [
        'Blanch in boiling water individually until tender, about 2 min each.',
        'Cool in ice water and squeeze to remove excess moisture.',
        'Reserve refrigerated.',
      ],
    },
    {
      ingredients: [{ name: 'Garlic cloves, peeled', amount: 16, unit: 'g' }],
      procedure: ['Blanch in boiling water for 2 min. Drain and reserve.'],
    },
    {
      ingredients: [
        {
          name: 'Extra virgin olive oil',
          amount: 190,
          unit: 'g',
        },
        {
          name: 'Parmiggiano Reggiano, finely grated',
          amount: 100,
          unit: 'g',
        },
        {
          name: 'Pistachios, peeled and toasted',
          amount: 100,
          unit: 'g',
        },
        { name: 'Roasted-pistachio oil', amount: 40, unit: 'g' },
        {
          name: 'Spinach puree (see page 2·424)',
          amount: 30,
          unit: 'g',
        },
        { name: 'Lemon juice', amount: 20, unit: 'g' },
      ],
      procedure: [
        'Puree together with cooked herbs and blanched garlic until smooth.',
      ],
    },
    {
      ingredients: [
        { name: 'Salt', amount: null, unit: 'to taste', scaling: null },
        {
          name:
            'Microcrystalline cellulose (AviceI CG 200, FMC BioPolymer brand)',
          amount: 7.8,
          unit: 'g',
        },
        {
          name: 'Xanthan gum (Keltrol T,CP Kelco brand)',
          amount: 1.56,
          unit: 'g',
        },
      ],
      procedure: [
        'Season Pesto with Salt',
        'Blend emulsifiers into pistachio pesto to fully hydrate.',
        'Vacuum seal, and refrigerate for at least 1h to macerate.',
      ],
    },
    {
      ingredients: [
        {
          name: 'Fingerling potatoes, skin on',
          amount: 800,
          unit: 'g',
        },
        { name: 'Olive oil', amount: 80, unit: 'g' },
      ],
      procedure: [
        'Vacuum seal potatoes and cook sous vide in 90°C / 194°F ath until tender, about 45 min.',
        'Remove from bag while still warm.',
        'Slice thinly.',
        'Toss with pesto as desired.',
      ],
    },
  ],
};

export default recipe;
