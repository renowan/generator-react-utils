import React from 'react'

import './<%= moduleName %>.scss'

export class <%= moduleName %> extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillUnmount (){

  }

  componentDidMount () {

  }

  render () {
  	return (
  		<div>
  		</div>
  	)
  }

}

<%= moduleName %>.propTypes = {
    foo: React.PropTypes.string
}

export default <%= moduleName %>
