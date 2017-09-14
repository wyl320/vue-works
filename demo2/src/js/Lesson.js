import React, { Component } from 'react'


class Lesson extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
              {<p>{this.props.lessons.title}</p>}
          </div>
        )
    }
}
export default Lesson;