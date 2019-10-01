import React from 'react';
import BookTable from '../book-table';
import { books } from '../book-loader/bookLoader';

class Books extends React.Component<any, any> {
	constructor(props: any) {
		super(props);

		this.state = {
			books: books
		};
	}
	render() {
		const { books } = this.state;
		const headers = getHeaders(books);
		const data = getTableBody(books);
		return (
			<div>
				<h1>Hello From Books</h1>
				<BookTable headers={headers} data={data} />
			</div>
		);
	}
}

function getHeaders(data: Array<any>) {
	if (!data.length) return;
	const [ firstItemInArray ] = data; // const item = data[0]
	console.log(firstItemInArray, 'firstItemInArray');
	return Object.entries(firstItemInArray).map(([ key, value ]) => {
		if (key === 'link')
			return (
				<th>
					<a>{key}</a>
				</th>
			);
		return <th> {key} </th>;
	});
	// return data.filter(header => header.active).map((header: any) => <th> {header.isIcon && <span> &#129327;</span>} {header.key} </th>)
}

function getTableBody(data: Array<any>) {
	return data.map((dataItem: any) => {
		return <tr>{getTableRow(dataItem)}</tr>;
	});
}

// &#127379;

function getTableRow(row: any) {
	// return Object.values(row).map((value: any) => {
	//     if (Array.isArray(value)) return <td>{value.join(",")}</td>
	//     return <td> {value} </td>
	// })

	return Object.entries(row).map(([ key, value ]: any) => {
		// if (key === "region" && value === "Europe") return <td> <span>&#127379;</span> {value} </td>
		// if (Array.isArray(value)) {
		//     const strBorders = value.join(",");
		//     return strBorders.includes("IRN") ? <td> <span>&#128013;</span> {strBorders} </td> : <td> {strBorders} </td>

		// }
		if (key === 'imageLink') {
			return (
				<td>
					<img src={value as string} height={100} width={100} />{' '}
				</td>
			);
		}

		if (key === 'link') {
			return (
				<td>
					<a href={value} className="badge badge-primary p-3">
						wiki link
					</a>
				</td>
			);
		}
		return <td> {value} </td>;
	});
}
export default Books;
