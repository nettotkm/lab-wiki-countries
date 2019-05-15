import React from 'react';
import countries from '../../countries.json' ;

export const countriesList = () => {
  return (
    <div>
      {countries.map((eachCountry, index) => {
        console.log(eachCountry)
        return (
          <div >
            <ul>
              <li>
                {eachCountry}
              </li>
            </ul>
          </div>
        )
      })}

  </div>
  )
}

  export default countriesList;
