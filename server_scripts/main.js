ServerEvents.recipes(event => {
	event.shapeless(
		Item.of('exdeorum:wood_chippings', 1),
		[
			Item.of('create_blaze_burner_fuels:wood_dust',8)
		]
	)
	
	event.shapeless(
		Item.of('kubejs:canned_bolognese_box', 1),
		[
			Item.of('kubejs:canned_bolognese',6)
		]
	)
	event.shapeless(
		Item.of('kubejs:canned_bolognese',6),
		[
			Item.of('kubejs:canned_bolognese_box', 1)
		]
	)
	createDeploying(event,'kubejs:canned_bolognese','kubejs:can_opener','kubejs:canned_bolognese_open',true)
	createEmptying(event,"kubejs:canned_bolognese_open", "kubejs:garbage_metalcan001a", 'kubejs:bolognese', 300)
	createFilling(event,"kubejs:garbage_metalcan001a", "kubejs:bolognese", 300, "kubejs:canned_bolognese_open", 1)

	createFilling(event,"kubejs:garbage_metalcan001a", "kubejs:uranium_waste", 250, "kubejs:ammo_uranium", 1)
	
	createEmptying(event,"kubejs:garbage_plasticbottle001a", "kubejs:garbage_metalcan001a", 'kubejs:garbage_plasticbottle001a_contents', 500)
	createEmptying(event,"kubejs:garbage_plasticbottle002a", "kubejs:garbage_metalcan001a", 'kubejs:garbage_plasticbottle002a_contents', 250)
	createEmptying(event,"kubejs:garbage_plasticbottle003a", "kubejs:garbage_metalcan001a", 'kubejs:garbage_plasticbottle003a_contents', 200)
	
	// I would like to add some actual electonic components, but this will do for now
	createMechanicalCrafting(event,
		[
			"T",
			"S",
			"S",
			"S",
			"S",
			"S",
			"S",
			"S",
			"S"
		],
		{
			"S": {
				"item": "kubejs:fallout_scafolding"
			},
			"T": {
				"item": "kubejs:fallout_casing"
			}
		},
		"kubejs:mq02radio_tower", 1
	)
	
	createDeepFrying(event,"minecraft:iron_block","kubejs:uranium_waste",125,"kubejs:fallout_casing",200)
	event.stonecutting('2x kubejs:fallout_scafolding', "kubejs:fallout_casing")
	
	// AI stuff below here, should be removed or replaced
	// If your someone reading this, please put in a bug report on github. I don't want AI stuff in something I'm releasing
	
	// this should be made significantly harder to get
	event.shaped(
		Item.of('kubejs:renderium_ingot', 1),
		[
			'CLC',
			' I ',
			' C '
		],
		{
			C: 'minecraft:copper_ingot',
			L: 'minecraft:lapis_lazuli',
			I: 'minecraft:iron_ingot'
		}
	)

	// This feels like it's just a patch
	event.shapeless(
		Item.of('kubejs:deku_nut', 2),
		[
			'minecraft:oak_sapling',
			'minecraft:cocoa_beans'
		]
	)

	// I fell like this should use a modded recipe type.
	event.shaped(
		Item.of('kubejs:garbage_metalcan001a', 1),
		[
			' N ',
			'NNN',
			' N '
		],
		{
			N: 'minecraft:iron_nugget'
		}
	)

})