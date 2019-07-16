module.exports = {

	'login' : (req , res) => {

			res
					.status(200)
											.json({
																'message' : 'The login page works'
											})
	} ,

	'submitLogin' : (req , res) => {

			res
					.status(200)
											.json({
															'message' : 'Login authentication works'
											})

	} ,

	'register' : (req , res) => {

			res
					.status(200)
											.json({
															'message' : 'Registration page works'
											})

	} ,

	'submitRegister' : (req , res) => {

			res
					.status(200)
											.json({
															'message' : 'Registration authentication and confirmation works'
											})

	} ,

	'ensureAuthenticated' : (req , res) => {

			res
					.status(200)
											.json({
															'message' : 'Users is really authenticated'
											});
	} 

}