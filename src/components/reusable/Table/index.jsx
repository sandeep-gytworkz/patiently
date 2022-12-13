import styled from 'styled-components'
import { useTable, usePagination, useSortBy } from 'react-table'
import './table.css';

const TableHead = styled.tr`
    /* padding: 15px 20px; */
    font-size: 1rem;
    color: black;
    text-align: start;
`

const TableWrapper = styled.table`
    /* border-collapse:separate;    */
    /* border-spacing: 0px 10px; */
    width: 100%;
    text-align: start;
    margin-top: 20px;
`

const TableColumn = styled.tr`
    background-color: white;
    text-align: start;
    /* box-shadow: 0px 0px 4px #0000001a; */
`

const TableData = styled.td`
    padding: 10px 18px;
    text-align: start;
`
const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Button = styled.button`
    display: inline-block;
    border: none;
    outline: none;
    text-decoration: none;
    padding: 5px 10px;
    outline: 0;
    border-radius: 15px;
    background-color: #e0e0e0;
    color: #202131;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    margin: 0 10px 10px 0;
    white-space: nowrap;
`

function Table({ columns, data }) {

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination,
  )

  // Render the UI for your table
  return (
    <>
      <TableWrapper {...getTableProps()}>
        <thead >
          {headerGroups?.map(headerGroup => (
            <TableHead {...headerGroup.getHeaderGroupProps()}>
              {headerGroup?.headers?.map(column => (
                <th style={{ textAlign: 'start' }} {...column.getHeaderProps(column.getSortByToggleProps())} >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </TableHead>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page?.map((row, i) => {
            prepareRow(row)
            return (
              <TableColumn {...row.getRowProps()}>
                {row?.cells?.map(cell => {
                  return <TableData {...cell.getCellProps()}>{cell.render('Cell')}</TableData>
                })}
              </TableColumn>
            )
          })}
        </tbody>
      </TableWrapper>
    </>
  )
}

export default Table;