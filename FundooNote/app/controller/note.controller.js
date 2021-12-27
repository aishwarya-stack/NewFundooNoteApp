class noteController {
  createNote =(req, res) => {
    return res.status(201).send({
			success: true,
			message: "controller added succesfully"
		});
}
}
  module.exports = new noteController();