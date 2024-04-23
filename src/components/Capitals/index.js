import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeId: event.target.value})
  }

  getCoutry = () => {
    const {activeId} = this.state
    const data = countryAndCapitalsList.filter(each => each.id === activeId)
    return data[0].country
  }

  render() {
    const country = this.getCoutry()
    console.log(country)
    return (
      <div className="bgContainer">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <form className="form">
            <select id="selectElemet" onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="selectElemet" className="labelText">
              {' '}
              is capital of which country?
            </label>
          </form>

          <p className="countryName">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
