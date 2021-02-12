events.listen('item.tags', (event) => {
    var items = [
        'immersiveengineering:capacitor_creative',
        'immersiveengineering:capacitor_hv',
        'immersiveengineering:capacitor_lv',
        'immersiveengineering:capacitor_mv',
        'immersiveengineering:powerpack',
        'mekanism:advanced_energy_cube',
        'mekanism:advanced_induction_cell',
        'mekanism:advanced_induction_provider',
        'mekanism:basic_energy_cube',
        'mekanism:basic_induction_cell',
        'mekanism:basic_induction_provider',
        'mekanism:creative_energy_cube',
        'mekanism:elite_energy_cube',
        'mekanism:elite_induction_cell',
        'mekanism:elite_induction_provider',
        'mekanism:energy_tablet',
        'mekanism:induction_casing',
        'mekanism:induction_port',
        'mekanism:ultimate_energy_cube',
        'mekanism:ultimate_induction_cell',
        'mekanism:ultimate_induction_provider',
        'powah:battery_basic',
        'powah:battery_blazing',
        'powah:battery_hardened',
        'powah:battery_niotic',
        'powah:battery_nitro',
        'powah:battery_spirited',
        'powah:battery_starter',
        'powah:energy_cell_basic',
        'powah:energy_cell_blazing',
        'powah:energy_cell_creative',
        'powah:energy_cell_hardened',
        'powah:energy_cell_niotic',
        'powah:energy_cell_nitro',
        'powah:energy_cell_spirited',
        'powah:energy_cell_starter',
        'thermal:flux_capacitor',
        'thermal:energy_cell'
    ];
    event.get('forge:storage').add(items);
    event.get('forge:storage/energy').add(items);
});
