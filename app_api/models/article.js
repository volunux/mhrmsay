const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({

			'author' : {
										'type' : String ,

											'required' : true
						} ,
								
								'reviewText': {
																'type' : String ,
																									'required' : true
													} ,

										'createdOn' : {
																		'type': Date ,
																										'default': Date.now
														}
						});

const articleSchema = new mongoose.Schema({

				'articleTitle' : {
														'type' : String ,
																							'required' : [true , 'You must provide a article or an article title'] 
											} ,
																															
						'articleBody' : {
															'type' : String ,
																								'maxlength' : [5000 , 'The texts cannot exceed more than 5000 characters']
											} ,
							
								'articleDate' : {
																'type' : Date ,
																									'default' : Date.now  		
											} ,

										'author' : {
																	'type' : String ,
																										'maxlenth' : [20 , 'Name of Author cannot exceed 20 characters']
											} ,

												'reviews' : [reviewSchema]
 	});

mongoose.model('Article', articleSchema);