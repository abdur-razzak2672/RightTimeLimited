import React from 'react'

function BlogDetails() {
  return (
    <div>
        <div class="page-header">
			<div class="page-header__bg"
				style={{backgroundImage: `url('assets/images/background/page-header-bg-1-1.jpg')`}}></div>
			
			<div class="container">
				<ul class="thm-breadcrumb list-unstyled">
					<li><a href="index.html">Home</a></li>
					<li>Blog</li>
				</ul>
				<h2 class="page-header__title">Blog Details</h2>
			</div>
		</div>

		<section class="section-padding--bottom section-padding--top">
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<div class="blog-details__image">
							<img src="assets/images/blog/blog-d-1-1.jpg" alt=""/>
						</div> 
						<div class="blog-card-one__meta">
							<div class="blog-card-one__date">
								<i class="fa fa-calendar-alt" aria-hidden="true"></i>
								July, 25, 2022
							</div> 
							<a href="blog.html" class="blog-card-one__category">Designer</a>
 						</div> 
						<h3 class="blog-card-one__title blog-details__title">Web design done Delightful
							Visualization Examples</h3>
						<div class="blog-details__content">
							<p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many
								variations of passages of Lorem Ipsum available, but the majority have alteration in
								some injected or words which don't look even slightly believable. If you are going to
								use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden
								in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
								predefined chunks as necessary, making this the first true generator on the Internet. It
								uses a dictionary of over 200 Latin words, combined with a handful of model sentence
								structures, to generate Lorem Ipsum which looks reasonable. </p>
							<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type simen book. It has
								survived not only five centuries, but also the leap into electronic typesetting.</p>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem Ipsum has
								been the industry's standard dummy text ever since the when an unknown printer took a
								galley of type and scrambled it to make a type specimen book. It has survived not only
								five centuries, but also the leap into unchanged.</p>
						</div> 
						<div class="blog-details__meta">
							<div class="blog-details__tags">
								<span>Tags</span>
								<a href="#">Development</a>
								<a href="#">Designing</a>
							</div> 
							<ul class="blog-details__share">
								<li><a href="#"><i class="fab fa-twitter"></i></a></li>
								<li><a href="#"><i class="fab fa-facebook"></i></a></li>
								<li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
								<li><a href="#"><i class="fab fa-instagram"></i></a></li>
							</ul> 
						</div> 
						<div class="author-one">
							<div class="author-one__image">
								<img src="assets/images/blog/author-1-1.jpg" alt=""/>
							</div> 
							<div class="author-one__content">
								<h3 class="author-one__title">Christine Eve</h3> 
								<p class="author-one__text">Lorem ipsum is simply free text by copytyping refreshing.
									Neque porro est qui dolorem ipsum quia quaed veritatis et quasi architecto.</p>
 							</div> 
						</div> 
						<div class="comments-one">
							<h3 class="comments-one__title">2 Comments</h3> 
							<div class="comments-one__item">
								<div class="comments-one__item__image">
									<img src="assets/images/blog/comment-1-1.png" alt=""/>
								</div> 
								<div class="comments-one__item__content">
									<h3 class="comments-one__item__title">Kevin Martin</h3>
								 
									<p class="comments-one__item__text">It has survived not only five centuries, but
										also the leap into electronic typesetting simply fee text aunchanged. It was
										popularised in the sheets containing lorem ipsum is simply free text.</p>
								 
									<a href="#" class="thm-btn comments-one__item__btn"><span>Reply</span></a>
								 
								</div> 
							</div> 
							<div class="comments-one__item">
								<div class="comments-one__item__image">
									<img src="assets/images/blog/comment-1-2.png" alt=""/>
								</div> 
								<div class="comments-one__item__content">
									<h3 class="comments-one__item__title">Sarah Albert</h3>
								 
									<p class="comments-one__item__text">It has survived not only five centuries, but
										also the leap into electronic typesetting simply fee text aunchanged. It was
										popularised in the sheets containing lorem ipsum is simply free text.</p>
 									<a href="#" class="thm-btn comments-one__item__btn"><span>Reply</span></a>
 								</div> 
							</div>
						</div>
						<div class="comment-form">
							<h3 class="comment-form__title">Leave a Comment</h3> 
							<form action="assets/inc/sendemail.php"
								class="contact-one__form contact-form-validated comment-form__form">
								<div class="row ">
									<div class="col-lg-6 col-md-12">
										<input type="text" placeholder="Your name" name="name"/>
									</div> 
									<div class="col-lg-6 col-md-12">
										<input type="email" placeholder="Email address" name="email"/>
									</div>
									<div class="col-lg-12 col-md-12">
										<textarea name="message" placeholder="Write message"/> 
									</div> 
									<div class="col-md-12">
										<button class="thm-btn contact-one__btn" type="submit"><span>Submit
												comment</span></button>
									</div>
								</div>
							</form>

						</div>
					</div>
					<div class="col-lg-4">
						<div class="sidebar">
							<div class="sidebar__item sidebar__item--search">
								<form action="#" class="sidebar__search">
									<label for="search" class="sr-only">search here</label>
									<input type="text" placeholder="Search Here" />
									<button type="submit" aria-label="search submit" class="thm-btn">
										<span><i class="icon-magnifying-glass"></i></span>
									</button>
								</form>
							</div>
							<div class="sidebar__item sidebar__item--posts">
								<h3 class="sidebar__title">Latest Posts</h3>
								<ul class="sidebar__posts">
									<li>
										<div class="sidebar__posts__image">
											<img src="assets/images/blog/blog-s-1-1.png" alt=""/>
										</div>
										<div class="sidebar__posts__content">
											<div class="sidebar__posts__date">
												<i class="fa fa-comments"></i>
												2 Comments
											</div>
											<h3 class="sidebar__posts__title"><a href="blog-details.html">Tech
													experiences that
													connect us</a></h3>
										</div>
									</li>
									<li>
										<div class="sidebar__posts__image">
											<img src="assets/images/blog/blog-s-1-2.png" alt=""/>
										</div>
										<div class="sidebar__posts__content">
											<div class="sidebar__posts__date">
												<i class="fa fa-comments"></i>
												2 Comments
											</div> 
											<h3 class="sidebar__posts__title"><a href="blog-details.html">Tech
													experiences that
													connect us</a></h3> 
										</div> 
									</li>
									<li>
										<div class="sidebar__posts__image">
											<img src="assets/images/blog/blog-s-1-3.png" alt=""/>
										</div> 
										<div class="sidebar__posts__content">
											<div class="sidebar__posts__date">
												<i class="fa fa-comments"></i>
												2 Comments
											</div> 
											<h3 class="sidebar__posts__title"><a href="blog-details.html">Tech
													experiences that
													connect us</a></h3> 
										</div> 
									</li>
								</ul> 
							</div> 
							<div class="sidebar__item sidebar__item--category">
								<h3 class="sidebar__title">Categories</h3> 
								<ul class="sidebar__category">
									<li>
										<a href="#">Web Development</a>
									</li>
									<li>
										<a href="#">Digital Marketing</a>
									</li>
									<li>
										<a href="#">Technology</a>
									</li>
									<li>
										<a href="#">Data Analysis</a>
									</li>
									<li>
										<a href="#">Cyber Security</a>
									</li>
								</ul> 
							</div> 
							<div class="sidebar__item sidebar__item--tags">
								<h3 class="sidebar__title">Tags</h3> 
								<div class="sidebar__tags">
									<a href="#">Development</a>
									<a href="#">Designing</a>
									<a href="#">Business</a>
									<a href="#">Marketing</a>
									<a href="#">technology</a>
								</div> 
							</div> 
						</div>  
					</div> 
				</div> 
			</div>
		</section><br/><br/>

    </div>
  )
}

export default BlogDetails