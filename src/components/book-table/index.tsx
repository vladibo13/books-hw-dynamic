import React from 'react';

class BookTable extends React.Component<any, any> {
	render() {
		const { headers, data } = this.props;
		if (!Array.isArray(headers) || !Array.isArray(data)) return <h2> No Data In table</h2>;
		return (
			<div>
				<table className="table table-striped table-dark">
					<thead>
						<tr>{headers}</tr>
					</thead>
					<tbody>{data}</tbody>
				</table>
			</div>
		);
	}
}

export default BookTable;
