import * as React from 'react'
import * as ReactDOM from 'react-dom'

import domlessMedia from 'react-domless-media'

const mediaQueries = {
	LARGE: 'screen and (min-width: 1024px)',
	MEDIUM: 'screen and (max-width: 1023px)',
	SMALL: 'screen and (max-width: 700px)',
	MICRO: 'screen and (max-width: 400px)'
}

const DOMLessMedia = domlessMedia(mediaQueries)

class ProblemComponent extends React.Component {
  render() {
    return <>
      <div>A</div>
      <div>B</div>
      <div>C</div>
      <div>D</div>
    </>
  }
}
                               
ReactDOM.render(
  <>
    <DOMLessMedia
      media={'LARGE'}
      match={<ProblemComponent />}
    />
  </>,
  document.querySelector("#root")
) 