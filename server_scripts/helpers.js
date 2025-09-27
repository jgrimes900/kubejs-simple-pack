function createDeepFrying(event, input_i, input_f, input_f_a, output_i, time, heating){
	if (time == null) {time = 100}
	if (heating == null) {heating = 0}
	let recipe = {
		"type": "create_bic_bit:deep_frying",
		"ingredients": [
			{
				"item": input_i
			},
			{
				"type": "fluid_stack",
				"amount": input_f_a,
				"fluid": input_f
			}
		],
		"processingTime": time,
		"results": [
			{
				"id": output_i
			}
		]
	}
	if (heating > 0) {
		recipe.heat_requirement = (heating == 1) ? "heated" : "superheated";
	}
	event.custom(recipe);
}

function createEmptying(event, input, output_i, output_f, output_a){
	let recipe = {
		"type": "create:emptying",
		"ingredients": [
			{
				"item": input
			}
		],
		"results": [
			{
				"amount": output_a,
				"id": output_f
			}
		]
	}
	if (output_i != null) {
		recipe.results.unshift({"id": output_i});
	}
	event.custom(recipe)
}

function createFilling(event, input_i, input_f, input_f_a, output_f, output_a){
	event.custom({
		"type": "create:filling",
		"ingredients": [
			{
				"item": input_i
			},
			{
			"type": "fluid_stack",
			"amount": input_f_a,
			"fluid": input_f
			}
		],
		"results": [
			{
				"item": {
					"id": output_f,
					"count": output_a
				}
			}
		]
	})
}

function createMechanicalCrafting(event, pattern, keys, output, output_a, accept_mirrored, category){
	if (accept_mirrored == null) {accept_mirrored = true}
	if (category == null) {category = "misc"}
	event.custom({
		"type": "create:mechanical_crafting",
		"accept_mirrored": accept_mirrored,
		"category": category,
		"key": keys,
		"pattern": pattern,
		"result": {
			"count": output_a,
			"id": output
		}
	})
}
