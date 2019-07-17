module.exports = {

		'homepage' : (req , res) => {

					res.render('about' , {
																			'content' : {
																										'title' : 'Niteco Cyber Links' ,

																										'content' : ''
																			} 
						})
	} ,

		'blog' : (req , res) => {


				res
						.status(200)
												.json({
																'message' : 'The blog also works'
												})
		} ,

		'blogArticle' : (req , res) => {

				res
						.status(200)
												.json({
																'message' : 'Blog articles works'
												})
		} ,

		'createArticle' : (req , res) => {

				res
						.status(200)
												.json({
																'message' : 'Create article page works'
												})

		} ,

		'submitArticle' : (req , res) => {

				res
						.status(200)
												.json({
																'message' : 'Submit article works'
												})
		} ,

}