// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

StartupEvents.registry('item', event => {
	
	event.create('renderium_ingot').tag("c:ingots").tag("c:ingots/renderium") // The ingot form of Renderium, an alloy that should be hard to get. It is orange with blue nodules.
	event.create('ammo_uranium') // uses the uranium ammo model from half-life, but it isn't necessarily ammo in this game
	event.create('garbage_metalcan001a') // A generic metal can, used for holding fluids or items. It is in the shape of a tin can
	event.create('deku_nut') // A Deku Nut from The Legend of Zelda: Ocarina of Time.
	event.create('garbage_milkcarton001a') // A 1 gallon jug of milk, in a plastic jug
	event.create('garbage_milkcarton002a') // A half-gallon carton of milk, in a cardboard carton
	event.create('garbage_plasticbottle001a') // A plastic bottle, used for holding chemicals. It's lable says "WOW"
	event.create('garbage_plasticbottle002a') // A plastic bottle, used for holding chemicals.
	event.create('garbage_plasticbottle003a') // A plastic 2-liter bottle, in a soda bottle shape.
	event.create('garbage_takeoutcarton001a') // A Chinese takeout carton, used for holding food.
	event.create('garbage_takeoutcarton001a_contents').displayName("Fried Rice")
	
})

// This automatically adds item forms of all registered blocks, unless specified otherwise
StartupEvents.registry('block', event => {
	
	event.create('smb_underground_log', 'cardinal').tagBoth("c:logs").woodSoundType() //The wood texture from Super Mario Bros. (NES)'s underground levels
	event.create('smb_overworld_log', 'cardinal').tagBoth("c:logs").woodSoundType()	//The wood texture from Super Mario Bros. (NES)'s overworld levels
	event.create('smb_cobblestone').stoneSoundType() // The ground texture from Super Mario Bros. (NES)'s underwater levels, in overworld pallette
	event.create('smb_stone').stoneSoundType() // The ground texture from Super Mario Bros. (NES)'s overworld levels
	event.create('smb_smoothstone').stoneSoundType() // The hard block texture from Super Mario Bros. (NES)'s overworld levels
	event.create('smb_glitch') // A glitched-out block texture from Super Mario Bros. (NES)
	event.create('renderium_block').tag("c:storage_blocks").tag("c:storage_blocks/renderium").soundType('metal') // The block form of Renderium
	event.create('orbus').tagItem("kubejs:spheres").soundType('wool').opaque(false).fullBlock(false).waterlogged().notSolid() // A sphere-type block of the duck 'Orbus'
	event.create('hlbs_battery', 'cardinal').opaque(false).fullBlock(false).notSolid().displayName("Battery").soundType('metal') // The brush-based battery from Half-Life: Blue Shift (not the item for restoring suit power)
	event.create('oot_pot').defaultCutout().opaque(false).fullBlock(false).notSolid().displayName("Pot").soundType('decorated_pot') // The pot from The Legend of Zelda: Ocarina of Time
	event.create('resonance_casing').texture("kubejs:block/trrm_pan6").soundType('metal') // A casing block using an orange metal plate texture from Half-life
	event.create('mq02radio_tower').soundType('metal').defaultCutout() // A ~9 block tall radio tower from on of the Fallout games
	event.create('fallout_scafolding').soundType('metal').defaultCutout() // Scaffolding full-block using the X-beam texture from mq02radio_tower
	event.create('fallout_casing').soundType('metal').defaultCutout() // A casing block using the metal plate texture from mq02radio_tower
	
})

StartupEvents.registry('fluid', event => {
	
	event.create('uranium_waste')
		.displayName('Uranium Waste')
		.stillTexture('kubejs:block/uranium_waste_still')
		.flowingTexture('kubejs:block/uranium_waste_flow')
	event.create('plutonium_waste')
		.displayName('Plutonium Waste')
		.stillTexture('kubejs:block/plutonium_waste_still')
		.flowingTexture('kubejs:block/plutonium_waste_flow')
	event.create('garbage_plasticbottle001a_contents', 'thin')
		.displayName('Alkline-Based Cleaner')
		.tint(0x485645)
	event.create('garbage_plasticbottle002a_contents', 'thin')
		.tint(0xc070c8) // Placeholder color, I don't know what this is supposed to be yet
	event.create('garbage_plasticbottle003a_contents', 'thin')
		.tint(0xc0c870) // Ditto
})

PowerfulEvents.registerCapabilities(event => {
	event.registerItem('powerfuljs:fixed_storage_fe',{ // This dosn't do what I want. It just makes the item store FE, not the block
		capacity:10000,
		maxExtract: 1000,
		maxReceive: 1000
	}, "kubejs:hlbs_battery")
})