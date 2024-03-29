module.exports = {

		'about' : (req , res) => {

						res.render('about' , {

																			'content' : {
																										'title' : 'Know more about us' ,

																										'content' : 'Traditionally in the bygone, information systems were used to support business activities operations with the aim to reduce costs by automating many of the business operations.\
																									\
																										As businesses became concious of the importance of information systems, the role of information systems changed. From its usual functions of supporting business\
																									\
																										operations and day to day business routines, information systems are used to reduce business risks and to ensure that correct information is made available,\
																									\
																										so managers can make better and strategic decisions. The purpose of this paper is to give an understanding how businesses are using information systems\
																									\
																										to achieve their goals. It specifically addresses more closely the impact that information systems have in improving the decision making.\
																									\
																										Although limited this paper sets out to explore the importance of information systems in decision-making and concludes\
																									\
																										that more attention should be paid to information systems usage for decision-making purposes.'
																			} 
						})
		} ,

		'contact' : (req , res) => {

						res.render('contact' , {

																			'content' : {
																										'title' : 'Reach out to us' ,

																										'content' : 'We are here to help if you have an assignment you want to get completed or want to get completed. You can contact and reach us through the followings: -'
																			} 
						})
		} ,

		'privacyPolicy' : (req , res) => {

						res.render('privacy-policy' , {

																			'content' : {
																										'title' : 'Privacy Policy' ,

																										'content' : ''
																			} 
						})
		} ,

		'services' : (req , res) => {

						res.render('services' , {

																			'content' : {
																										'title' : 'What we offer' ,

																										'content' : 'Traditionally in the bygone, information systems were used to support business activities operations with the aim to reduce costs by automating many of the business operations.\
																									\
																										As businesses became concious of the importance of information systems, the role of information systems changed. From its usual functions of supporting business\
																									\
																										operations and day to day business routines, information systems are used to reduce business risks and to ensure that correct information is made available,\
																									\
																										so managers can make better and strategic decisions. The purpose of this paper is to give an understanding how businesses are using information systems\
																									\
																										to achieve their goals. It specifically addresses more closely the impact that information systems have in improving the decision making.\
																									\
																										Although limited this paper sets out to explore the importance of information systems in decision-making and concludes\
																									\
																										that more attention should be paid to information systems usage for decision-making purposes.'
																			} 
						})
		} 
}