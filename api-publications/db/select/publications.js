module.exports.findOne = function (client, req, res) {
	const id = parseInt(req.params.id)
	let query = `Select * from "Users" where id = ${id} limit 1`
	client.query(query, (err, result) => {
		if (!err) {
			res.status(201)
			res.send(result.rows)
		} else {
			console.log(err.message)
		}
	})
}

module.exports.getPublicationsForPagination = function (client, req, res) {
	let limit = parseInt(req.params.limit)
	let offset = parseInt(req.params.offset)
	let query = `Select * from "post" by offset ${offset} limit ${limit}`
	client.query(query, (err, result) => {
		if (!err) {
			res.status(200)
			res.send(result.rows)
		} else {
			console.log(err.message)
		}
	})
}


module.exports.getPublications = function (client, req, res) {
	let query = `Select * from "post"`
	client.query(query, (err, result) => {
		if (!err) {
			res.status(200)
			res.send(result.rows)
		} else {
			console.log(err.message)
		}
	})
}