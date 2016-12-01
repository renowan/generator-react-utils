import React from 'react'
import { bindActionCreators } from 'redux'
// import * as appAction from 'actions/appAction'

import './<%= moduleName %>View.scss'

export class <%= moduleName %>View extends React.Component {
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

  }
  
}

/*
<%= moduleName %>View.contextTypes = {
  router: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    <%= name %>: state.<%= name %>
  }
}

function mapDispatchToProps(dispatch) {
  return {
      appAction: bindActionCreators(<%= name %>Action, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= moduleName %>View)
*/

export default <%= moduleName %>View
