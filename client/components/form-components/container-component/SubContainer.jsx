import React from 'react'

const SubContainer = (props) => {
  const { marketName } = props;
  const test = [      <tr className="row" key={1}>
  <td className="row" id="foodBox">
    {'pizza'}
  </td>
  <td className="row" id="priceBox">
    {'10'}
  </td>
</tr>]

  return (
      <div>
        <h3 className="shop">{marketName}</h3>
        <table className="paper">
          <tbody>
            <tr>
              <th className="col">Food</th>
              <th className="col">Prices</th>
            </tr>
            {test}
          </tbody>
        </table>
      </div>
  )
}

export default SubContainer;