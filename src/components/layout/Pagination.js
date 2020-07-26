import React from 'react';

function Pagination({ postsPerPage, totalPosts, setCurrentPage, currentPage }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map((n) => (
					<li className="page-item" key={n}>
						<a
							href="#"
							onClick={() => setCurrentPage(n)}
							className={
								currentPage === n ? 'page-link active' : 'page-link'
							}
						>
							{n}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Pagination;
